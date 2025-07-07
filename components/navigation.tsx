"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Thoughts", href: "#blog" },
  { name: "Contact", href: "#footer" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    console.log("Nav click triggered:", href) // Debug log
    setMobileMenuOpen(false)

    // Handle scroll to top for logo click
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    // Add a small delay to ensure menu closes first
    setTimeout(() => {
      // Smooth scroll to section with offset for fixed navbar
      const element = document.querySelector(href)
      if (element) {
        const offset = 120 // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      } else {
        // Fallback: try to find the element by ID without the #
        const sectionId = href.replace("#", "")
        const fallbackElement = document.getElementById(sectionId)
        if (fallbackElement) {
          const offset = 120
          const elementPosition = fallbackElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }, 100) // Small delay to let menu close
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav")
      if (nav && !nav.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-black/30 border-b border-gray-800/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
              setMobileMenuOpen(false)
            }}
            className="font-mono text-xl font-light tracking-wider hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gray-400">{"<"}</span>
            <span className="text-white">NK</span>
            <span className="text-gray-400">{"/>"}</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 xl:space-x-12 2xl:space-x-16">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="relative font-light text-sm tracking-wider text-gray-400 hover:text-white transition-colors duration-300 group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300 z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-gray-800/30 mt-4 rounded-lg"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="pt-6 pb-4 space-y-4 px-4"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log("Mobile nav click:", item.href) // Debug log
                      handleNavClick(item.href)
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.05,
                      ease: "easeOut",
                    }}
                    className={`w-full text-left py-3 px-4 rounded-lg font-light text-lg tracking-wider transition-all duration-300 group ${
                      activeSection === item.href.slice(1)
                        ? "text-white bg-white/10 border border-white/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          layoutId="mobileActiveSection"
                          className="w-2 h-2 bg-white rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </div>
                    <motion.div
                      className={`h-px mt-2 bg-gradient-to-r from-transparent via-gray-600 to-transparent ${
                        activeSection === item.href.slice(1) ? "opacity-100" : "opacity-0"
                      } group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
