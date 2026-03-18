"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'

const taglines = [
  "Building things that matter.",
  "New grad. Problem solver.",
  "Shipping code, solving problems.",
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function HeroSection({ onScrollToFeed }) {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = taglines[taglineIndex]

    if (!isDeleting && displayText === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(pause)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTaglineIndex((prev) => (prev + 1) % taglines.length)
      return
    }

    const speed = isDeleting ? 30 : 60
    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1),
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, taglineIndex])

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(239,68,68,0) 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute left-[30%] top-[40%] h-[300px] w-[300px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute right-[25%] top-[35%] h-[250px] w-[250px] rounded-full opacity-15"
          style={{
            background:
              'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 25, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants}>
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">Ashu Chauhan</span>
        </motion.h1>

        <motion.div
          variants={childVariants}
          className="h-8 text-lg text-zinc-400 sm:text-xl md:text-2xl"
        >
          <span>{displayText}</span>
          <span className="ml-0.5 inline-block w-[2px] h-[1em] bg-red-500 align-middle animate-pulse" />
        </motion.div>

        <motion.p
          variants={childVariants}
          className="max-w-lg text-sm leading-relaxed text-zinc-500 md:text-base"
        >
          CS grad from Brock University. I build solutions to problems.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="flex items-center gap-4 pt-2"
        >
          <motion.button
            type="button"
            onClick={onScrollToFeed}
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239,68,68,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Play className="h-4 w-4 fill-white" />
            Start Watching
          </motion.button>
          <motion.a
            href="/content/resume"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-5 w-5 text-zinc-600" />
      </motion.div>
    </section>
  )
}
