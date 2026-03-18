'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { getItemUrl, getSearchResults } from '@/data/contentQueries'

export default function SearchResults({ searchQuery, onClose }) {
  const results = getSearchResults(searchQuery)

  if (!searchQuery || searchQuery.trim().length === 0) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="fixed top-16 left-0 right-0 z-50 mx-auto max-w-3xl px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
      >
        <div className="rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-800 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
            <h3 className="text-sm font-semibold text-white">
              Search Results ({results.length})
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              aria-label="Close search results"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto">
            {results.length > 0 ? (
              <div className="p-2">
                {results.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                  >
                    <Link
                      href={getItemUrl(item)}
                      onClick={onClose}
                      className="flex gap-3 p-3 rounded-lg hover:bg-zinc-800/50 transition group"
                    >
                      <div className="relative w-40 flex-shrink-0 aspect-video overflow-hidden rounded-lg bg-zinc-800">
                        {item.thumbnail?.type === 'image' && item.thumbnail.src ? (
                          <Image
                            src={item.thumbnail.src}
                            alt={item.thumbnail.alt ?? item.title}
                            fill
                            sizes="160px"
                            className="object-cover"
                          />
                        ) : (
                          <div
                            className={[
                              'absolute inset-0 flex items-center justify-center p-2',
                              item.thumbnail?.classes ?? 'bg-zinc-800',
                            ].join(' ')}
                          >
                            <p className="text-xs font-bold text-white text-center">
                              {item.thumbnail?.headline ?? item.title}
                            </p>
                          </div>
                        )}
                        {item.badge ? (
                          <span className="absolute top-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-white">
                            {item.badge}
                          </span>
                        ) : null}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white line-clamp-2 mb-1 group-hover:text-blue-400 transition">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-500 mb-1.5">
                          {item.sectionTitle} · {item.meta}
                        </p>
                        <p className="text-xs text-zinc-400 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-sm text-zinc-400">
                  No results found for &ldquo;{searchQuery}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
