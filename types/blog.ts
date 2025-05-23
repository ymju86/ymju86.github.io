export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  tags: string[]
  slug: string
  thumbnail: string
  author?: string
  content?: string
}
