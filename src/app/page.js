// src/app/page.js
'use client'

import { useCallback, useMemo, useState } from 'react'
import HomeHeader from '@/components/home/HomeHeader'
import HomeSidebar from '@/components/home/HomeSidebar'
import HomeBottomNav from '@/components/home/HomeBottomNav'
import FilterBar from '@/components/home/FilterBar'
import FeedSection from '@/components/home/FeedSection'
import SearchResults from '@/components/SearchResults'
import { homeFilters, homeSections } from '@/data/homeContent'

export default function HomePage() {
  const [activeFilterId, setActiveFilterId] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value)
    setShowSearchResults(value.trim().length > 0)
  }, [])

  const handleSearchSubmit = useCallback(() => {
    if (searchQuery.trim()) {
      setShowSearchResults(true)
    }
  }, [searchQuery])

  const filteredSections = useMemo(() => {
    return homeSections
      .map((section) => {
        const items =
          section.items?.filter((item) => {
            const filters =
              item?.filters && item.filters.length > 0 ? item.filters : null

            const matchesFilter =
              activeFilterId === 'all' ||
              (filters ? filters.includes(activeFilterId) : false)
            return matchesFilter
          }) ?? []

        return { ...section, items }
      })
      .filter((section) => section.items.length > 0)
  }, [activeFilterId])

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <HomeHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        onMenuClick={() => setActiveFilterId('all')}
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
      <HomeSidebar activeFilterId={activeFilterId} onSelect={setActiveFilterId} />
      <main className="pt-[68px] pb-28 md:pb-16 md:pl-64">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
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
    <div className="py-16 text-center text-zinc-400">
      <p className="text-lg font-semibold text-white">
        Nothing to show right now.
      </p>
      <p className="mt-2 text-sm text-zinc-500">
        Try a different filter to explore more content.
      </p>
    </div>
  )
}
