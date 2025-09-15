'use client'

import { motion } from 'framer-motion'
import { FaClock, FaTint, FaClipboardCheck, FaUserMd } from 'react-icons/fa'

export default function HowToUse() {
  return (
    <section aria-labelledby="how-heading" className="py-20 bg-gradient-to-b from-white via-rose-50 to-white/90">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 id="how-heading" className="text-2xl md:text-3xl font-extrabold text-gray-900">
            How To Use <span className="text-red-600">Double Red Rose</span>
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            For optimal results, incorporate Double Red Rose into your daily routine. Follow the simple steps below to
            make the most of each sachet.
          </p>
        </motion.header>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
          variants={{
            hidden: {},
            show: {}
          }}
        >
          <motion.li
            className="flex gap-4 items-start bg-white rounded-2xl p-4 shadow-sm ring-1 ring-black/5"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.02 }}
          >
            <div className="flex-none mt-1">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-red-50 text-red-600">
                <FaClock />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Take one sachet daily</h3>
              <p className="mt-1 text-sm text-gray-600">Take one sachet of this delicious and nutritious superfood gel daily.</p>
            </div>
          </motion.li>

          <motion.li
            className="flex gap-4 items-start bg-white rounded-2xl p-4 shadow-sm ring-1 ring-black/5"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.06 }}
          >
            <div className="flex-none mt-1">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-red-50 text-red-600">
                <FaClipboardCheck />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Best time to take</h3>
              <p className="mt-1 text-sm text-gray-600">Preferably 20–30 minutes before a meal to support optimal absorption.</p>
            </div>
          </motion.li>

          <motion.li
            className="flex gap-4 items-start bg-white rounded-2xl p-4 shadow-sm ring-1 ring-black/5"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex-none mt-1">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-red-50 text-red-600">
                <FaTint />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Stay hydrated</h3>
              <p className="mt-1 text-sm text-gray-600">Drink water throughout the day to help your body absorb the nutrients effectively.</p>
            </div>
          </motion.li>

          <motion.li
            className="flex gap-4 items-start bg-white rounded-2xl p-4 shadow-sm ring-1 ring-black/5"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.14 }}
          >
            <div className="flex-none mt-1">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-red-50 text-red-600">
                <FaUserMd />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Follow professional advice</h3>
              <p className="mt-1 text-sm text-gray-600">Use as directed by your healthcare professional when applicable.</p>
            </div>
          </motion.li>
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            For optimal results, incorporate Double Red Rose into your daily routine. Take one sachet daily, preferably
            20–30 minutes before a meal, or as directed by your healthcare professional.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
