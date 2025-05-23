import type { BlogPost } from "@/types/blog"
import type { BlogPostFormat } from "@/types/blog-post-format"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { parseJupyterNotebook } from "./jupyter-parser"

const postsDirectory = path.join(process.cwd(), "public/uploads/blog")
const blogPostsDirectory = path.join(process.cwd(), "data/blog-posts")

// Ensure the directories exist
try {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
  if (!fs.existsSync(blogPostsDirectory)) {
    fs.mkdirSync(blogPostsDirectory, { recursive: true })
  }
} catch (error) {
  console.error("Failed to create blog directories:", error)
}

// In-memory blog posts (these will be supplemented by uploaded files)
const blogPosts: BlogPost[] = []

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Get posts from uploaded files
    const uploadedPosts = await getAllBlogPosts()

    // Combine with in-memory posts, assigning new IDs to uploaded posts
    const combinedPosts = [
      ...blogPosts,
      ...uploadedPosts.map((post, index) => ({
        ...post,
        id: blogPosts.length + index + 1,
      })),
    ]

    // Sort by date (newest first)
    return combinedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return blogPosts
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // First check in-memory posts
  const memoryPost = blogPosts.find((post) => post.slug === slug)
  if (memoryPost) {
    return memoryPost
  }

  // Next, check the new format blog posts
  try {
    const jsonPath = path.join(blogPostsDirectory, `${slug}.json`)
    if (fs.existsSync(jsonPath)) {
      const fileContents = fs.readFileSync(jsonPath, "utf8")
      const blogData = JSON.parse(fileContents) as BlogPostFormat

      return {
        id: 0, // Will be assigned by getBlogPosts
        slug,
        title: blogData.metadata.title,
        excerpt: blogData.metadata.excerpt,
        date: blogData.metadata.date,
        author: blogData.metadata.author,
        tags: blogData.metadata.tags,
        content: blogData.content,
        thumbnail: blogData.metadata.thumbnail || "/placeholder.svg",
      }
    }
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug} from JSON:`, error)
  }

  // If not found, check uploaded files
  try {
    // Check for markdown file
    const mdPath = path.join(postsDirectory, `${slug}.md`)
    if (fs.existsSync(mdPath)) {
      const fileContents = fs.readFileSync(mdPath, "utf8")
      const matterResult = matter(fileContents)

      return {
        id: 0, // Will be assigned by getBlogPosts
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date ? new Date(matterResult.data.date).toLocaleDateString() : "Unknown date",
        author: matterResult.data.author || "Anonymous",
        excerpt: matterResult.data.excerpt || matterResult.content.slice(0, 150) + "...",
        content: matterResult.content,
        thumbnail: matterResult.data.thumbnail || "/placeholder.svg",
        tags: matterResult.data.tags || [],
      }
    }

    // Check for Jupyter notebook file
    const ipynbPath = path.join(postsDirectory, `${slug}.ipynb`)
    if (fs.existsSync(ipynbPath)) {
      const fileContents = fs.readFileSync(ipynbPath, "utf8")
      const notebookData = await parseJupyterNotebook(fileContents)

      return {
        id: 0, // Will be assigned by getBlogPosts
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
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
  }

  return null
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = []

  // Get posts from the new format
  try {
    if (fs.existsSync(blogPostsDirectory)) {
      const jsonFiles = fs.readdirSync(blogPostsDirectory).filter((file) => file.endsWith(".json"))

      for (const file of jsonFiles) {
        const slug = file.replace(".json", "")
        const fullPath = path.join(blogPostsDirectory, file)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        try {
          // Safely parse JSON with error handling
          const blogData = JSON.parse(fileContents) as BlogPostFormat

          posts.push({
            id: 0, // Will be assigned by getBlogPosts
            slug,
            title: blogData.metadata.title,
            excerpt: blogData.metadata.excerpt,
            date: blogData.metadata.date,
            author: blogData.metadata.author,
            tags: blogData.metadata.tags || [],
            content: blogData.content,
            thumbnail: blogData.metadata.thumbnail || "/placeholder.svg",
          })
        } catch (error) {
          console.error(`Error parsing JSON for ${file}:`, error)
          // Add a placeholder entry so the blog post is still visible
          posts.push({
            id: 0,
            slug,
            title: `${slug} (Error loading)`,
            excerpt: "There was an error loading this blog post. Please try again later.",
            date: new Date().toLocaleDateString(),
            author: "System",
            tags: ["error"],
            content: "There was an error loading this blog post content. Please try again later.",
            thumbnail: "/placeholder.svg",
          })
        }
      }
    }
  } catch (error) {
    console.error("Error getting blog posts from JSON files:", error)
  }

  // Get posts from traditional formats (md, ipynb)
  try {
    if (fs.existsSync(postsDirectory)) {
      const fileNames = fs.readdirSync(postsDirectory)
      const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
          // Remove file extension to get slug
          const slug = fileName.replace(/\.(md|ipynb)$/, "")
          const fullPath = path.join(postsDirectory, fileName)

          // Read file content
          const fileContents = fs.readFileSync(fullPath, "utf8")

          // Process based on file type
          if (fileName.endsWith(".md")) {
            // Parse markdown with frontmatter
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
            // Parse Jupyter notebook
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
        }),
      )

      // Add valid posts to our collection
      posts.push(...allPostsData.filter(Boolean))
    }
  } catch (error) {
    console.error("Error getting blog posts:", error)
  }

  // Sort posts by date
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
