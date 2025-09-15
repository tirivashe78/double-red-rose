'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from 'react-icons/fa'

// NOTE: Place your MP4 files under the public/ directory (e.g. public/videos/hero.mp4)
const initialFeatured = {
  url: '/hero-video.mp4',
  title: 'Double Red Rose — Overview',
  desc: 'A short overview explaining the Double Red Rose story & mission.',
  poster: '/thumbs/featured.webp'
}

const tilesData = [
  {
    url: '/videos/explain.mp4',
    title: 'Explaining Double Red Rose',
    thumb: '/thumbs/explain.webp'
  },
  {
    url: '/videos/testimony.mp4',
    title: 'Customer Testimonies',
    thumb: '/thumbs/testimony.webp'
  },
  {
    url: '/videos/production.mp4',
    title: 'How We Make It',
    thumb: '/thumbs/production.webp'
  }
]

export default function VideoRow() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playGuardRef = useRef(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [featured, setFeatured] = useState(initialFeatured)

  // attempt play on mount (muted helps autoplay in many browsers)
  useEffect(() => {
    const id = setTimeout(() => tryPlay(), 150)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // safe play wrapper that handles promise rejections
  const tryPlay = async () => {
    const v = videoRef.current
    if (!v) return
    try {
      const p = v.play()
      if (p && typeof (p as Promise<void>).then === 'function') {
        await (p as Promise<void>).catch(() => {
          // swallow - autoplay may be blocked
        })
      }
      setPlaying(true)
    } catch (err) {
      setPlaying(false)
    }
  }

  const tryPause = () => {
    try {
      videoRef.current?.pause()
    } catch (err) {
      // ignore
    }
    setPlaying(false)
  }

  // toggles play/pause with guard to avoid rapid race conditions
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
      try {
        if (videoRef.current) videoRef.current.muted = next
      } catch (e) {
        // ignore
      }
      return next
    })
  }

  // when a tile is clicked, load it into the featured player
  const loadTileIntoFeatured = (tile: { url: string; title: string; thumb?: string }) => {
    // If the clicked tile is already featured, just toggle play/pause
    if (tile.url === featured.url) {
      togglePlay()
      return
    }

    // switch featured and start playing
    setFeatured({
      url: tile.url,
      title: tile.title,
      desc: '',
      poster: tile.thumb ?? featured.poster
    })

    // after React updates the <video> src, load and try to play
    setTimeout(() => {
      try {
        // ensure video element picks up new source
        const v = videoRef.current
        if (v) {
          v.load()
          // keep the current muted state
          v.muted = muted
          tryPlay()
        }
      } catch (e) {
        // ignore
      }
    }, 80)
  }

  return (
    <section id="videos" className="py-20 container mx-auto px-4 max-w-6xl">
      {/* --- Featured Player --- */}
      <div className="mb-10">
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          {/* Plain HTML video element (serves local mp4 files) */}
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
            className="w-full h-full object-cover block"
          />

          {/* Overlay: title + controls */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6">
            <div className="pointer-events-auto flex items-center justify-between gap-4">
              <div className="text-left">
                <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow">
                  {featured.title}
                </h3>
                {featured.desc && <p className="text-white/80 mt-1 max-w-2xl">{featured.desc}</p>}
              </div>

              {/* Controls block */}
              <div className="flex items-center gap-3 pointer-events-auto">
                <button
                  aria-label={muted ? 'Unmute video' : 'Mute video'}
                  onClick={toggleMute}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition"
                >
                  {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>

                <button
                  aria-label={playing ? 'Pause video' : 'Play video'}
                  onClick={togglePlay}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition"
                >
                  {playing ? <FaPause /> : <FaPlay />}
                </button>
              </div>
            </div>
          </div>

          {/* subtle gradient to help text readability */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 75%)'
            }}
          />
        </div>
      </div>

      {/* --- Tile Grid: Thumbnails that load into the featured player --- */}
      <div className="grid md:grid-cols-3 gap-6">
        {tilesData.map((t, i) => (
          <motion.button
            key={i}
            onClick={() => loadTileIntoFeatured(t)}
            className="group block rounded-xl overflow-hidden shadow-lg bg-white text-left p-0 border-0"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14 }}
            aria-label={`Load ${t.title} into player`}
          >
            <div className="relative w-full aspect-video bg-gray-100">
              {/* Thumbnail image (you will provide these) */}
              <img
                src={t.thumb}
                alt={t.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                loading="lazy"
              />

              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/50 text-white shadow-lg">
                  <FaPlay />
                </div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="text-gray-900 font-semibold">{t.title}</h4>
            </div>
          </motion.button>
        ))}
      </div>

      {/* --- Testimonials Row (sample placeholders you can replace) --- */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <motion.blockquote
          className="p-6 rounded-xl bg-gradient-to-b from-white to-white/95 shadow"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-800 italic">
            "The Double Red Rose coffee has changed my mornings — I feel energized and focused!"
          </p>
          <footer className="mt-4 text-sm text-gray-600">— Maria, Harare</footer>
        </motion.blockquote>

        <motion.blockquote
          className="p-6 rounded-xl bg-gradient-to-b from-white to-white/95 shadow"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <p className="text-gray-800 italic">"Lovely aroma and great quality — best purchase I made this year."</p>
          <footer className="mt-4 text-sm text-gray-600">— Tendai, Bulawayo</footer>
        </motion.blockquote>

        <motion.blockquote
          className="p-6 rounded-xl bg-gradient-to-b from-white to-white/95 shadow"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
        >
          <p className="text-gray-800 italic">"Great product, fast delivery — highly recommend Double Red Rose."</p>
          <footer className="mt-4 text-sm text-gray-600">— Tafadzwa, Mutare</footer>
        </motion.blockquote>
      </div>

      <p className="mt-8 text-center text-sm text-gray-600">
        Prefer to watch on YouTube?{' '}
        <a
          href="https://youtube.com/your-channel"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-red-600"
        >
          Visit our YouTube channel
        </a>
      </p>
    </section>
  )
}
