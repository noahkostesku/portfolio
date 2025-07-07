"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Brain, Palette, Database, Waypoints, Computer } from "lucide-react"

const skills = [
  { name: "Artificial Intelligence", icon: BrainCircuit, description: "LangChain, LangGraph, HuggingFace, Xodo, Prompt Engineering"},
  { name: "Machine Learning", icon: Brain, description: "PyTorch, TensorFlow, Transformers, Scikit-learn, Polars" },
  { name: "Deep Learning", icon: Waypoints, description: "Graph Attention Networks, Deep Neural Networks, Convolutional Neural Networks, Keras" },
  { name: "GPU & High Performance Computing", icon: Computer, description: "CUDA, PyTorch GPU, JupyterLab on Clusters, Data Parallelism" },
  { name: "Frontend", icon: Palette, description: "Typescript, React, Next.js, Angular, Tailwind CSS" },
  { name: "Backend", icon: Database, description: "Python, Node.js, ExpressJS, Flask, PostgreSQL" },
]

export default function About() {
  return (
    <div className="relative z-10 py-32 xl:py-40">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20 xl:mb-32"
        >
          <h2 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-light mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 xl:gap-24 2xl:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 xl:space-y-12"
          >
            <div className="space-y-6 xl:space-y-8 text-gray-300 leading-relaxed">
              <p className="text-xl xl:text-2xl font-light">
                I'm an AI engineer who believes in the transformative power of intelligent systems and human-centered
                design.
              </p>
              <p className="text-lg xl:text-xl">
                My work focuses on building AI solutions that don't just process data, but understand context and
                enhance human capabilities. From machine learning models to neural networks, I create systems that
                learn, adapt, and evolve.
              </p>
              <p className="text-lg xl:text-xl">
                When I'm not training models or optimizing algorithms, you'll find me exploring the latest in generative
                AI, contributing to open source ML projects, or researching the intersection of artificial intelligence
                and human creativity.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="pt-8 xl:pt-12"
            >
              <h3 className="text-2xl xl:text-3xl font-light mb-8 xl:mb-12 text-gray-200">Expertise</h3>
              <div className="grid grid-cols-2 gap-6 xl:gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group p-6 xl:p-8 backdrop-blur-sm bg-black/20 border border-gray-800/50 hover:border-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all duration-500"
                  >
                    <skill.icon className={`w-8 h-8 xl:w-10 xl:h-10 mb-4 transition-all duration-500 ${
                      index % 6 === 0 ? "text-cyan-300/80 group-hover:text-cyan-200 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]" :
                      index % 6 === 1 ? "text-purple-300/80 group-hover:text-purple-200 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]" :
                      index % 6 === 2 ? "text-blue-300/80 group-hover:text-blue-200 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]" :
                      index % 6 === 3 ? "text-pink-300/80 group-hover:text-pink-200 group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]" :
                      index % 6 === 4 ? "text-emerald-300/80 group-hover:text-emerald-200 group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]" :
                      "text-amber-300/80 group-hover:text-amber-200 group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                    }`} />
                    <h4 className="font-mono text-lg xl:text-xl mb-2 group-hover:text-white transition-colors">{skill.name}</h4>
                    <p className="text-sm xl:text-base text-gray-500 group-hover:text-gray-300 transition-colors">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Ambient frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/30">
                <div className="absolute inset-8 xl:inset-12 border border-gray-700/20">
                  <div className="absolute inset-8 xl:inset-12 border border-gray-600/10">
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                      {/* Animated grid */}
                      <div className="absolute inset-0 opacity-20">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"
                            style={{ top: `${i * 10}%` }}
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 3, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        ))}
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute h-full w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent"
                            style={{ left: `${i * 10}%` }}
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 3, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        ))}
                      </div>

                      {/* Center AI bust element */}
                      <div className="text-center space-y-4 xl:space-y-6 z-10">
                        <div className="relative w-64 h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 mx-auto">
                          {/* Main AI bust image - larger and static */}
                          <div className="relative w-full h-full flex items-center justify-center">
                            <img
                              src="/images/ai-bust-clean.png"
                              alt="AI Consciousness"
                              className="w-56 h-56 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 object-contain"
                            />

                            {/* Scanning light beams */}
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="absolute inset-0"
                            >
                              <div className="absolute top-0 left-1/2 w-px h-32 xl:h-40 bg-gradient-to-b from-blue-400/60 to-transparent transform -translate-x-1/2"></div>
                              <div className="absolute bottom-0 left-1/2 w-px h-32 xl:h-40 bg-gradient-to-t from-purple-400/60 to-transparent transform -translate-x-1/2"></div>
                            </motion.div>

                            <motion.div
                              animate={{ rotate: [360, 0] }}
                              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="absolute inset-0"
                            >
                              <div className="absolute left-0 top-1/2 h-px w-32 xl:w-40 bg-gradient-to-r from-pink-400/60 to-transparent transform -translate-y-1/2"></div>
                              <div className="absolute right-0 top-1/2 h-px w-32 xl:w-40 bg-gradient-to-l from-cyan-400/60 to-transparent transform -translate-y-1/2"></div>
                            </motion.div>

                            {/* Pulsing shadow/glow effect */}
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                              }}
                              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                              className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-xl"
                            ></motion.div>

                            {/* Data stream particles */}
                            {Array.from({ length: 8 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                style={{
                                  top: "50%",
                                  left: "50%",
                                  transformOrigin: `${80 + i * 5}px 0px`,
                                }}
                                animate={{
                                  rotate: [0, 360],
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0],
                                }}
                                transition={{
                                  rotate: { duration: 6 + i, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                                  opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 },
                                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 },
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="font-mono text-sm xl:text-base text-gray-400">
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          >
                            {"{ ai_consciousness }"}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
