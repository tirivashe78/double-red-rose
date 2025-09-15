'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaChevronDown, FaHeartbeat } from 'react-icons/fa'

type Ingredient = {
  id: string
  name: string
  image?: string
  short: string
  conditions: string[] // tags
  details?: string
}

const INGREDIENTS: Ingredient[] = [
  {
    id: 'blend',
    name: 'Double Red Rose (Blend)',
    image: '/ingredients/double-red-rose.webp',
    short:
      'A curated blend of powerful red superfruits designed to support skin, respiratory, eye, mood, and more.',
    conditions: [
      'Skin (eczema, breakouts)',
      'Respiratory (colds, sore throat)',
      'Eye health',
      'Mood & Stress',
      'General wellbeing'
    ],
    details:
      'Double Red Rose combines a well-formulated mix of traditional red superfruits chosen to address a broad spectrum of conditions — from topical skin issues and respiratory support to eye health, circulation, and mood stabilization.'
  },
  {
    id: 'goji',
    name: 'Goji Berry',
    image: '/ingredients/goji.webp',
    short: 'Traditionally used for eye health and metabolic support.',
    conditions: [
      'Glaucoma & age-related eye disease',
      'Diabetes & cholesterol',
      'Liver protection',
      'Anxiety & sleep'
    ],
    details:
      'Goji berries are rich in antioxidants and have traditional uses for eye conditions (including age-related degeneration), blood sugar balance, and liver protection.'
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate',
    image: '/ingredients/pomegranate.webp',
    short: 'Potent anti-inflammatory and cardio-metabolic support.',
    conditions: [
      "Alzheimer’s",
      'IBD & inflammatory conditions',
      'Cardiovascular disease',
      'High blood pressure'
    ],
    details:
      'Pomegranate is studied for its polyphenols that may support inflammation reduction, cardiovascular health, and metabolic balance.'
  },
  {
    id: 'peach',
    name: 'Peach',
    image: '/ingredients/peach.webp',
    short: 'Nutrient-dense fruit used in metabolic and cardiovascular support.',
    conditions: ['Obesity', 'Cardiovascular risk', 'Type 2 diabetes', 'Iron deficiency'],
    details:
      'Peach brings vitamins & minerals to the blend and is traditionally associated with metabolic benefits and cardiovascular support.'
  },
  {
    id: 'jujube',
    name: 'Jujube (Chinese Dates)',
    image: '/ingredients/jujube.webp',
    short: 'Soothing for digestion and traditional cognitive support.',
    conditions: ['UTIs', 'Constipation', 'Alzheimer’s (traditional use)', 'Cardiovascular health'],
    details:
      'Jujube is used in many traditional systems for digestive comfort, calming the nervous system, and general restorative benefits.'
  },
  {
    id: 'red-grapes',
    name: 'Red Grapes',
    image: '/ingredients/red-grapes.webp',
    short: 'Rich in polyphenols — circulation, skin, and systemic support.',
    conditions: ['Cholesterol', 'Cardiovascular', 'Skin', 'Digestive & lymph support'],
    details:
      'Red grapes (and their skins) contain resveratrol and related polyphenols known for antioxidant and circulatory benefits.'
  },
  {
    id: 'acerola',
    name: 'Acerola Cherry',
    image: '/ingredients/acerola.webp',
    short: 'Vitamin C powerhouse for immune & mucosal health.',
    conditions: ['Liver support', 'Diarrhea & dysentery (traditional)', 'Coughs & colds'],
    details:
      'Acerola is extremely rich in vitamin C and is traditionally used for supporting immune resilience and mucosal health.'
  },
  {
    id: 'lemon',
    name: 'Lemon',
    image: '/ingredients/lemon.webp',
    short: 'Citrus support for circulation, respiratory comfort, and metabolism.',
    conditions: ['Stroke risk reduction (supports circulation)', 'Cardiovascular', 'Asthma', 'Obesity'],
    details:
      'Lemon helps with vitamin C, digestive tone, and has a long history in traditional circulatory and metabolic support.'
  },
  {
    id: 'red-ginseng',
    name: 'Red Ginseng',
    image: '/ingredients/red-ginseng.webp',
    short: 'Adaptogenic root for energy, circulation, and sexual wellness.',
    conditions: ['Erectile dysfunction', 'Blood sugar regulation', 'Energy & stress'],
    details:
      'Red ginseng is an adaptogen often used to support stamina, blood sugar balance, and circulation.'
  },
  {
    id: 'carob',
    name: 'Carob Extract',
    image: '/ingredients/carob.webp',
    short: 'Tonic for digestion and lipid balance.',
    conditions: ['Cholesterol', 'Digestive issues', 'Eye & skin support'],
    details:
      'Carob is traditionally used for digestive benefits and contains fiber and tannins that may help regulate gut flora and lipid absorption.'
  },
  {
    id: 'honey-locust',
    name: 'Chinese Honey Locust',
    image: '/ingredients/honey-locust.webp',
    short: 'Traditional support for respiratory and digestive complaints.',
    conditions: ['Indigestion', 'Coughs & wheeze', 'Skin & phlegm conditions'],
    details:
      'Used in traditional formulas for soothing digestion, reducing phlegm, and calming respiratory discomfort.'
  },
  {
    id: 'honey',
    name: 'Honey',
    image: '/ingredients/honey.webp',
    short: 'Natural humectant and wound/respiratory soother with broad traditional uses.',
    conditions: ['Wounds & skin issues', 'Coughs & respiratory', 'Digestive support', 'Stress & weakness'],
    details:
      'Honey is a gentle, time-tested remedy for wound healing, throat soothing, and digestive comfort; it also adds natural sweetness and preservation benefits.'
  }
]

export default function ProductFeatures() {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const normalizedQuery = query.trim().toLowerCase()

  const filtered = useMemo(
    () =>
      INGREDIENTS.filter((ing) => {
        if (!normalizedQuery) return true
        return (
          ing.name.toLowerCase().includes(normalizedQuery) ||
          ing.short.toLowerCase().includes(normalizedQuery) ||
          (ing.conditions || []).some((c) => c.toLowerCase().includes(normalizedQuery))
        )
      }),
    [normalizedQuery]
  )

  return (
    <section
      id="features"
      className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gradient-to-b from-rose-50 via-white to-rose-100"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-gradient-to-r from-red-50 to-red-100 text-red-700 shadow-sm">
          <FaHeartbeat />
          <span className="font-semibold">Superfruit Ingredients</span>
        </div>

        <h2 className="mt-4 text-3xl md:text-4xl font-serif text-gray-900">
          What’s inside <span className="text-red-600">Double Red Rose</span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          A thoughtfully selected blend of red superfruits, roots and natural extracts aimed at supporting
          skin, eyes, circulation, digestion, and overall wellbeing.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 flex items-center justify-center">
        <div className="w-full md:w-2/3">
          <label htmlFor="ingredient-search" className="sr-only">
            Search ingredients
          </label>
          <div className="flex items-center bg-white rounded-full shadow px-4 py-2 gap-3">
            <FaSearch className="text-gray-400" />
            <input
              id="ingredient-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search ingredients, conditions... e.g. 'eye' or 'cholesterol'"
              className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              aria-label="Search ingredients"
            />
            <button
              onClick={() => {
                setQuery('')
                setSelectedId(null)
              }}
              className="text-xs text-gray-500"
              aria-label="Clear search"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ing) => {
          const isOpen = selectedId === ing.id
          return (
            <motion.article
              key={ing.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              whileHover={{ translateY: -6 }}
              className="relative bg-white rounded-2xl p-4 shadow-lg overflow-hidden"
            >
              {/* top row: image + name */}
              <div className="flex gap-4 items-start">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={ing.image ?? '/ingredients/placeholder.webp'}
                    alt={ing.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">{ing.name}</h3>

                    <button
                      onClick={() => setSelectedId(isOpen ? null : ing.id)}
                      aria-expanded={isOpen}
                      aria-controls={`detail-${ing.id}`}
                      className="flex items-center gap-1 text-sm text-red-600 font-medium"
                    >
                      <span>{isOpen ? 'Close' : 'Details'}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="inline-block"
                      >
                        <FaChevronDown />
                      </motion.span>
                    </button>
                  </div>

                  <p className="mt-1 text-sm text-gray-600">{ing.short}</p>

                  {/* tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ing.conditions.slice(0, 4).map((c, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-md bg-red-50 text-red-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* expanded details */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`detail-${ing.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                    className="mt-4 pt-4 text-sm text-gray-700"
                  >
                    <p className="mb-3">{ing.details}</p>

                    <div className="flex flex-wrap gap-2">
                      {ing.conditions.map((c, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-800">
                          {c}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
