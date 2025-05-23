"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FileUploader from "@/components/file-uploader"
import BlogPostUploader from "@/components/blog-post-uploader"

export default function UploadsPage() {
  const [blogUploadPath, setBlogUploadPath] = useState<string | null>(null)
  const [portfolioUploadPath, setPortfolioUploadPath] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">File Uploads</h1>

      <Tabs defaultValue="blog-post" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="blog-post">Create Blog Post</TabsTrigger>
          <TabsTrigger value="blog">Upload Blog File</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio Items</TabsTrigger>
        </TabsList>

        <TabsContent value="blog-post" className="mt-6">
          <BlogPostUploader />
        </TabsContent>

        <TabsContent value="blog" className="mt-6">
          <FileUploader type="blog" onUploadComplete={(path) => setBlogUploadPath(path)} />

          {blogUploadPath && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Upload Complete</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Your blog post has been uploaded and will be available at:
              </p>
              <code className="bg-background p-2 rounded block overflow-x-auto">
                {`/blog/${blogUploadPath
                  .split("/")
                  .pop()
                  ?.replace(/\.(md|ipynb|json)$/, "")}`}
              </code>
            </div>
          )}
        </TabsContent>

        <TabsContent value="portfolio" className="mt-6">
          <FileUploader type="portfolio" onUploadComplete={(path) => setPortfolioUploadPath(path)} />

          {portfolioUploadPath && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Upload Complete</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Your portfolio item has been uploaded and is available at:
              </p>
              <code className="bg-background p-2 rounded block overflow-x-auto">{portfolioUploadPath}</code>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
