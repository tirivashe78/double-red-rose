'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from 'react-icons/fa'

const initialFeatured = {
  url: '/hero-video.mp4',
  title: 'Double Red Rose — Overview',
  desc: 'A short overview explaining the Double Red Rose story & mission.',
  poster: '/thumbs/featured.webp'
}

const tilesData = [
  { url: '/videos/explain.mp4', title: 'Explaining Double Red Rose', thumb: '/thumbs/explain.jpg' },
  { url: '/videos/testimony.mp4', title: 'Customer Testimonies', thumb: '/thumbs/testimony.jpg' },
  { url: '/videos/production.mp4', title: 'How We Make It', thumb: '/thumbs/production.jpg' }
]

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } }
}

export default function VideoRow() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playGuardRef = useRef(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [featured, setFeatured] = useState(initialFeatured)

  useEffect(() => {
    const id = setTimeout(() => tryPlay(), 150)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tryPlay = async () => {
    const v = videoRef.current
    if (!v) return
    try {
      const p = v.play()
      if (p && typeof (p as Promise<void>).then === 'function') {
        await (p as Promise<void>).catch(() => {})
      }
      setPlaying(true)
    } catch (err) {
      setPlaying(false)
    }
  }

  const tryPause = () => {
    try { videoRef.current?.pause() } catch (err) {}
    setPlaying(false)
  }

  const togglePlay = () => {
    if (playGuardRef.current) return
    playGuardRef.current = true
    setTimeout(() => (playGuardRef.current = false), 300)

    if (playing) tryPause()
    else tryPlay()
  }

  const toggleMute = () => {
    setMuted((m) => {
      const next = !m
      try { if (videoRef.current) videoRef.current.muted = next } catch (e) {}
      return next
    })
  }

  const loadTileIntoFeatured = (tile: { url: string; title: string; thumb?: string }) => {
    if (tile.url === featured.url) {
      togglePlay()
      return
    }

    setFeatured({ url: tile.url, title: tile.title, desc: '', poster: tile.thumb ?? featured.poster })

    setTimeout(() => {
      try {
        const v = videoRef.current
        if (v) {
          v.load()
          v.muted = muted
          tryPlay()
        }
      } catch (e) {}
    }, 80)
  }

  return (
    <section id="videos" className="py-20 px-4 container mx-auto max-w-6xl relative">
      {/* Rose-tint full-section background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50/80 via-rose-100/60 to-rose-200/40 backdrop-blur-sm" aria-hidden />

      {/* subtle rose vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="mb-10"
      >
        <motion.div variants={fadeUp} className="relative bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
          <video
            ref={videoRef}
            src={featured.url}
            poster={featured.poster}
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="w-full h-64 md:h-96 object-cover block"
          />

          {/* overlay */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6">
            <div className="pointer-events-auto flex items-center justify-between gap-4">
              <div className="text-left max-w-2xl">
                <h3 className="text-white text-lg md:text-2xl font-semibold drop-shadow">{featured.title}</h3>
                {featured.desc && <p className="text-white/80 mt-1 text-sm md:text-base">{featured.desc}</p>}
              </div>

              <div className="flex items-center gap-3 pointer-events-auto">
                <button
                  aria-label={muted ? 'Unmute video' : 'Mute video'}
                  onClick={toggleMute}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition"
                >
                  {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>

                <motion.button
                  aria-label={playing ? 'Pause video' : 'Play video'}
                  onClick={togglePlay}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition flex items-center gap-2"
                >
                  {playing ? <FaPause /> : <FaPlay />}
                  <span className="sr-only">{playing ? 'Pause' : 'Play'}</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* soft gradient to improve contrast */}
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 85%)' }} />
        </motion.div>
      </motion.div>

      {/* Tiles */}
      <motion.div className="grid md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
        {tilesData.map((t, i) => (
          <motion.button
            key={i}
            onClick={() => loadTileIntoFeatured(t)}
            className="group block rounded-xl overflow-hidden shadow-lg bg-white text-left p-0 border-0 transform"
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            aria-label={`Load ${t.title} into player`}
          >
            <div className="relative w-full aspect-video bg-gray-100">
              <img src={t.thumb} alt={t.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" loading="lazy" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/50 text-white shadow-lg">
                  <FaPlay />
                </motion.div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="text-gray-900 font-semibold">{t.title}</h4>
              <p className="text-sm text-gray-500 mt-1">Click to load in the player</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div className="mt-10 grid md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {[
          { text: '"The Double Red Rose coffee has changed my mornings — I feel energized and focused!"', author: 'Maria, Harare' },
          { text: '"Lovely aroma and great quality — best purchase I made this year."', author: 'Tendai, Bulawayo' },
          { text: '"Great product, fast delivery — highly recommend Double Red Rose."', author: 'Tafadzwa, Mutare' }
        ].map((t, i) => (
          <motion.blockquote key={i} className="p-6 rounded-xl bg-white/70 shadow backdrop-blur-sm border border-white/60" variants={fadeUp} transition={{ delay: i * 0.06 }}>
            <p className="text-gray-800 italic">{t.text}</p>
            <footer className="mt-4 text-sm text-gray-600">— {t.author}</footer>
          </motion.blockquote>
        ))}
      </motion.div>

      <p className="mt-8 text-center text-sm text-gray-700">
        Prefer to watch on YouTube?{' '}
        <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="underline text-rose-600">
          Visit our YouTube channel
        </a>
      </p>
    </section>
  )
}
