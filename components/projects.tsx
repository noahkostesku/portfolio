"use client"

import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight, Play, Pause } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const projects = [
  {
    title: "Repo Chat - For Recruiters and Devs",
    subtitle: "AI-Powered Web Scraping",
    description:
      "A local AI-powered tool that generates tailored coffee chat questions and GitHub repository summaries from developer profiles.",
    tags: ["Typescript", "React", "Local LLMs", "Next.js"],
    github: "https://github.com/noahkostesku/RepoChat",
    demo: "https://neural-canvas.vercel.app",
    image: "/placeholder.svg?height=400&width=600",
    video: "/videos/repo-chat-demo.mp4", // Add your video file here
    featured: true,
    beta: true,
    releaseStatus: "Full Version Coming Soon",
  },
  {
    title: "Household Economic Pattern Analysis",
    subtitle: "Clustering & Prediction on Canadian Spending",
    description:
      "Machine learning analysis of Canadian household data identified three distinct behavioral clusters—Suburban Essentials, Stable Retirees, and Affluent Professionals—and achieved 89% prediction accuracy for long-term financial contributions using XGBoost with SHAP-based interpretation.",
    tags: [
      "PCA", "UMAP", "KMeans", "XGBoost", "ElasticNet", "SHAP",
      "Polars", "Scikit-Learn", "Data Clustering", "Regression"
    ],
    github: "https://github.com/noahkostesku/CanadianHouseholdAnalysis",
    demo: "",
    image: "/images/household-analysis.png",
    video: "",
    featured: true,
  },
  {
    title: "Self-Corrective RAG",
    subtitle: "Wikipedia-Scraping + Generative Reasoning",
    description:
      "An AI-driven knowledge retrieval system that scrapes and summarizes Wikipedia topics, integrates LangChain pipelines, and uses GPT-4 to iteratively improve generated outputs through self-correction.",
    tags: ["LangChain", "GPT-4", "Flask", "ChromaDB", "Wikipedia API"],
    github: "https://github.com/noahkostesku/Self-Corrective-RAG-Chatbot-with-Wikipedia-Scraping/tree/main", 
    demo: "", // no video demo icon
    image: "/images/scrag.png",
    video: "", // no video demo
  },
  {
    title: "Mathimaticate",
    subtitle: "Interactive Math Learning Platform",
    description:
      "A full-stack educational platform with step-by-step math lessons and animated 3D visuals to enhance student understanding. Built with Three.js for immersive front-end experiences and connected to a PHP/SQL backend for lesson management and user tracking.",
    tags: ["Manim","Three.js", "PHP", "SQL", "EdTech", "Animation"],
    github: "https://github.com/noahkostesku/mathimaticate", 
    demo: "https://your-mathimaticate-demo.com", // Add your demo URL here
    image: "", // replace image with video demo
    video: "/videos/mathimaticate-demo.mp4", // Add your video file here
    youtube: "https://www.youtube.com/@Mathimaticate", // Add your YouTube link here
  }
]

export default function Projects() {
  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({})

  const toggleVideo = (projectTitle: string) => {
    setPlayingVideos(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }))
  }

  return (
    <section id="projects" className="py-32 xl:py-40 relative">
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20 xl:mb-32"
        >
          <h2 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-light mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
          <p className="text-gray-400 mt-8 text-lg xl:text-xl 2xl:text-2xl font-light max-w-2xl xl:max-w-3xl mx-auto">
            A curated collection of AI and software projects that showcase innovation and technical excellence
          </p>
        </motion.div>

        <div className="space-y-32 xl:space-y-40">
          {projects.map((project, index) => {
            const videoRef = useRef<HTMLVideoElement>(null)
            const isInView = useInView(videoRef, { once: false, amount: 0.3 })

            // Autoplay/pause video based on in-view (per project)
            useEffect(() => {
              if (!videoRef.current) return
              if (project.video) {
                if (isInView) {
                  videoRef.current.play()
                  setPlayingVideos(prev => ({ ...prev, [project.title]: true }))
                } else {
                  videoRef.current.pause()
                  setPlayingVideos(prev => ({ ...prev, [project.title]: false }))
                }
              }
            }, [isInView, project.title, project.video])

            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
              className={`grid lg:grid-cols-2 gap-16 xl:gap-20 2xl:gap-24 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-8 xl:space-y-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4 xl:space-y-6">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 xl:px-4 xl:py-2 text-xs xl:text-sm font-mono border border-cyan-400/50 text-cyan-300 bg-cyan-500/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                      FEATURED
                    </span>
                  )}
                  {project.beta && (
                    <span className="inline-block px-3 py-1 xl:px-4 xl:py-2 text-xs xl:text-sm font-mono border border-yellow-400/50 text-yellow-300 bg-yellow-500/10 shadow-[0_0_8px_rgba(253,224,71,0.3)] ml-2">
                      BETA
                    </span>
                  )}
                  {project.releaseStatus && (
                    <span className="inline-block px-3 py-1 xl:px-4 xl:py-2 text-xs xl:text-sm font-mono border border-blue-400/50 text-blue-300 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)] ml-2">
                      {project.releaseStatus}
                    </span>
                  )}
                  <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-light">{project.title}</h3>
                  <p className="text-xl xl:text-2xl text-gray-400 font-light">{project.subtitle}</p>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg xl:text-xl 2xl:text-2xl">{project.description}</p>

                <div className="flex flex-wrap gap-3 xl:gap-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 xl:px-5 xl:py-3 text-sm xl:text-base font-mono border transition-all duration-300 hover:scale-105 ${
                        tagIndex % 3 === 0 
                          ? "border-cyan-500/30 text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_8px_rgba(34,211,238,0.3)]" 
                          : tagIndex % 3 === 1 
                          ? "border-purple-500/30 text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_8px_rgba(168,85,247,0.3)]"
                          : "border-blue-500/30 text-blue-300 hover:border-blue-400/50 hover:shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6 xl:space-x-8 pt-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group flex items-center space-x-2 text-gray-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-5 h-5 xl:w-6 xl:h-6 group-hover:text-cyan-300" />
                      <span className="font-mono text-sm xl:text-base">View Code</span>
                      <ArrowUpRight className="w-4 h-4 xl:w-5 xl:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-cyan-300" />
                    </motion.a>
                  )}
                  {project.youtube && (
                    <motion.a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5 xl:w-6 xl:h-6 group-hover:text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.163 3.5 12 3.5 12 3.5s-7.163 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.418 0 12 0 12s0 3.582.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.837 20.5 12 20.5 12 20.5s7.163 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.582 24 12 24 12s0-3.582-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="font-mono text-sm xl:text-base">View More Tutorials</span>
                      <ArrowUpRight className="w-4 h-4 xl:w-5 xl:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-red-500" />
                    </motion.a>
                  )}
                  {project.video ? (
                    <motion.button
                      onClick={() => {
                        if (videoRef.current) {
                          if (playingVideos[project.title]) {
                            videoRef.current.pause()
                          } else {
                            videoRef.current.play()
                          }
                        }
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors"
                    >
                      {playingVideos[project.title] ? (
                        <Pause className="w-5 h-5 xl:w-6 xl:h-6 group-hover:text-purple-300" />
                      ) : (
                        <Play className="w-5 h-5 xl:w-6 xl:h-6 group-hover:text-purple-300" />
                      )}
                      <span className="font-mono text-sm xl:text-base">{playingVideos[project.title] ? "Pause Demo" : "Play Demo"}</span>
                      <ArrowUpRight className="w-4 h-4 xl:w-5 xl:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-purple-300" />
                    </motion.button>
                  ) : project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 xl:w-6 xl:h-6 group-hover:text-purple-300" />
                      <span className="font-mono text-sm xl:text-base">Live Demo</span>
                      <ArrowUpRight className="w-4 h-4 xl:w-5 xl:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-purple-300" />
                    </motion.a>
                  )}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className={`relative group ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <div className="aspect-[4/3] overflow-hidden backdrop-blur-sm bg-black/20 border border-gray-800/50 group-hover:border-gray-600/50 transition-all duration-500">
                  {project.video ? (
                    <div className="relative w-full h-full">
                      <video
                        ref={videoRef}
                        src={project.video}
                        className="w-full h-full object-contain bg-black"
                        muted
                        loop
                        playsInline
                        onPlay={() => setPlayingVideos(prev => ({ ...prev, [project.title]: true }))}
                        onPause={() => setPlayingVideos(prev => ({ ...prev, [project.title]: false }))}
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          project.title === "Self-Corrective RAG" || project.title === "Household Economic Pattern Analysis"
                            ? "grayscale-0 filter hue-rotate-0" 
                            : "grayscale group-hover:grayscale-0"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Animated color overlay for Self-Corrective RAG and Household Analysis */}
                      {(project.title === "Self-Corrective RAG" || project.title === "Household Economic Pattern Analysis") && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 mix-blend-overlay"
                          animate={{
                            background: [
                              "linear-gradient(to bottom right, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))",
                              "linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.2))",
                              "linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2))",
                              "linear-gradient(to bottom right, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))"
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </>
                  )}
                </div>

                {/* Ambient glow effect */}
                <div className="absolute -inset-4 xl:-inset-6 bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </motion.div>
            </motion.div>
          )
          })}
        </div>
      </div>
    </section>
  )
}
