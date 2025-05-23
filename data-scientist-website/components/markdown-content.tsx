"use client"

import { useEffect, useState, useRef } from "react"

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const [parsedContent, setParsedContent] = useState<string>("")
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Process the markdown content
    const processedContent = processMarkdown(content)
    setParsedContent(processedContent)
  }, [content])

  useEffect(() => {
    // Add click handlers to copy buttons after the content is rendered
    const copyButtons = contentRef.current?.querySelectorAll(".copy-code-button")

    const handleCopyClick = async (e: Event) => {
      const button = e.currentTarget as HTMLButtonElement
      const codeBlock = button.closest(".code-block-wrapper")?.querySelector("code")

      if (codeBlock) {
        const code = codeBlock.textContent || ""
        await navigator.clipboard.writeText(code)

        // Show success state
        const originalInnerHTML = button.innerHTML
        button.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>'

        // Reset after 2 seconds
        setTimeout(() => {
          button.innerHTML = originalInnerHTML
        }, 2000)
      }
    }

    copyButtons?.forEach((button) => {
      button.addEventListener("click", handleCopyClick)
    })

    return () => {
      // Clean up event listeners
      copyButtons?.forEach((button) => {
        button.removeEventListener("click", handleCopyClick)
      })
    }
  }, [parsedContent])

  return (
    <div
      ref={contentRef}
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    />
  )
}

function processMarkdown(markdown: string): string {
  // Process headings (# Heading)
  let processed = markdown.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, content) => {
    const level = hashes.length
    return `<h${level}>${content}</h${level}>`
  })

  // Process bold (**text**)
  processed = processed.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")

  // Process italic (*text*)
  processed = processed.replace(/\*(.+?)\*/g, "<em>$1</em>")

  // Process links [text](url)
  processed = processed.replace(/\[(.+?)\]$$(.+?)$$/g, '<a href="$2">$1</a>')

  // Process lists
  processed = processed.replace(/^\s*[-*+]\s+(.+)$/gm, "<li>$1</li>")
  processed = processed.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")

  // Process math expressions ($$...$$) - add a class for styling but don't try to render with KaTeX
  processed = processed.replace(/\$\$([\s\S]+?)\$\$/g, (match, formula) => {
    return `<div class="math-block">\$\$${formula}\$\$</div>`
  })

  // Process inline math expressions ($...$)
  processed = processed.replace(/\$([^$\n]+?)\$/g, (match, formula) => {
    return `<span class="math-inline">\$${formula}\$</span>`
  })

  // Process code blocks with language specification and add copy button
  processed = processed.replace(/```(\w+)?\n([\s\S]+?)```/g, (match, language, code) => {
    const languageClass = language ? ` language-${language}` : ""
    const languageLabel = language ? `<div class="code-language">${language}</div>` : ""

    // Escape HTML in code
    const escapedCode = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")

    // Apply basic syntax highlighting for Python
    let highlightedCode = escapedCode
    if (language === "python") {
      // Highlight keywords
      highlightedCode = highlightedCode.replace(
        /\b(import|from|def|class|if|elif|else|for|while|try|except|finally|return|raise|with|as|in|is|not|and|or|True|False|None)\b/g,
        '<span class="syntax-keyword">$1</span>',
      )

      // Highlight strings
      highlightedCode = highlightedCode.replace(/(".*?"|'.*?')/g, '<span class="syntax-string">$1</span>')

      // Highlight comments
      highlightedCode = highlightedCode.replace(/(#.*)$/gm, '<span class="syntax-comment">$1</span>')

      // Highlight numbers
      highlightedCode = highlightedCode.replace(/\b(\d+\.?\d*|\.\d+)\b/g, '<span class="syntax-number">$1</span>')

      // Highlight function calls
      highlightedCode = highlightedCode.replace(/(\w+)\(/g, '<span class="syntax-function">$1</span>(')
    }

    return `
      <div class="code-block-wrapper">
        <div class="code-header">
          ${languageLabel}
          <button class="copy-code-button" aria-label="Copy code to clipboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
          </button>
        </div>
        <pre class="code-block${languageClass}"><code>${highlightedCode}</code></pre>
      </div>
    `
  })

  // Process inline code (`code`)
  processed = processed.replace(/`([^`]+)`/g, "<code>$1</code>")

  // Process paragraphs (any text not processed by above rules)
  processed = processed.replace(/^(?!<[a-z]).+$/gm, "<p>$&</p>")

  // Fix empty lines between paragraphs
  processed = processed.replace(/<\/p>\n<p>/g, "</p><p>")

  return processed
}
