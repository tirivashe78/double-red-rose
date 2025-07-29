'use client'
import { motion } from 'framer-motion'

const cards = [
  { icon: '/assets/icons/antioxidant.svg', title: 'Protect & Repair' },
  { icon: '/assets/icons/skin.svg', title: 'Clean Up Free Radicals' },
  { icon: '/assets/icons/brain.svg', title: 'Energy & Mental Clarity' }
]

export default function WhyItMatters() {
  return (
    <section className="py-20 bg-peach/30">
      <div className="container mx-auto flex flex-col md:flex-row justify-around gap-8 px-4">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * .3 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 cursor-pointer"
          >
            <img src={c.icon} alt={c.title} className="w-12 h-12 mx-auto" />
            <h3 className="mt-4 text-center text-lg font-semibold">{c.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
