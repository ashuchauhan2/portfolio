'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { homeSections } from '@/data/homeContent'

const normalizeSkillId = (value) =>
  (typeof value === 'string' ? value.toLowerCase() : '')

export default function SearchResults({ searchQuery, onClose }) {
  const results = useMemo(() => {
    if (!searchQuery || searchQuery.trim().length === 0) {
      return []
    }

    const normalizedSearch = searchQuery.trim().toLowerCase()
    const allItems = []

    homeSections.forEach((section) => {
      if (!section.items) return

      section.items.forEach((item) => {
        const matchesSearch = [
          item?.title,
          item?.description,
          item?.meta,
          ...(item?.highlights || []),
          ...(item?.learnings || []),
          ...(item?.usedIn || []),
          ...(item?.keyUses || []),
        ]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(normalizedSearch))

        if (matchesSearch) {
          allItems.push({
            ...item,
            sectionTitle: section.title,
            sectionId: section.id,
            sectionVariant: section.variant,
          })
        }
      })
    })

    return allItems
  }, [searchQuery])

  if (!searchQuery || searchQuery.trim().length === 0) {
    return null
  }

  const getItemUrl = (item) => {
    if (item.sectionVariant === 'reels') {
      const index = homeSections
        .find((s) => s.id === item.sectionId)
        ?.items?.findIndex((i) => i.id === item.id)
      const safeIndex =
        Number.isInteger(index) && index >= 0 ? index : 0
      return `/reels?category=${item.sectionId}&index=${safeIndex}`
    }
    if (item.sectionId === 'skills') {
      return `/skill/${normalizeSkillId(item.id)}`
    }
    return `/content/${item.id}`
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="fixed top-16 left-0 right-0 z-50 mx-auto max-w-3xl px-4">
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
                {results.map((item) => (
                  <Link
                    key={item.id}
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
      </div>
    </>
  )
}

