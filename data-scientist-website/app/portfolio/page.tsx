"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioProjects } from "@/data/portfolio-data"
import PortfolioFilters from "@/components/portfolio-filters"

export default function PortfolioPage() {
  // Extract all unique tags and categories
  const allTags = Array.from(new Set(portfolioProjects.flatMap((project) => project.tags))).sort()
  const categories = [...new Set(portfolioProjects.map((project) => project.category))].sort()

  // State for selected tags and active category
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects)

  // Filter projects based on selected tags and category
  useEffect(() => {
    let result = portfolioProjects

    // Filter by category if one is selected
    if (activeCategory) {
      result = result.filter((project) => project.category === activeCategory)
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter((project) => selectedTags.some((tag) => project.tags.includes(tag)))
    }

    setFilteredProjects(result)
  }, [selectedTags, activeCategory])

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedTags([])
    setActiveCategory(null)
  }

  // Set category filter
  const setCategory = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <p className="text-muted-foreground">
          Explore my data science projects spanning machine learning, data visualization, statistical analysis, and
          more. Each project demonstrates practical applications of data science techniques to solve real-world
          problems.
        </p>
      </div>

      {/* Filtering UI */}
      <PortfolioFilters
        allTags={allTags}
        selectedTags={selectedTags}
        onTagToggle={toggleTag}
        onClearTags={() => setSelectedTags([])}
        allCategories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setCategory}
        onClearCategory={() => setActiveCategory(null)}
        onClearAll={clearFilters}
        resultCount={filteredProjects.length}
        totalCount={portfolioProjects.length}
      />

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No matching projects found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your filters to find what you're looking for.</p>
          <Button onClick={clearFilters}>Clear all filters</Button>
        </div>
      )}

      {/* Project grid */}
      {filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`}>
              <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
