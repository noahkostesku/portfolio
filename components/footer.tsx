"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Terminal } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Terminal Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-mono mb-8">Get In Touch</h3>

            <div className="backdrop-blur-sm bg-black/40 border border-gray-800/50 p-6 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4 text-gray-400">
                <Terminal className="w-4 h-4" />
                <span>terminal@noahkostesku.dev</span>
              </div>

              <div className="space-y-2 text-gray-300">
                <div className="flex">
                  <span className="text-green-400">$</span>
                  <span className="ml-2"><span className="text-yellow-200">whoami</span></span>
                </div>
                <div className="ml-4 text-gray-400">noah.kostesku</div>

                <div className="flex">
                  <span className="text-green-400">$</span>
                  <span className="ml-2"><span className="text-yellow-200">cat</span> specialization.txt | <span className="text-yellow-200">grep</span> focus</span>
                </div>
                <div className="ml-4 text-gray-400 mb-2">
                  focus: artificial intelligence & machine learning
                </div>
                <div className="flex">
                  <span className="text-green-400">$</span>
                  <span className="ml-2"><span className="text-yellow-200">cat</span> specialization.txt | <span className="text-yellow-200">grep</span> expertise</span>
                </div>
                <div className="ml-4 text-gray-400 mb-2">
                  expertise: generative ai, neural networks, prompt engineering, project management
                </div>
                <div className="flex">
                  <span className="text-green-400">$</span>
                  <span className="ml-2"><span className="text-yellow-200">cat</span> specialization.txt | <span className="text-yellow-200">grep</span> status</span>
                </div>
                <div className="ml-4 text-gray-400 mb-2">
                  status: building the future with AI
                </div>

                <div className="flex">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-mono mb-8">Connect</h3>

              <div className="space-y-4">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/noahkostesku" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/noahkostesku" },
                  { icon: Mail, label: "Email", href: "mailto:noahkostesku@gmail.com" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-mono">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800/50">
              <div className="text-center text-gray-500 font-mono text-sm">
              <p>© 2025 Noah Kostesku — Just me 🙃</p>
                <p className="mt-2">
                  {">"} echo "Training models, building futures" <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
