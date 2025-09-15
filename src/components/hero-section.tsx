"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

export default function HeroSection() {
  // Text for typewriter effect
  const text = "Double Red Rose".split("")

  useEffect(() => {
    // placeholder for focus management
  }, [])

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-100"
    >
      {/* Background Video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />

      {/* Rose overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/30 via-white/20 to-rose-100/40 pointer-events-none mix-blend-overlay" />

      {/* Dark contrast layer */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Fixed Header with Logo */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="backdrop-blur-sm bg-black/30 text-white">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 py-3 text-white hover:opacity-90 transition"
            >
              <img
                src="/AG.png"
                alt="Double Red Rose logo"
                className="w-10 h-10 object-contain drop-shadow"
              />
              <span className="font-semibold text-lg hidden sm:inline">
                Double Red Rose
              </span>
            </a>

            {/* Nav Links */}
            <ul className="flex items-center gap-6 py-4 text-sm md:text-base font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-red-400 transition-colors"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-red-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-red-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-red-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        {/* Animated Rose Logo */}
        <motion.img
          src="/drr.webp"
          alt="Double Red Rose logo"
          className="w-28 md:w-44 drop-shadow-2xl"
          initial={{ y: -40, opacity: 0, scale: 0.9 }}
          animate={{ y: [0, -10, 0], opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 0.8, delay: 0.2 },
          }}
        />

        {/* Typewriter Effect Heading */}
        <h1 className="text-4xl md:text-6xl font-serif text-red-600 drop-shadow-lg mt-6 flex flex-wrap justify-center">
          {text.map((char, i) => (
            <motion.span
              key={i}
              aria-hidden={char === " "}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-lg md:text-xl text-white max-w-2xl"
        >
          Elevate Your Morning • Fuel Your Success • Live Your Dream
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/263712110487?text=Hi%20%E2%80%94%20I%27m%20interested%20in%20Double%20Red%20Rose"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp with a pre-filled message"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-8 relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.373 0 .02 5.354.02 11.98c0 2.112.55 4.172 1.59 5.987L0 24l6.272-1.635A11.94 11.94 0 0012 23.96c6.627 0 11.98-5.353 11.98-11.98 0-3.19-1.243-6.183-3.46-8.5zM12 21.86c-1.55 0-3.082-.4-4.42-1.16l-.32-.17-3.72.97.97-3.63-.2-.37A8.88 8.88 0 013.11 11.98c0-4.92 4.01-8.92 8.89-8.92 2.38 0 4.63.93 6.31 2.62s2.62 3.93 2.62 6.31c0 4.9-3.99 8.88-8.89 8.88z" />
            <path d="M17.5 14.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.95-.94 1.15-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.32-.36.48-.53.16-.17.21-.28.31-.47.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.59-.49-.51-.67-.52l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.06 2.85 1.21 3.05.15.2 2.09 3.38 5.07 4.74 2.99 1.37 2.99.91 3.54.85.55-.06 1.78-.72 2.03-1.41.25-.7.25-1.3.17-1.41-.08-.11-.28-.17-.58-.32z" />
          </svg>
          <span className="font-medium">Buy Now</span>
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-8 text-white text-2xl"
        >
          <FaChevronDown />
        </motion.div>
      </div>
    </section>
  )
}
