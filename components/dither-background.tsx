"use client"

import { useEffect, useRef } from "react"

export default function DitherBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.005

      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % canvas.width
        const y = Math.floor(i / 4 / canvas.width)

        // Create more sophisticated dither pattern
        const wave1 = Math.sin(x * 0.02 + time * 2) * 0.5 + 0.5
        const wave2 = Math.cos(y * 0.02 + time * 1.5) * 0.5 + 0.5
        const noise = (Math.random() - 0.5) * 0.4

        const pattern = (wave1 * wave2 + noise) * 0.6
        const intensity = Math.floor(pattern * 255)

        // Subtle blue-tinted monochrome
        data[i] = intensity * 0.4 // Red
        data[i + 1] = intensity * 0.45 // Green
        data[i + 2] = intensity * 0.6 // Blue
        data[i + 3] = 45 // Higher alpha for more presence
      }

      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-cover"
      style={{
        filter: "contrast(1.4) brightness(0.7)",
        mixBlendMode: "screen",
      }}
    />
  )
}
