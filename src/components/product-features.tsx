'use client'
import { motion } from 'framer-motion'
// import '@google/model-viewer'  // if using <model-viewer>

export default function ProductFeatures() {
  const features = [
    '12‑in‑1 Superfruit Blend',
    'High Resveratrol & Polyphenols',
    'Ultra‑absorbable Vitamins',
    'Beauty from Within',
    'Cognitive & Energy Boost'
  ]

  return (
    <section className="py-20 container mx-auto flex flex-col md:flex-row items-center px-4">
      <motion.div
        className="w-full md:w-1/2"
        whileHover={{ rotateY: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        {/* <model-viewer
          src="/assets/mockup-sachet.glb"
          alt="Sachet 3D mockup"
          auto-rotate
          camera-controls
          className="w-full h-64 md:h-96"
        /> */}
      </motion.div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 space-y-4">
        {features.map((text, i) => (
          <motion.p
            key={i}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * .2 }}
            className="text-lg"
          >
            • {text}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
