'use client'
import { motion } from 'framer-motion'

const features = [
  {
    key: 'resveratrol',
    title: 'Rich in Resveratrol',
    copy:
      'Contains resveratrol — a powerful anti-aging antioxidant that supports cardiovascular health and helps reduce inflammation.'
  },
  {
    key: 'zeaxanthin',
    title: 'Zeaxanthin for Eye Health',
    copy:
      'Supports eye health and helps protect against age-related macular degeneration, maintaining clearer vision over time.'
  },
  {
    key: 'polyphenols',
    title: 'Loaded with Polyphenols',
    copy:
      'Polyphenols provide robust anti-inflammatory and antioxidant effects that support overall health and longevity.'
  },
  {
    key: 'quercetin',
    title: 'Quercetin Boosts Immunity',
    copy:
      'Quercetin helps strengthen the immune system and reduce inflammation so your body can recover faster from illness.'
  },
  {
    key: 'carotenes',
    title: 'Carotenes for Skin & Immunity',
    copy:
      'Carotenes support healthy skin and a resilient immune response, helping cells repair and stay strong.'
  },
  {
    key: 'phytonutrients',
    title: 'Synergistic Phytonutrients',
    copy:
      'A blend of phytonutrients and antioxidants that work together to enhance cellular protection and repair.'
  }
]

export default function WhyItMatters() {
  return (
    <section
      aria-labelledby="why-heading"
      className="py-20 bg-gradient-to-b from-rose-50 via-white to-rose-100"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 id="why-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Why Choose Double Red Rose?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Double Red Rose is a potent red superfood gel packed with antioxidants — resveratrol, zeaxanthin,
            polyphenols, quercetin, carotenes and other phytonutrients — formulated to protect, repair and
            support whole-body health.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-6 bg-white/95 shadow-md ring-1 ring-black/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center bg-red-50 text-red-700 font-semibold">
                    {f.title.split(' ').slice(0,2).map(w=>w[0]).join('')}
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.copy}</p>
                </div>
              </div>

              {/* subtle accent bar */}
              <span className="absolute -top-2 right-4 inline-block h-1.5 w-16 rounded-full bg-gradient-to-r from-red-400 to-rose-500" aria-hidden />
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            These antioxidants and phytonutrients work together to enhance cellular protection and repair,
            keeping your body performing at its best.
          </p>
        </div>
      </div>
    </section>
  )
}
