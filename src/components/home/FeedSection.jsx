"use client"

import VideoCard from './VideoCard'

export default function FeedSection({ section }) {
  if (!section || !section.items || section.items.length === 0) {
    return null
  }

  const isReels = section.variant === 'reels'

  return (
    <section className="py-8">
      <header className="mb-4 flex flex-col gap-2">
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
      </header>
      {isReels ? (
        <div className="flex gap-5 overflow-x-auto pb-2">
          {section.items.map((item, index) => (
            <VideoCard
              key={item.id}
              item={item}
              variant="reels"
              href={`/reels?category=${section.id}&index=${index}`}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {section.items.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}


