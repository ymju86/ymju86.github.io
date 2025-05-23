"use client"

import { useState, useEffect } from "react"
import BlogCard from "@/components/blog-card"
import BlogSidebar from "@/components/blog-sidebar"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { getBlogPosts } from "@/lib/blog-service"
import type { BlogPost } from "@/types/blog"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [allTags, setAllTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const posts = await getBlogPosts()
        setBlogPosts(posts)

        // Extract all unique tags
        const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))
        setAllTags(tags)

        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
        setIsLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  // Filter posts by search query and tags
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag))

    return matchesSearch && matchesTags
  })

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading blog posts...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <BlogSidebar tags={allTags} selectedTags={selectedTags} onTagToggle={handleTagToggle} />

        <div className="flex-1">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No results found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
