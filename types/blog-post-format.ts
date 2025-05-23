export interface BlogPostMetadata {
  title: string
  date: string
  author: string
  excerpt: string
  thumbnail?: string
  tags: string[]
}

export interface BlogPostFormat {
  metadata: BlogPostMetadata
  content: string
}
