"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterProps {
  allTags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
  onClearTags: () => void
  allCategories: string[]
  activeCategory: string | null
  onCategoryChange: (category: string) => void
  onClearCategory: () => void
  onClearAll: () => void
  resultCount: number
  totalCount: number
}

export default function PortfolioFilters({
  allTags,
  selectedTags,
  onTagToggle,
  onClearTags,
  allCategories,
  activeCategory,
  onCategoryChange,
  onClearCategory,
  onClearAll,
  resultCount,
  totalCount,
}: FilterProps) {
  return (
    <div className="mb-8 space-y-6">
      {/* Category filters */}
      <div>
        <h2 className="text-lg font-medium mb-3">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}

          {activeCategory && (
            <Button variant="ghost" size="sm" onClick={onClearCategory} className="rounded-full text-muted-foreground">
              Clear category
            </Button>
          )}
        </div>
      </div>

      {/* Tag filters */}
      <div>
        <h2 className="text-lg font-medium mb-3">Filter by Technology</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className={`cursor-pointer px-3 py-1 ${selectedTags.includes(tag) ? "bg-primary" : ""}`}
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}

          {selectedTags.length > 0 && (
            <Badge variant="ghost" className="cursor-pointer px-3 py-1 text-muted-foreground" onClick={onClearTags}>
              Clear tags
            </Badge>
          )}
        </div>
      </div>

      {/* Active filters display */}
      {(selectedTags.length > 0 || activeCategory) && (
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {activeCategory && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {activeCategory}
                <X className="h-3 w-3 cursor-pointer" onClick={onClearCategory} />
              </Badge>
            )}

            {selectedTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                {tag}
                <X className="h-3 w-3 cursor-pointer" onClick={() => onTagToggle(tag)} />
              </Badge>
            ))}

            <Button variant="ghost" size="sm" onClick={onClearAll} className="text-xs h-7">
              Clear all
            </Button>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {resultCount} of {totalCount} projects
      </div>
    </div>
  )
}
