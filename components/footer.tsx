"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Terminal } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Terminal Contact */}
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

          </motion.div>
        </div>
        <div className="pt-8 border-t border-gray-800/50 mt-16">
          <div className="text-center text-gray-500 font-mono text-sm">
            <p>© 2025 Noah Kostesku 🙃</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
