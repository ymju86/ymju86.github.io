import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, the project you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/portfolio">Back to Portfolio</Link>
      </Button>
    </div>
  )
}
