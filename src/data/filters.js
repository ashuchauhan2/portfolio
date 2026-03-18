// Home filter tabs.
// Keep this list in sync with the sections/categories you want exposed in the UI.
export const homeFilters = [
  { id: 'all', label: 'All' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const validHomeFilterIds = new Set(
  homeFilters
    .map((filter) => filter.id)
    .filter((filterId) => filterId !== 'all'),
)
