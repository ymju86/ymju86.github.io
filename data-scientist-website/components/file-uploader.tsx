"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Check, X, FileText, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface FileUploaderProps {
  type: "blog" | "portfolio"
  onUploadComplete?: (path: string) => void
}

export default function FileUploader({ type, onUploadComplete }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const acceptedTypes = type === "blog" ? ".md,.ipynb" : "image/*,.pdf,.docx"

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    setFile(selectedFile)
    setError(null)
    setSuccess(false)
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first")
      return
    }

    setUploading(true)
    setProgress(0)
    setError(null)
    setSuccess(false)

    // Create a simulated progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval)
          return 95
        }
        return prev + 5
      })
    }, 100)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("type", type)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      clearInterval(progressInterval)

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Upload failed")
      }

      const data = await response.json()
      setProgress(100)
      setSuccess(true)

      if (onUploadComplete) {
        onUploadComplete(data.filePath)
      }
    } catch (err) {
      clearInterval(progressInterval)
      setProgress(0)
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className={`border-2 border-dashed rounded-lg p-8 w-full text-center cursor-pointer transition-colors
              ${error ? "border-red-500 bg-red-50 dark:bg-red-950/20" : ""}
              ${success ? "border-green-500 bg-green-50 dark:bg-green-950/20" : ""}
              ${!error && !success ? "border-muted-foreground/25 hover:border-muted-foreground/50" : ""}
            `}
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            {file ? (
              <div className="flex flex-col items-center gap-2">
                {type === "blog" ? <FileText size={40} /> : <ImageIcon size={40} />}
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload size={40} className="text-muted-foreground" />
                <p className="text-sm font-medium">
                  {type === "blog" ? "Upload a Markdown or Jupyter Notebook file" : "Upload an image or document"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {type === "blog" ? "Supported formats: .md, .ipynb" : "Supported formats: Images, PDF, DOCX"}
                </p>
              </div>
            )}

            <input
              id="file-upload"
              type="file"
              accept={acceptedTypes}
              onChange={handleFileChange}
              className="hidden"
              disabled={uploading}
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-sm">
              <X size={16} />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 text-green-500 text-sm">
              <Check size={16} />
              <span>File uploaded successfully!</span>
            </div>
          )}

          {uploading && (
            <div className="w-full">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-center mt-1 text-muted-foreground">Uploading... {progress}%</p>
            </div>
          )}

          <Button onClick={handleUpload} disabled={!file || uploading} className="w-full">
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
