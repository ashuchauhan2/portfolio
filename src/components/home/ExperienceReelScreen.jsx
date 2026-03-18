"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Pause,
  Play,
} from 'lucide-react'

function renderThumbnail(thumbnail) {
  if (!thumbnail) {
    return <div className="absolute inset-0 rounded-[32px] bg-zinc-900" />
  }

  if (thumbnail.type === 'image' && thumbnail.src) {
    return (
      <Image
        src={thumbnail.src}
        alt={thumbnail.alt ?? 'Experience preview'}
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 420px"
        className="rounded-[32px] object-cover"
      />
    )
  }

  return (
    <div
      className={[
        'absolute inset-0 rounded-[32px] p-8 flex flex-col justify-end',
        thumbnail.classes ?? 'bg-zinc-800',
      ].join(' ')}
    >
      {thumbnail.label ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
          {thumbnail.label}
        </p>
      ) : null}
      {thumbnail.headline ? (
        <p className="mt-2 text-2xl font-semibold text-white leading-snug">
          {thumbnail.headline}
        </p>
      ) : null}
    </div>
  )
}

export default function ExperienceReelScreen({
  items,
  initialIndex = 0,
  onExit,
  heading = 'Reels',
}) {
  const clampedInitial = useMemo(() => {
    if (!items || items.length === 0) {
      return null
    }
    return Math.min(Math.max(initialIndex, 0), items.length - 1)
  }, [items, initialIndex])

  const [currentIndex, setCurrentIndex] = useState(clampedInitial ?? 0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState(0)
  const lastScrollRef = useRef(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (clampedInitial === null) {
      return
    }
    setCurrentIndex(clampedInitial)
  }, [clampedInitial])

  const goNext = useCallback(() => {
    if (!items || items.length === 0 || currentIndex >= items.length - 1) {
      return
    }
    setDirection(1)
    setCurrentIndex((prev) => prev + 1)
  }, [currentIndex, items])

  const goPrevious = useCallback(() => {
    if (!items || items.length === 0 || currentIndex <= 0) {
      return
    }
    setDirection(-1)
    setCurrentIndex((prev) => prev - 1)
  }, [currentIndex, items])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }
    const handleKey = (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        goNext()
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        goPrevious()
      } else if (event.key === 'Escape') {
        onExit?.()
      } else if (event.code === 'Space') {
        event.preventDefault()
        setIsPaused((value) => !value)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrevious, onExit])

  const handleWheel = useCallback(
    (event) => {
      const now = Date.now()
      if (now - lastScrollRef.current < 700) {
        return
      }
      if (event.deltaY > 50) {
        goNext()
        lastScrollRef.current = now
      } else if (event.deltaY < -50) {
        goPrevious()
        lastScrollRef.current = now
      }
    },
    [goNext, goPrevious],
  )

  if (!items || items.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <p>No stories yet.</p>
      </div>
    )
  }

  return (
    <div
      className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white"
      onWheel={handleWheel}
    >
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/40 backdrop-blur-sm px-6 py-4"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onExit}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="flex items-center gap-2 text-sm text-zinc-400">
            <BadgeCheck className="h-4 w-4 text-red-500" />
            {heading}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPaused((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          <Link
            href="/content/connect-with-me"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition"
          >
            Connect
          </Link>
        </div>
      </motion.header>

      <main
        ref={containerRef}
        className="relative h-screen w-full"
      >
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ y: direction >= 0 ? '100%' : '-100%', opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction >= 0 ? '-100%' : '100%', opacity: 0.5 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 30,
              mass: 1,
            }}
            className="absolute inset-0"
          >
            <ReelCard
              item={items[currentIndex]}
              index={currentIndex}
              totalCount={items.length}
              heading={heading}
              isActive
            />
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="fixed inset-y-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
        <motion.button
          type="button"
          onClick={goPrevious}
          disabled={currentIndex === 0}
          className={[
            'flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition',
            currentIndex > 0 ? 'hover:bg-white/25' : 'opacity-30 cursor-not-allowed',
          ].join(' ')}
          whileHover={currentIndex > 0 ? { scale: 1.1 } : undefined}
          whileTap={currentIndex > 0 ? { scale: 0.9 } : undefined}
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
        <motion.button
          type="button"
          onClick={goNext}
          disabled={currentIndex === items.length - 1}
          className={[
            'flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition',
            currentIndex < items.length - 1
              ? 'hover:bg-white/25'
              : 'opacity-30 cursor-not-allowed',
          ].join(' ')}
          whileHover={currentIndex < items.length - 1 ? { scale: 1.1 } : undefined}
          whileTap={currentIndex < items.length - 1 ? { scale: 0.9 } : undefined}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  )
}

function ReelCard({ item, index, totalCount, heading, isActive }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  useEffect(() => {
    if (isActive) {
      setCurrentSlideIndex(0)
    }
  }, [isActive])

  const slides = useMemo(() => {
    if (!item) {
      return []
    }
    const result = [{ id: 'summary', label: 'Overview' }]
    if (item.highlights?.length) {
      result.push({ id: 'highlights', label: 'Key Accomplishments' })
    }
    if (item.learnings?.length) {
      result.push({ id: 'learnings', label: 'Learning Outcomes' })
    }
    return result
  }, [item])

  const currentSlide =
    slides.length > 0 ? slides[Math.min(currentSlideIndex, slides.length - 1)] : null

  const hasNextSlide = currentSlideIndex < slides.length - 1
  const hasPreviousSlide = currentSlideIndex > 0

  const channel =
    item?.channel?.href
      ? {
          ...item.channel,
          label: item.channel.label ?? 'View Link',
          type: item.channel.type ?? 'demo',
        }
      : null

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center px-4 pb-14 pt-20">
      <motion.div
        className="relative flex w-full max-w-[420px] flex-col items-center gap-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[36px] shadow-[0_50px_140px_rgba(0,0,0,0.55)]">
          {renderThumbnail(item.thumbnail)}
          {channel ? (
            <ChannelButton channel={channel} className="absolute right-5 top-5" />
          ) : null}
          <div className="absolute inset-x-0 bottom-0 rounded-b-[36px] bg-gradient-to-t from-black/85 via-black/40 to-transparent px-6 py-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
                <span>
                  {index + 1} / {totalCount}
                </span>
                <span className="flex h-1.5 w-1.5 items-center justify-center rounded-full bg-white/60" />
                <span>{heading}</span>
              </div>
              <div className="rounded-2xl bg-black/70 px-5 py-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-red-200">
                  <span>{item.meta ?? heading}</span>
                  {item.timeline ? <span>{item.timeline}</span> : null}
                  {item.location ? <span>{item.location}</span> : null}
                </div>
                <h1 className="mt-3 text-xl font-semibold text-white">{item.title}</h1>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide?.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SlideContent item={item} slide={currentSlide} />
                  </motion.div>
                </AnimatePresence>
                {slides.length > 1 ? (
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentSlideIndex((i) => Math.max(i - 1, 0))}
                      disabled={!hasPreviousSlide}
                      className={[
                        'flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition',
                        hasPreviousSlide ? 'hover:bg-white/20' : 'opacity-30 cursor-not-allowed',
                      ].join(' ')}
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      {slides.map((slide, i) => {
                        const active = i === currentSlideIndex
                        return (
                          <button
                            key={slide.id}
                            type="button"
                            onClick={() => setCurrentSlideIndex(i)}
                            className="relative h-2 rounded-full bg-white/25 transition overflow-hidden"
                            style={{ width: active ? 32 : 12 }}
                            aria-label={`Go to ${slide.label}`}
                          >
                            {active ? (
                              <motion.span
                                layoutId="slideIndicator"
                                className="absolute inset-0 rounded-full bg-white"
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                              />
                            ) : null}
                          </button>
                        )
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentSlideIndex((i) => Math.min(i + 1, slides.length - 1))
                      }
                      disabled={!hasNextSlide}
                      className={[
                        'flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition',
                        hasNextSlide ? 'hover:bg-white/20' : 'opacity-30 cursor-not-allowed',
                      ].join(' ')}
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {item.badge ? (
            <span className="absolute left-6 top-6 rounded-full bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              {item.badge}
            </span>
          ) : null}
        </div>
      </motion.div>
    </section>
  )
}

function SlideContent({ item, slide }) {
  if (!item || !slide) {
    return null
  }

  if (slide.id === 'summary') {
    return (
      <>
        <h2 className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-200">
          {slide.label}
        </h2>
        {item.description ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-100">{item.description}</p>
        ) : null}
      </>
    )
  }

  if (slide.id === 'highlights') {
    return (
      <div className="mt-3">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-200">
          Key Accomplishments
        </h2>
        <ul className="mt-2 space-y-3 text-sm leading-relaxed text-zinc-100">
          {item.highlights?.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (slide.id === 'learnings') {
    return (
      <div className="mt-3">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-200">
          Learning Outcomes
        </h2>
        <ul className="mt-2 space-y-3 text-sm leading-relaxed text-zinc-100">
          {item.learnings?.map((learning) => (
            <li key={learning} className="flex gap-2">
              <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
              <span>{learning}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}

function ChannelButton({ channel, className = '' }) {
  if (!channel?.href) {
    return null
  }

  const baseClasses = [
    'inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/60 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/90 transition hover:bg-black/80',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const label = 'Demo/Code'
  const icon = <ArrowUpRight className="h-3.5 w-3.5 text-white" />

  const isExternal = /^https?:\/\//.test(channel.href)
  if (isExternal) {
    return (
      <a
        href={channel.href}
        target={channel.target ?? '_blank'}
        rel="noopener noreferrer"
        className={baseClasses}
      >
        <span>{label}</span>
        {icon}
      </a>
    )
  }

  return (
    <Link
      href={channel.href}
      target={channel.target}
      rel={channel.target ? 'noopener noreferrer' : undefined}
      className={baseClasses}
    >
      <span>{label}</span>
      {icon}
    </Link>
  )
}
