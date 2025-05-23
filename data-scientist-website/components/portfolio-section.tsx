import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Portfolio project data
const projects = [
  {
    id: 1,
    title: "Customer Segmentation Analysis",
    description:
      "A customer segmentation analysis project using K-means clustering. Analyzed customer behavior patterns to inform marketing strategies.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Time Series Forecasting Model",
    description:
      "A time series forecasting model using ARIMA and LSTM. Predicted sales volumes to optimize inventory management.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "TensorFlow", "Keras", "Statsmodels"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "NLP Sentiment Analysis",
    description:
      "A sentiment analysis project using BERT for customer reviews. Analyzed product review sentiment to identify areas for improvement.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "PyTorch", "Transformers", "NLTK"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Image Classification Model",
    description:
      "An image classification model using CNN. Automatically classified product images to streamline catalog management.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "TensorFlow", "OpenCV", "Keras"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <p className="text-muted-foreground">
          I've worked on various projects in data analysis, machine learning, and deep learning. Each project was
          designed to solve real business problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48 w-full">
              <Image
                src={
                  project.id === 1
                    ? "/images/ds1.png"
                    : project.id === 2
                      ? "/images/ds2.png"
                      : project.id === 3
                        ? "/images/ds3.png"
                        : project.id === 4
                          ? "/images/ds4.png"
                          : project.image || "/placeholder.svg"
                }
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-6">
              <div className="flex gap-2 w-full">
                <Button asChild variant="outline" className="flex-1">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
