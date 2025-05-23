"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getBlogPostBySlug } from "@/lib/blog-service"
import type { BlogPost as BlogPostType } from "@/types/blog"
import { useRouter } from "next/navigation"
import MarkdownContent from "@/components/markdown-content"
import Script from "next/script"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        const fetchedPost = await getBlogPostBySlug(params.slug)
        setPost(fetchedPost)
        setIsLoading(false)

        if (!fetchedPost) {
          // If post not found, redirect after a short delay
          setTimeout(() => {
            router.push("/blog")
          }, 2000)
        }
      } catch (error) {
        console.error("Error fetching blog post:", error)
        setIsLoading(false)
      }
    }

    fetchBlogPost()
  }, [params.slug, router])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading post...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-4">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link href="/blog" className="text-primary hover:underline inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Load MathJax from CDN */}
      <Script
        id="mathjax-script"
        strategy="afterInteractive"
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
      />

      <div className="container mx-auto px-4 py-12">
        <Link href="/blog" className="text-primary hover:underline inline-flex items-center mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center text-muted-foreground mb-6">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>

          <div className="mb-8">
            <Image
              src={post.thumbnail || "/placeholder.svg?height=400&width=800"}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {post.content ? (
            <MarkdownContent content={post.content} />
          ) : (
            <p className="text-muted-foreground">{post.excerpt}</p>
          )}

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-medium mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
