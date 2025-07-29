'use client'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'

const videos = [
  { url: 'https://youtu.be/abc123', title: 'Business Overview' },
  { url: 'https://youtu.be/def456', title: 'Supply Chain & Quality' },
  { url: 'https://youtu.be/ghi789', title: 'Marketing Strategy' }
]

export default function VideoRow() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((v, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: .3 }}
          >
            <ReactPlayer url={v.url} width="100%" controls={false} light />
            <h4 className="mt-2 text-lg font-semibold text-center">{v.title}</h4>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center">
        <a href="https://youtube.com/your-channel" className="text-crimson underline">
          See more on our YouTube channel
        </a>
      </p>
    </section>
  )
}
