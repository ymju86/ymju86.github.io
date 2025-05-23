"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { getBlogPosts } from "@/lib/blog-service"
import type { BlogPost } from "@/types/blog"

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const posts = await getBlogPosts()
        setPopularPosts(posts)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
        setIsLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  const itemsPerView = isMobile ? 1 : 3
  const maxIndex = popularPosts.length - itemsPerView

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    if (carouselRef.current) {
      const translateX = (currentIndex * -100) / itemsPerView
      carouselRef.current.style.transform = `translateX(${translateX}%)`
    }
  }, [currentIndex, itemsPerView])

  if (isLoading) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Popular Blog Posts</h2>
          <p className="text-center">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  if (popularPosts.length === 0) {
    return null
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Blog Posts</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentIndex === 0}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentIndex >= maxIndex}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ width: `${(popularPosts.length / itemsPerView) * 100}%` }}
          >
            {popularPosts.map((post) => (
              <div key={post.id} className="px-2" style={{ width: `${(100 / popularPosts.length) * itemsPerView}%` }}>
                <Card className="h-full overflow-hidden">
                  <CardContent className="p-0">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.thumbnail || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{post.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
