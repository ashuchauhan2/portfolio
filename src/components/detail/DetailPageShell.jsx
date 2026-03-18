"use client"

import SearchResults from '@/components/SearchResults'
import HomeHeader from '@/components/home/HomeHeader'

export default function DetailPageShell({
  search,
  onMenuClick,
  searchPlaceholder = 'Search my work',
  children,
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <HomeHeader
        searchQuery={search.searchQuery}
        onSearchChange={search.handleSearchChange}
        onSearchSubmit={search.handleSearchSubmit}
        onMenuClick={onMenuClick}
        searchPlaceholder={searchPlaceholder}
      />

      {search.showSearchResults ? (
        <SearchResults
          searchQuery={search.searchQuery}
          onClose={search.closeSearch}
        />
      ) : null}

      <main className="pt-20 pb-8 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1800px]">{children}</div>
      </main>
    </div>
  )
}
