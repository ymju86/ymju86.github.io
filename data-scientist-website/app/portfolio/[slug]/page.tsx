"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioProjects } from "@/data/portfolio-data"

export default function PortfolioProjectPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const project = portfolioProjects.find((p) => p.slug === params.slug)
  const [relatedProjects, setRelatedProjects] = useState<typeof portfolioProjects>([])
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  useEffect(() => {
    if (!project) {
      router.push("/portfolio/not-found")
      return
    }

    // Find related projects based on selected tag or category
    let related
    if (selectedTag) {
      related = portfolioProjects.filter((p) => p.slug !== project.slug && p.tags.includes(selectedTag))
    } else {
      related = portfolioProjects.filter((p) => p.slug !== project.slug && p.category === project.category)
    }

    setRelatedProjects(related.slice(0, 3))
  }, [project, selectedTag, router])

  if (!project) {
    return null // This will be handled by the useEffect
  }

  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/portfolio" className="text-primary hover:underline inline-flex items-center mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Portfolio
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.demoUrl && (
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>{project.fullDescription}</p>

            <h2>Methodology</h2>
            <p>{project.methodology}</p>

            <h2>Results</h2>
            <p>{project.results}</p>

            {project.visualizations && (
              <>
                <h2>Visualizations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                  {project.visualizations.map((viz, index) => (
                    <div key={index} className="relative h-[250px] rounded-lg overflow-hidden border">
                      <Image src={viz.image || "/placeholder.svg"} alt={viz.caption} fill className="object-contain" />
                      <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm">
                        {viz.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {project.conclusion && (
              <>
                <h2>Conclusion</h2>
                <p>{project.conclusion}</p>
              </>
            )}
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {selectedTag ? `More Projects with ${selectedTag}` : "Related Projects"}
              </h2>
              {selectedTag && (
                <Button variant="ghost" size="sm" onClick={() => setSelectedTag(null)}>
                  Show all related
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.slug} href={`/portfolio/${relatedProject.slug}`}>
                  <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                    <div className="relative h-40 w-full">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-base mb-2">{relatedProject.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{relatedProject.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
