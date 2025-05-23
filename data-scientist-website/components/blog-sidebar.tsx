import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface BlogSidebarProps {
  tags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
}

export default function BlogSidebar({ tags, selectedTags, onTagToggle }: BlogSidebarProps) {
  return (
    <div className="w-full md:w-64 shrink-0">
      <div className="sticky top-24 bg-card rounded-lg border p-6">
        <h3 className="font-semibold mb-4">Filter by Tags</h3>
        <div className="space-y-3">
          {tags.map((tag) => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox
                id={`tag-${tag}`}
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => onTagToggle(tag)}
              />
              <Label
                htmlFor={`tag-${tag}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {tag}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
