"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import DitherBackground from "@/components/dither-background"
import OrbBackground from "@/components/orb-background"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Blog from "@/components/blog"
import Footer from "@/components/footer"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-x-hidden"
    >
      {/* Global Dither Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          style={{
            y: backgroundY,
            opacity: backgroundOpacity,
          }}
        >
          <DitherBackground />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />

        <main className="max-w-7xl 2xl:max-w-8xl mx-auto">
          {/* Hero Section with Orb Background */}
          <section className="relative">
            <div className="absolute inset-0 z-0">
              <OrbBackground variant="hero" />
            </div>
            <Hero />
          </section>

          {/* About Section with Orb Background */}
          <section id="about" className="relative">
            <div className="absolute inset-0 z-0">
              <OrbBackground variant="soft" />
            </div>
            <About />
          </section>

          {/* Experience Section with Orb Background */}
          <section id="experience" className="relative">
            <div className="absolute inset-0 z-0">
              <OrbBackground variant="soft" />
            </div>
            <Experience />
          </section>

          {/* Projects Section with Orb Background */}
          <section id="projects" className="relative">
            <div className="absolute inset-0 z-0">
              <OrbBackground variant="soft" />
            </div>
            <Projects />
          </section>

          {/* Blog Section with Orb Background */}
          <section id="blog" className="relative">
            <div className="absolute inset-0 z-0">
              <OrbBackground variant="ambient" />
            </div>
            <Blog />
          </section>

          {/* Footer Section with Orb Background */}
          <section id="footer" className="relative">
            <div className="absolute inset-0 z-0">
              <OrbBackground variant="ambient" />
            </div>
            <Footer />
          </section>
        </main>
      </div>
    </div>
  )
}
