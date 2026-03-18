'use client'

import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import HomeHeader from '@/components/home/HomeHeader'
import HomeSidebar from '@/components/home/HomeSidebar'
import HomeBottomNav from '@/components/home/HomeBottomNav'
import FilterBar from '@/components/home/FilterBar'
import FeedSection from '@/components/home/FeedSection'
import SearchResults from '@/components/SearchResults'
import HeroSection from '@/components/home/HeroSection'
import { homeFilters } from '@/data'
import { getFilteredSections } from '@/data/contentQueries'
import { useSearchOverlay } from '@/hooks/useSearchOverlay'

export default function HomePage() {
  const [activeFilterId, setActiveFilterId] = useState('all')
  const feedRef = useRef(null)
  const search = useSearchOverlay()

  const handleScrollToFeed = useCallback(() => {
    feedRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const filteredSections = getFilteredSections(activeFilterId)

  const showHero = activeFilterId === 'all'

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <HomeHeader
        searchQuery={search.searchQuery}
        onSearchChange={search.handleSearchChange}
        onSearchSubmit={search.handleSearchSubmit}
        onMenuClick={() => setActiveFilterId('all')}
      />
      {search.showSearchResults ? (
        <SearchResults
          searchQuery={search.searchQuery}
          onClose={search.closeSearch}
        />
      ) : null}
      <HomeSidebar activeFilterId={activeFilterId} onSelect={setActiveFilterId} />
      <main className="pt-[68px] pb-28 md:pb-16 md:pl-64">
        {showHero ? (
          <HeroSection onScrollToFeed={handleScrollToFeed} />
        ) : null}
        <div ref={feedRef} className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
          <FilterBar
            filters={homeFilters}
            activeFilterId={activeFilterId}
            onSelect={setActiveFilterId}
          />
        </div>
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <FeedSection key={section.id} section={section} />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </main>
      <HomeBottomNav
        activeFilterId={activeFilterId}
        onSelect={setActiveFilterId}
      />
    </div>
  )
}

function EmptyState() {
  return (
    <motion.div
      className="py-16 text-center text-zinc-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-lg font-semibold text-white">
        Nothing to show right now.
      </p>
      <p className="mt-2 text-sm text-zinc-500">
        Try a different filter to explore more content.
      </p>
    </motion.div>
  )
}
