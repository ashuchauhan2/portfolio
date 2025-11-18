"use client"

import { useParams, useRouter } from "next/navigation"
import { useCallback, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ExternalLink } from "lucide-react"
import { homeSections } from "@/data/homeContent"
import SearchResults from "@/components/SearchResults"
import HomeHeader from "@/components/home/HomeHeader"

export default function ContentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const contentId = params?.id
  const [descriptionExpanded, setDescriptionExpanded] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)

  const handleSearchSubmit = useCallback(() => {
    if (searchQuery.trim()) {
      setShowSearchResults(true)
    }
  }, [searchQuery])

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value)
    setShowSearchResults(value.trim().length > 0)
  }, [])

  const { item, section, relatedItems } = useMemo(() => {
    let foundItem = null
    let foundSection = null
    const sections = homeSections.filter(
      (s) => s.variant !== 'reels' && s.id !== 'skills'
    )

    for (const sec of sections) {
      const found = sec.items?.find((i) => i.id === contentId)
      if (found) {
        foundItem = found
        foundSection = sec
        break
      }
    }

    const related = foundSection?.items
      ? foundSection.items.filter((i) => i.id !== contentId).slice(0, 10)
      : []

    return {
      item: foundItem,
      section: foundSection,
      relatedItems: related,
    }
  }, [contentId])

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <p className="text-lg">Content not found</p>
          <Link
            href="/"
            className="mt-4 inline-block text-red-500 hover:text-red-400"
          >
            Return home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <HomeHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        onMenuClick={() => router.push('/')}
      />

      {showSearchResults ? (
        <SearchResults
          searchQuery={searchQuery}
          onClose={() => {
            setShowSearchResults(false)
            setSearchQuery('')
          }}
        />
      ) : null}

      <main className="pt-20 pb-8 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left column - Video player & description */}
            <div className="flex-1 min-w-0">
              {/* Video player */}
              <div className="relative w-full overflow-hidden rounded-xl bg-zinc-900">
                {contentId === 'resume' ? (
                  <div className="w-full" style={{ height: '80vh' }}>
                    <iframe
                      src="/Resume.pdf"
                      className="w-full h-full"
                      title="Resume PDF"
                    />
                  </div>
                ) : (
                  <div className="aspect-video">
                    {item.thumbnail?.type === 'image' && item.thumbnail.src ? (
                      <Image
                        src={item.thumbnail.src}
                        alt={item.thumbnail.alt ?? item.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 70vw"
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className={[
                          'absolute inset-0 flex flex-col items-center justify-center p-12',
                          item.thumbnail?.classes ?? 'bg-zinc-800',
                        ].join(' ')}
                      >
                        {item.thumbnail?.label ? (
                          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-white/60 mb-2">
                            {item.thumbnail.label}
                          </p>
                        ) : null}
                        {item.thumbnail?.headline ? (
                          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                            {item.thumbnail.headline}
                          </h1>
                        ) : null}
                      </div>
                    )}
                    {item.badge ? (
                      <span className="absolute top-4 right-4 rounded-md bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                )}
              </div>

              {/* Title & meta */}
              <div className="mt-4">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h2>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <span>{item.meta}</span>
                  {item.timeline ? (
                    <>
                      <span>•</span>
                      <span>{item.timeline}</span>
                    </>
                  ) : null}
                  {item.location ? (
                    <>
                      <span>•</span>
                      <span>{item.location}</span>
                    </>
                  ) : null}
                </div>
              </div>

              {/* Action buttons */}
              {contentId === 'resume' ? (
                <div className="mt-4 flex gap-3">
                  <a
                    href="/Resume.pdf"
                    download="Ashu_Chauhan_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition"
                  >
                    Download Resume
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) : null}

              {/* Description */}
              <div className="mt-4 rounded-xl bg-zinc-900/50 border border-white/5">
                <button
                  type="button"
                  onClick={() => setDescriptionExpanded(!descriptionExpanded)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition"
                >
                  <span className="font-medium text-white">Description</span>
                  <ChevronDown
                    className={[
                      'h-5 w-5 text-zinc-400 transition-transform',
                      descriptionExpanded ? 'rotate-180' : '',
                    ].join(' ')}
                  />
                </button>

                {descriptionExpanded ? (
                  <div className="px-4 pb-4 space-y-4">
                    {item.description ? (
                      <p className="text-sm leading-relaxed text-zinc-300">
                        {item.description}
                      </p>
                    ) : null}

                    {item.highlights && item.highlights.length > 0 ? (
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">
                          Highlights
                        </h3>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-sm text-zinc-300"
                            >
                              <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-red-500" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Right column - Related content */}
            <div className="lg:w-[400px] xl:w-[440px] flex-shrink-0">
              <div className="space-y-2">
                <h3 className="px-2 text-sm font-semibold text-white mb-3">
                  {section?.title ? `More from ${section.title}` : 'Related Content'}
                </h3>
                {relatedItems.map((relatedItem) => (
                  <Link
                    key={relatedItem.id}
                    href={`/content/${relatedItem.id}`}
                    className="flex gap-2 p-2 rounded-lg hover:bg-zinc-900/50 transition group"
                  >
                    <div className="relative w-40 flex-shrink-0 aspect-video overflow-hidden rounded-lg bg-zinc-900">
                      {relatedItem.thumbnail?.type === 'image' &&
                      relatedItem.thumbnail.src ? (
                        <Image
                          src={relatedItem.thumbnail.src}
                          alt={relatedItem.thumbnail.alt ?? relatedItem.title}
                          fill
                          sizes="160px"
                          className="object-cover"
                        />
                      ) : (
                        <div
                          className={[
                            'absolute inset-0 flex items-center justify-center',
                            relatedItem.thumbnail?.classes ?? 'bg-zinc-800',
                          ].join(' ')}
                        >
                          <p className="text-xs font-bold text-white text-center px-2">
                            {relatedItem.thumbnail?.headline ?? relatedItem.title}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white line-clamp-2 mb-1 group-hover:text-blue-400 transition">
                        {relatedItem.title}
                      </h4>
                      <p className="text-xs text-zinc-500 mb-1">
                        {relatedItem.meta}
                      </p>
                      <p className="text-xs text-zinc-400 line-clamp-2">
                        {relatedItem.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

