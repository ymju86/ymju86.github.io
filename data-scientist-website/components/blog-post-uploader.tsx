"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Check, FileJson, Upload, X } from "lucide-react"
import type { BlogPostFormat } from "@/types/blog-post-format"

export default function BlogPostUploader() {
  const [isUploading, setIsUploading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [author, setAuthor] = useState("Youngmin Ju")
  const [tags, setTags] = useState("")
  const [content, setContent] = useState("")
  const [slug, setSlug] = useState("")
  const [thumbnail, setThumbnail] = useState("/placeholder.svg")

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    setSlug(generateSlug(newTitle))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)
    setError(null)
    setSuccess(false)

    try {
      // Create blog post format object
      const blogPost: BlogPostFormat = {
        metadata: {
          title,
          date: new Date().toISOString().split("T")[0],
          author,
          excerpt,
          thumbnail,
          tags: tags.split(",").map((tag) => tag.trim()),
        },
        content,
      }

      // Convert to JSON file
      const blob = new Blob([JSON.stringify(blogPost, null, 2)], { type: "application/json" })
      const file = new File([blob], `${slug}.json`, { type: "application/json" })

      // Create form data
      const formData = new FormData()
      formData.append("file", file)
      formData.append("type", "blog")

      // Upload the file
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Upload failed")
      }

      setSuccess(true)

      // Reset form after successful upload
      setTimeout(() => {
        setTitle("")
        setExcerpt("")
        setTags("")
        setContent("")
        setSlug("")
        setThumbnail("/placeholder.svg")
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Blog Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input id="title" value={title} onChange={handleTitleChange} placeholder="Blog post title" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="slug" className="text-sm font-medium">
              Slug
            </label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="post-url-slug"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="author" className="text-sm font-medium">
              Author
            </label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="excerpt" className="text-sm font-medium">
              Excerpt
            </label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short description of the blog post"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="tags" className="text-sm font-medium">
              Tags (comma separated)
            </label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="tag1, tag2, tag3"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="thumbnail" className="text-sm font-medium">
              Thumbnail URL
            </label>
            <Input
              id="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              placeholder="/path/to/image.jpg"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">
              Content (Markdown)
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="# Markdown content here"
              className="min-h-[300px] font-mono"
              required
            />
          </div>

          <Button type="submit" disabled={isUploading} className="w-full">
            {isUploading ? (
              <>
                <span className="mr-2">Uploading...</span>
                <Upload className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                <span className="mr-2">Create Blog Post</span>
                <FileJson className="h-4 w-4" />
              </>
            )}
          </Button>

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-sm p-2 bg-red-50 dark:bg-red-950/20 rounded">
              <X className="h-4 w-4" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 text-green-500 text-sm p-2 bg-green-50 dark:bg-green-950/20 rounded">
              <Check className="h-4 w-4" />
              <span>Blog post created successfully!</span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
