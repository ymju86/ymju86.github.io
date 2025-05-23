import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { parseJupyterNotebook } from "./jupyter-parser"
import type { BlogPost } from "@/types/blog"
import type { BlogPostFormat } from "@/types/blog-post-format"

const blogUploadsDir = path.join(process.cwd(), "public/uploads/blog")
const portfolioUploadsDir = path.join(process.cwd(), "public/uploads/portfolio")
const blogPostsDir = path.join(process.cwd(), "data/blog-posts")

// Ensure directories exist
try {
  if (!fs.existsSync(blogUploadsDir)) {
    fs.mkdirSync(blogUploadsDir, { recursive: true })
  }
  if (!fs.existsSync(portfolioUploadsDir)) {
    fs.mkdirSync(portfolioUploadsDir, { recursive: true })
  }
  if (!fs.existsSync(blogPostsDir)) {
    fs.mkdirSync(blogPostsDir, { recursive: true })
  }
} catch (error) {
  console.error("Failed to create upload directories:", error)
}

export async function saveUploadedFile(file: File, type: "blog" | "portfolio"): Promise<string> {
  try {
    const fileBuffer = await file.arrayBuffer()
    const fileName = file.name.replace(/\s+/g, "-").toLowerCase()
    const uploadDir = type === "blog" ? blogUploadsDir : portfolioUploadsDir
    const filePath = path.join(uploadDir, fileName)

    fs.writeFileSync(filePath, Buffer.from(fileBuffer))

    // If this is a blog post in JSON format, process it
    if (type === "blog" && fileName.endsWith(".json")) {
      try {
        const content = Buffer.from(fileBuffer).toString("utf-8")
        const blogPostData = JSON.parse(content) as BlogPostFormat

        // Save to the blog posts directory with slug as filename
        const slug = fileName.replace(".json", "")
        const blogPostPath = path.join(blogPostsDir, `${slug}.json`)
        fs.writeFileSync(blogPostPath, JSON.stringify(blogPostData, null, 2))
      } catch (err) {
        console.error("Error processing blog post JSON:", err)
      }
    }

    return `/${type === "blog" ? "uploads/blog" : "uploads/portfolio"}/${fileName}`
  } catch (error) {
    console.error("Error saving uploaded file:", error)
    throw new Error("Failed to save file")
  }
}

export async function getBlogPostsFromFiles(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(blogUploadsDir)) {
      return []
    }

    const fileNames = fs.readdirSync(blogUploadsDir)
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.(md|ipynb)$/, "")
        const fullPath = path.join(blogUploadsDir, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        if (fileName.endsWith(".md")) {
          const matterResult = matter(fileContents)
          return {
            slug,
            title: matterResult.data.title || slug,
            date: matterResult.data.date ? new Date(matterResult.data.date).toLocaleDateString() : "Unknown date",
            author: matterResult.data.author || "Anonymous",
            excerpt: matterResult.data.excerpt || matterResult.content.slice(0, 150) + "...",
            content: matterResult.content,
            thumbnail: matterResult.data.thumbnail || null,
            tags: matterResult.data.tags || [],
          }
        } else if (fileName.endsWith(".ipynb")) {
          const notebookData = await parseJupyterNotebook(fileContents)
          return {
            slug,
            title: notebookData.title || slug,
            date: new Date().toLocaleDateString(),
            author: "Jupyter Author",
            excerpt: notebookData.excerpt || "Jupyter notebook content...",
            content: notebookData.content || "",
            thumbnail: null,
            tags: notebookData.tags || ["jupyter", "notebook"],
          }
        }

        return {
          slug,
          title: slug,
          date: new Date().toLocaleDateString(),
          author: "Unknown",
          excerpt: "Unsupported file format",
          content: "This file format is not supported.",
          thumbnail: null,
          tags: [],
        }
      }),
    )

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error("Error getting blog posts from files:", error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const mdPath = path.join(blogUploadsDir, `${slug}.md`)
    if (fs.existsSync(mdPath)) {
      const fileContents = fs.readFileSync(mdPath, "utf8")
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date ? new Date(matterResult.data.date).toLocaleDateString() : "Unknown date",
        author: matterResult.data.author || "Anonymous",
        excerpt: matterResult.data.excerpt || matterResult.content.slice(0, 150) + "...",
        content: matterResult.content,
        thumbnail: matterResult.data.thumbnail || null,
        tags: matterResult.data.tags || [],
      }
    }

    const ipynbPath = path.join(blogUploadsDir, `${slug}.ipynb`)
    if (fs.existsSync(ipynbPath)) {
      const fileContents = fs.readFileSync(ipynbPath, "utf8")
      const notebookData = await parseJupyterNotebook(fileContents)

      return {
        slug,
        title: notebookData.title || slug,
        date: new Date().toLocaleDateString(),
        author: "Jupyter Author",
        excerpt: notebookData.excerpt || "Jupyter notebook content...",
        content: notebookData.content || "",
        thumbnail: null,
        tags: notebookData.tags || ["jupyter", "notebook"],
      }
    }

    return null
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error)
    return null
  }
}
