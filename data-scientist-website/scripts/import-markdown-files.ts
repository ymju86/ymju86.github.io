import fs from "fs"
import path from "path"

// This script would be run manually to import the provided Markdown files
async function importMarkdownFiles() {
  const sourceDir = path.join(process.cwd(), "markdown-files")
  const targetDir = path.join(process.cwd(), "public/uploads/blog")

  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  // Read all files in the source directory
  const files = fs.readdirSync(sourceDir)

  for (const file of files) {
    if (file.endsWith(".md") || file.endsWith(".ipynb")) {
      const sourcePath = path.join(sourceDir, file)
      const targetPath = path.join(targetDir, file)

      // Copy the file
      fs.copyFileSync(sourcePath, targetPath)
      console.log(`Imported ${file} to ${targetPath}`)
    }
  }

  console.log("Import complete!")
}

// Run the import function
importMarkdownFiles().catch(console.error)
