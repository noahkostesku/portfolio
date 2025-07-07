"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const [showSubtext, setShowSubtext] = useState(false)
  const fullText = "AI Researcher | Builder"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
        setTimeout(() => setShowSubtext(true), 500)
      }
    }, 120)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-950/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl 2xl:max-w-8xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 2xl:gap-24 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-12 xl:space-y-16"
          >
            <div className="space-y-8 xl:space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative"
              >
                <h1 className="text-6xl md:text-8xl xl:text-9xl 2xl:text-8xl font-light tracking-[-0.02em] leading-none">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    NOAH
                  </span>
                </h1>
                <h1 className="text-6xl md:text-8xl xl:text-9xl 2xl:text-8xl font-light tracking-[-0.02em] leading-none mt-2">
                  <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent">
                    KOSTESKU
                  </span>
                </h1>
              </motion.div>

              <div className="h-16 xl:h-20 flex items-start">
                <span className="font-mono text-lg md:text-xl xl:text-2xl text-gray-300 tracking-wide leading-relaxed">
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                    className="ml-1 text-blue-400"
                  >
                    _
                  </motion.span>
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showSubtext ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="space-y-8 xl:space-y-12"
            >
              <p className="text-lg md:text-xl xl:text-2xl text-gray-400 max-w-xl xl:max-w-2xl leading-relaxed font-light">
                Building intelligent systems that bridge the gap between human intuition and machine precision.
                <br />
                Crafting the future of AI-driven experiences.
              </p>

              <div className="flex space-x-8 xl:space-x-12">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 xl:px-10 xl:py-5 border border-gray-600/50 hover:border-gray-400/70 transition-all duration-300 font-mono text-sm xl:text-base tracking-wide backdrop-blur-sm bg-black/20 cursor-pointer"
                >
                  <span className="group-hover:text-white transition-colors">Explore Work</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/noahkostesku"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 xl:px-10 xl:py-5 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 font-mono text-sm xl:text-base tracking-wide cursor-pointer"
                >
                  <span className="group-hover:text-white transition-colors">Connect</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image - Redesigned */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated glowing orbs moving around the card */}
              <motion.div
                className="absolute z-10"
                style={{ top: '-18px', left: '50%', transform: 'translateX(-50%)' }}
                animate={{
                  x: [0, 80, 0, -80, 0],
                  y: [0, 40, 80, 40, 0],
                  opacity: [0.7, 1, 0.7, 1, 0.7]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-8 h-8 rounded-full bg-cyan-400/60 blur-lg shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute z-10"
                style={{ bottom: '-18px', left: '10%', transform: 'translateX(-50%)' }}
                animate={{
                  x: [0, 60, 0, -60, 0],
                  y: [0, -40, -80, -40, 0],
                  opacity: [0.6, 1, 0.6, 1, 0.6]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 2 }}
              >
                <div className="w-6 h-6 rounded-full bg-purple-400/50 blur-lg shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute z-10"
                style={{ top: '30%', right: '-18px', transform: 'translateY(-50%)' }}
                animate={{
                  x: [0, -40, 0, 40, 0],
                  y: [0, 60, 120, 60, 0],
                  opacity: [0.5, 1, 0.5, 1, 0.5]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 4 }}
              >
                <div className="w-5 h-5 rounded-full bg-pink-400/40 blur-lg shadow-lg" />
              </motion.div>
              {/* Main container - Changed to rectangular with rounded corners */}
              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] xl:w-[28rem] xl:h-[32rem] 2xl:w-[32rem] 2xl:h-[36rem]">
                {/* Ambient background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-3xl blur-3xl"></div>

                {/* Outer frames - Updated for rectangular design */}
                <div className="absolute inset-0 border border-gray-700/30 rounded-3xl"></div>
                <div className="absolute inset-4 border border-gray-600/20 rounded-2xl"></div>
                <div className="absolute inset-8 border border-gray-500/10 rounded-xl"></div>

                {/* Image container - Redesigned to show full image */}
                <div className="absolute inset-12 rounded-xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-gray-900 to-black border border-gray-600/30">
                  <div className="w-full h-full relative">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

                    {/* Main image - Properly fitted */}
                    <img
                      // src="/images/noah-profile.png"
                      src="/images/noah2.jpeg"
                      alt="Noah Kostesku"
                      className="w-full h-full object-contain object-center transition-all duration-700 hover:scale-105"
                      style={{
                        filter: "contrast(1.2) brightness(0.9)",
                      }}
                    />

                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>


                  </div>
                </div>

                {/* Enhanced floating elements with more animations */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 xl:w-10 xl:h-10 border border-blue-500/50 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/20"
                >
                  <div className="w-2 h-2 xl:w-3 xl:h-3 bg-blue-400 rounded-full"></div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: -360,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 xl:w-8 xl:h-8 border border-purple-500/50 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/20"
                >
                  <div className="w-1 h-1 xl:w-2 xl:h-2 bg-purple-400 rounded-full"></div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: 360,
                    x: [0, 10, 0],
                  }}
                  transition={{
                    rotate: { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    x: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute top-1/2 -left-6 xl:-left-8 w-4 h-4 xl:w-6 xl:h-6 border border-cyan-400/30 rounded-full flex items-center justify-center"
                >
                  <div className="w-1 h-1 xl:w-2 xl:h-2 bg-cyan-400 rounded-full"></div>
                </motion.div>

                {/* Data stream effect */}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute top-1/4 -right-8 xl:-right-12 w-16 xl:w-20 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
                ></motion.div>
              </div>

              {/* Status indicator - always centered under profile image */}
              <div className="flex justify-center xl:block mt-6 xl:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="flex items-center space-x-2 px-4 py-2 backdrop-blur-sm bg-black/40 border border-gray-600/30 rounded-full
                    relative xl:absolute xl:-bottom-12 xl:left-1/2 xl:transform xl:-translate-x-1/2"
                >
                  <div className="w-2 h-2 xl:w-3 xl:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-mono text-xs xl:text-sm text-gray-300">Let's build together</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
