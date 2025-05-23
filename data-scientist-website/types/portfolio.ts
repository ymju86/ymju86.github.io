export interface PortfolioProject {
  id: number
  title: string
  slug: string
  description: string
  fullDescription: string
  methodology: string
  results: string
  conclusion?: string
  image: string
  tags: string[]
  category: string
  demoUrl?: string
  githubUrl?: string
  visualizations?: {
    image: string
    caption: string
  }[]
}
