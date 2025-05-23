import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  tags: string[]
  slug: string
  thumbnail: string
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={post.thumbnail || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <CardContent className="flex-1 p-6">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-semibold text-xl mb-2 hover:text-primary transition-colors">{post.title}</h3>
        </Link>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-muted rounded-full text-xs">
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted rounded-full text-xs">+{post.tags.length - 3}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t p-6 pt-4">
        <div className="text-sm text-muted-foreground">{post.date}</div>
        <Link href={`/blog/${post.slug}`} className="ml-auto text-sm font-medium text-primary hover:underline">
          Read More
        </Link>
      </CardFooter>
    </Card>
  )
}
