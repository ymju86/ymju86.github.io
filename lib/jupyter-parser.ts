import type { BlogPost } from "@/types/blog"

export async function parseJupyterNotebook(content: string): Promise<Partial<BlogPost>> {
  try {
    const notebook = JSON.parse(content)

    // Extract title from the first markdown cell if available
    let title = "Untitled Notebook"
    let excerpt = ""
    let markdownContent = ""

    // Look for title in metadata
    if (notebook.metadata && notebook.metadata.title) {
      title = notebook.metadata.title
    }

    // Process cells
    if (notebook.cells && Array.isArray(notebook.cells)) {
      // Try to find a title in the first markdown cell
      const firstMarkdownCell = notebook.cells.find(
        (cell) => cell.cell_type === "markdown" && cell.source && Array.isArray(cell.source),
      )

      if (firstMarkdownCell && firstMarkdownCell.source[0].startsWith("# ")) {
        title = firstMarkdownCell.source[0].replace("# ", "").trim()
      }

      // Convert cells to markdown
      markdownContent = notebook.cells
        .map((cell) => {
          if (cell.cell_type === "markdown" && cell.source) {
            // Join markdown source lines
            const source = Array.isArray(cell.source) ? cell.source.join("") : cell.source
            return source
          } else if (cell.cell_type === "code" && cell.source) {
            // Format code cells with output
            const source = Array.isArray(cell.source) ? cell.source.join("") : cell.source
            let cellContent = `\`\`\`python\n${source}\n\`\`\``

            // Add outputs if available
            if (cell.outputs && Array.isArray(cell.outputs) && cell.outputs.length > 0) {
              cellContent += "\n\n**Output:**\n\n"

              cell.outputs.forEach((output) => {
                if (output.output_type === "stream" && output.text) {
                  const text = Array.isArray(output.text) ? output.text.join("") : output.text
                  cellContent += `\`\`\`\n${text}\n\`\`\``
                } else if (output.output_type === "execute_result" && output.data && output.data["text/plain"]) {
                  const text = Array.isArray(output.data["text/plain"])
                    ? output.data["text/plain"].join("")
                    : output.data["text/plain"]
                  cellContent += `\`\`\`\n${text}\n\`\`\``
                } else if (output.output_type === "display_data" && output.data) {
                  // Handle images or other display data
                  if (output.data["image/png"]) {
                    cellContent += `![Output Image](data:image/png;base64,${output.data["image/png"]})`
                  } else if (output.data["text/html"]) {
                    const html = Array.isArray(output.data["text/html"])
                      ? output.data["text/html"].join("")
                      : output.data["text/html"]
                    cellContent += `<div class="jp-OutputArea-output">${html}</div>`
                  }
                }
              })
            }

            return cellContent
          }
          return ""
        })
        .join("\n\n")

      // Extract excerpt from the first few markdown cells
      const markdownCells = notebook.cells
        .filter((cell) => cell.cell_type === "markdown")
        .slice(0, 2)
        .map((cell) => (Array.isArray(cell.source) ? cell.source.join("") : cell.source))
        .join(" ")
        .replace(/[#*_`]/g, "")
        .trim()

      excerpt = markdownCells.length > 150 ? markdownCells.substring(0, 150) + "..." : markdownCells
    }

    return {
      title,
      excerpt,
      content: markdownContent,
      tags: ["jupyter", "notebook"],
    }
  } catch (error) {
    console.error("Error parsing Jupyter notebook:", error)
    return {
      title: "Error Parsing Notebook",
      content: "There was an error parsing this Jupyter notebook file.",
    }
  }
}
