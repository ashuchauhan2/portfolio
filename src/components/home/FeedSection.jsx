"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import VideoCard from './VideoCard'

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function FeedSection({ section }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  if (!section || !section.items || section.items.length === 0) {
    return null
  }

  const isReels = section.variant === 'reels'

  return (
    <section ref={ref} className="py-8">
      <motion.header
        className="mb-4 flex flex-col gap-2"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            {section.title}
          </h2>
          {section.cta && (
            <a
              href={section.cta}
              className="text-sm font-medium text-zinc-300 hover:text-white"
            >
              View all
            </a>
          )}
        </div>
        {section.description ? (
          <p className="text-sm text-zinc-400">{section.description}</p>
        ) : null}
      </motion.header>

      {isReels ? (
        <motion.div
          className="flex gap-5 overflow-x-auto pb-2"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {section.items.map((item, index) => (
            <motion.div key={item.id} variants={itemVariants}>
              <VideoCard
                item={item}
                variant="reels"
                href={`/reels?category=${section.id}&index=${index}`}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {section.items.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <VideoCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  )
}
