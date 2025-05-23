"use client"

import { useEffect, useRef } from "react"

interface MathRendererProps {
  children: string
  display?: boolean
}

export default function MathRenderer({ children, display = false }: MathRendererProps) {
  const mathRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mathRef.current) return

    // Check if MathJax is available (loaded via script tag in layout)
    if (typeof window !== "undefined" && window.MathJax) {
      const MathJax = window.MathJax as any

      // Render the math expression
      MathJax.typesetPromise([mathRef.current]).catch((err: any) => {
        console.error("MathJax error:", err)
      })
    }
  }, [children])

  return (
    <div ref={mathRef} className={display ? "math-block" : "math-inline"}>
      {display ? `$$${children}$$` : `$${children}$`}
    </div>
  )
}

// Add MathJax type to Window interface
declare global {
  interface Window {
    MathJax: any
  }
}
