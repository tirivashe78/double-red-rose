'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaHeart, FaEye, FaLeaf, FaTint, FaSmile } from 'react-icons/fa'

const benefits = [
  {
    id: 'cellular',
    title: 'Enhanced Cellular Protection',
    copy: 'Neutralizes free radicals to prevent cellular damage and support overall health.',
    icon: FaShieldAlt
  },
  {
    id: 'longevity',
    title: 'Improved Longevity',
    copy: 'Antioxidants help slow the aging process and support long-term vitality.',
    icon: FaHeart
  },
  {
    id: 'cardio',
    title: 'Cardiovascular Support',
    copy: 'Resveratrol and polyphenols help maintain heart health and circulation.',
    icon: FaHeart
  },
  {
    id: 'eye',
    title: 'Eye Health Preservation',
    copy: 'Zeaxanthin and other antioxidants protect vision and prevent age-related decline.',
    icon: FaEye
  },
  {
    id: 'immunity',
    title: 'Boosted Immunity',
    copy: 'Quercetin and immune-supporting compounds strengthen natural defences.',
    icon: FaLeaf
  },
  {
    id: 'skin',
    title: 'Healthy Skin',
    copy: 'Carotenes and antioxidants promote a radiant, youthful complexion.',
    icon: FaSmile
  },
  {
    id: 'hydration',
    title: 'Hydration Support',
    copy: 'Natural fruit extracts help hydration — important for nutrient absorption and glow.',
    icon: FaTint
  }
]

export default function BeautyAndBrain() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 via-white to-rose-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Image panel */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/drrb.webp"
              alt="Healthy radiant skin"
              className="w-full h-80 object-cover md:h-[420px]"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-2xl font-semibold">Healthy, radiant skin from within</h3>
                <p className="text-white/90 mt-2 max-w-md text-sm">
                  Nourish your skin with antioxidants and phytonutrients — visible glow, improved texture, and
                  everyday resilience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Benefits list */}
          <div>
            <motion.header
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">The Benefits of <span className="text-red-600">Double Red Rose</span></h2>
              <p className="mt-3 text-gray-600 max-w-xl">
                Double Red Rose offers comprehensive support for cellular protection, immunity, cardiovascular
                health, skin radiance and overall wellbeing.
              </p>
            </motion.header>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <motion.article
                    key={b.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.45 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start bg-white rounded-2xl p-4 shadow-sm ring-1 ring-black/5"
                  >
                    <div className="flex-none">
                      <div className="h-12 w-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-lg">
                        <Icon aria-hidden />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900">{b.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{b.copy}</p>
                    </div>
                  </motion.article>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <p className="text-gray-600">
                Double Red Rose provides essential nutrients for vitality and a sense of wellbeing. Combined with a
                healthy diet and hydration, it supports your daily performance and long-term health goals.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://wa.me/263712110487?text=Hi%20I%27m%20interested%20in%20Double%20Red%20Rose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.373 0 .02 5.354.02 11.98c0 2.112.55 4.172 1.59 5.987L0 24l6.272-1.635A11.94 11.94 0 0012 23.96c6.627 0 11.98-5.353 11.98-11.98 0-3.19-1.243-6.183-3.46-8.5zM12 21.86c-1.55 0-3.082-.4-4.42-1.16l-.32-.17-3.72.97.97-3.63-.2-.37A8.88 8.88 0 013.11 11.98c0-4.92 4.01-8.92 8.89-8.92 2.38 0 4.63.93 6.31 2.62s2.62 3.93 2.62 6.31c0 4.9-3.99 8.88-8.89 8.88z" />
                    <path d="M17.5 14.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.95-.94 1.15-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.32-.36.48-.53.16-.17.21-.28.31-.47.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.59-.49-.51-.67-.52l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.06 2.85 1.21 3.05.15.2 2.09 3.38 5.07 4.74 2.99 1.37 2.99.91 3.54.85.55-.06 1.78-.72 2.03-1.41.25-.7.25-1.3.17-1.41-.08-.11-.28-.17-.58-.32z" />
                  </svg>
                  <span className="text-sm font-medium">Order on WhatsApp</span>
                </a>

                <a href="#products" className="text-sm text-red-600 font-medium underline">
                  Learn more about our products
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
