'use client'
import { motion } from 'framer-motion'

const steps = [
  { icon: '/assets/icons/open.svg', label: 'Open Sachet' },
  { icon: '/assets/icons/clock.svg', label: 'Take 20–30 min Before Meals' },
  { icon: '/assets/icons/water.svg', label: 'Stay Hydrated' }
]

export default function HowToUse() {
  return (
    <section className="py-12 bg-gradient-to-r from-crimson to-peach">
      <div className="container mx-auto flex justify-around px-4">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-white"
          >
            <img src={s.icon} alt={s.label} className="w-12 h-12 mb-2" />
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
