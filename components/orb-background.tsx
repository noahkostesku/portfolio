"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface OrbBackgroundProps {
  variant?: "soft" | "ambient" | "hero"
}

export default function OrbBackground({ variant = "soft" }: OrbBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const getOrbConfig = () => {
    switch (variant) {
      case "hero":
        return { count: 2, baseSize: 600, opacity: 0.08, blur: "3px" }
      case "soft":
        return { count: 3, baseSize: 400, opacity: 0.12, blur: "2px" }
      case "ambient":
        return { count: 4, baseSize: 250, opacity: 0.15, blur: "1px" }
      default:
        return { count: 3, baseSize: 400, opacity: 0.12, blur: "2px" }
    }
  }

  const config = getOrbConfig()

  const orbs = Array.from({ length: config.count }, (_, i) => ({
    id: i,
    size: config.baseSize + Math.random() * 200,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: 25 + Math.random() * 15,
    delay: i * 3,
  }))

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, 
              rgba(200,220,255,${config.opacity}) 0%, 
              rgba(150,170,200,${config.opacity * 0.7}) 30%, 
              rgba(100,120,150,${config.opacity * 0.4}) 60%, 
              transparent 100%)`,
            filter: `blur(${config.blur})`,
          }}
          initial={{
            x: `${orb.initialX}vw`,
            y: `${orb.initialY}vh`,
          }}
          animate={{
            x: [
              `${orb.initialX}vw`,
              `${(orb.initialX + 40) % 100}vw`,
              `${(orb.initialX - 20) % 100}vw`,
              `${orb.initialX}vw`,
            ],
            y: [
              `${orb.initialY}vh`,
              `${(orb.initialY + 30) % 100}vh`,
              `${(orb.initialY - 15) % 100}vh`,
              `${orb.initialY}vh`,
            ],
          }}
          transition={{
            duration: orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  )
}
