'use client'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        src="/assets/hero-video.mp4"
        autoPlay loop muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          className="text-5xl md:text-6xl font-serif text-crimson"
        >
          Double Red Rose
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-4 text-xl text-white"
        >
          Elevate Your Morning • Fuel Your Success • Live Your Dream
        </motion.p>
        <motion.a
          href="#"
          initial={{ scale: .8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: .9 }}
          className="mt-8 px-8 py-3 bg-gold text-white rounded-full relative overflow-hidden"
        >
          Shop Now
          <span className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
        </motion.a>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 text-white text-2xl"
        >
          <FaChevronDown />
        </motion.div>
      </div>
    </section>
  )
}
