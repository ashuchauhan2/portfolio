import { useCallback, useState } from 'react'

export function useSearchOverlay() {
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

  const closeSearch = useCallback(() => {
    setShowSearchResults(false)
    setSearchQuery('')
  }, [])

  return {
    searchQuery,
    showSearchResults,
    handleSearchChange,
    handleSearchSubmit,
    closeSearch,
  }
}
