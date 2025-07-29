'use client'
import { motion } from 'framer-motion'

export default function BeautyAndBrain() {
  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-rows-2 gap-4 px-4">
        <motion.div
          className="row-start-1 h-64 bg-center bg-cover"
          style={{ backgroundImage: 'url(/assets/beauty-model.jpg)' }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        >
          <h2 className="text-white text-2xl font-semibold p-4 bg-black/40 inline-block">
            Healthy, Radiant Skin from Within
          </h2>
        </motion.div>
        <motion.div
          className="row-start-2 relative h-64 bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* neural network animation placeholder */}
          <h2 className="absolute top-4 left-4 text-white text-2xl font-semibold">
            Sharper Focus & Mood Lift
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
