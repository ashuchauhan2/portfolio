"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play, EllipsisVertical } from 'lucide-react'

function hashCode(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

function fakeViews(title) {
  const h = hashCode(title || 'item')
  const base = (h % 90) + 10
  if (base > 80) return `${(base / 10).toFixed(1)}K views`
  return `${base * 10} views`
}

function fakeProgress(title) {
  const h = hashCode(title || 'item')
  return 30 + (h % 50)
}

export default function VideoCard({ item, variant = 'grid', href, onSelect }) {
  const isReel = variant === 'reels'
  const linkHref = href ?? item?.cta ?? null
  const interactive = onSelect || linkHref

  const cardContent = (
    <>
      <div
        className={[
          'relative overflow-hidden rounded-2xl bg-zinc-900',
          isReel ? 'aspect-[9/16]' : 'aspect-video',
        ].join(' ')}
      >
        {renderThumbnail(item?.thumbnail)}

        {!isReel ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <Play className="h-5 w-5 fill-zinc-900 text-zinc-900 ml-0.5" />
            </div>
          </div>
        ) : null}

        <div className="absolute bottom-0 left-0 h-[3px] bg-red-600 transition-all duration-500"
          style={{ width: `${fakeProgress(item?.title)}%` }}
        />

        {item?.badge ? (
          <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white">
            {item.badge}
          </span>
        ) : null}

        {isReel ? (
          <div className="absolute left-2 top-2 shimmer-bar rounded-md bg-red-600/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Short
          </div>
        ) : null}
      </div>

      <div
        className={[
          'mt-3 flex gap-3',
          isReel ? 'items-start' : '',
        ].join(' ')}
      >
        <div
          className={[
            'flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold uppercase tracking-wide text-white flex-shrink-0',
            item?.accent
              ? `bg-gradient-to-br ${item.accent}`
              : 'bg-zinc-800 text-zinc-200',
          ].join(' ')}
        >
          {initialsFromTitle(item?.title)}
        </div>
        <div className="flex-1 space-y-1 min-w-0">
          <h3
            className={[
              'font-semibold text-white leading-snug truncate',
              isReel ? 'text-sm md:text-base' : 'text-sm md:text-base',
            ].join(' ')}
            title={item?.title}
          >
            {item?.title}
          </h3>
          {item?.meta ? (
            <p
              className={[
                'text-xs text-zinc-400',
                isReel ? 'truncate' : '',
              ].join(' ')}
              title={item.meta}
            >
              {item.meta}
              {!isReel ? (
                <span className="ml-1 text-zinc-600">
                  · {fakeViews(item?.title)}
                </span>
              ) : null}
            </p>
          ) : null}
          {item?.description && !isReel ? (
            <p className="text-xs text-zinc-500 line-clamp-2">
              {item.description}
            </p>
          ) : null}
        </div>
        {!isReel ? (
          <div className="self-start rounded-full p-1 text-zinc-500 transition group-hover:text-white">
            <EllipsisVertical className="h-5 w-5" />
          </div>
        ) : null}
      </div>
    </>
  )

  const wrapperClass = [
    'group',
    isReel ? 'w-[160px] sm:w-[180px] md:w-[210px] flex-shrink-0' : '',
  ].join(' ')

  const motionProps = {
    whileHover: isReel
      ? { y: -4, transition: { duration: 0.2 } }
      : { scale: 1.02, transition: { duration: 0.2 } },
  }

  if (onSelect) {
    return (
      <motion.button
        type="button"
        onClick={onSelect}
        className={[
          'block w-full rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500',
          isReel ? 'flex-shrink-0' : '',
        ].join(' ')}
        {...motionProps}
      >
        <article className={wrapperClass}>{cardContent}</article>
      </motion.button>
    )
  }

  if (!interactive) {
    return (
      <motion.article className={wrapperClass} {...motionProps}>
        {cardContent}
      </motion.article>
    )
  }

  if (linkHref) {
    return (
      <motion.div {...motionProps}>
        <Link
          href={linkHref}
          className={[
            'block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-2xl',
            isReel ? 'flex-shrink-0' : '',
          ].join(' ')}
        >
          <article className={wrapperClass}>{cardContent}</article>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className={[
        'block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-2xl',
        isReel ? 'flex-shrink-0' : '',
      ].join(' ')}
      {...motionProps}
    >
      <article className={wrapperClass}>{cardContent}</article>
    </motion.button>
  )
}

function renderThumbnail(thumbnail) {
  if (!thumbnail) {
    return <div className="absolute inset-0 bg-zinc-800" />
  }

  if (thumbnail.type === 'image' && thumbnail.src) {
    const isSvg = thumbnail.src.endsWith('.svg')

    return (
      <Image
        src={thumbnail.src}
        alt={thumbnail.alt ?? 'Portfolio preview'}
        fill
        priority={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        className={isSvg
          ? "object-contain p-8 transition duration-300 group-hover:scale-105"
          : "object-cover transition duration-300 group-hover:scale-[1.02]"
        }
      />
    )
  }

  return (
    <div
      className={[
        'absolute inset-0 flex flex-col justify-end p-4',
        thumbnail.classes ?? 'bg-zinc-800',
      ].join(' ')}
    >
      {thumbnail.label ? (
        <p className="text-xs font-medium uppercase tracking-widest text-white/70">
          {thumbnail.label}
        </p>
      ) : null}
      {thumbnail.headline ? (
        <p className="text-lg font-semibold text-white leading-tight">
          {thumbnail.headline}
        </p>
      ) : null}
    </div>
  )
}

function initialsFromTitle(title) {
  if (!title) {
    return 'AC'
  }

  const words = title.split(' ').filter(Boolean)
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase()
  }

  return `${words[0][0]}${words[1][0]}`.toUpperCase()
}
