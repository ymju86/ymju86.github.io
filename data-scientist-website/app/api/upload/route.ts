import { type NextRequest, NextResponse } from "next/server"
import { saveUploadedFile } from "@/lib/file-upload-service"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const type = formData.get("type") as "blog" | "portfolio"

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (!type || (type !== "blog" && type !== "portfolio")) {
      return NextResponse.json({ error: "Invalid upload type" }, { status: 400 })
    }

    // Validate file type
    if (type === "blog") {
      const validExtensions = [".md", ".ipynb"]
      const fileExt = file.name.substring(file.name.lastIndexOf(".")).toLowerCase()

      if (!validExtensions.includes(fileExt)) {
        return NextResponse.json(
          {
            error: "Blog uploads must be Markdown (.md) or Jupyter Notebook (.ipynb) files",
          },
          { status: 400 },
        )
      }
    }

    // Save the file
    const filePath = await saveUploadedFile(file, type)

    return NextResponse.json({ success: true, filePath })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
