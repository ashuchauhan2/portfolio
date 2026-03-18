import { homeSections } from './index'
import { normalizeId } from './contentSchema'

export { normalizeId }

/**
 * @typedef {Object} PortfolioItem
 * @property {string} id
 * @property {string} title
 * @property {string} [description]
 * @property {string} [meta]
 * @property {string[]} [filters]
 * @property {string[]} [highlights]
 * @property {string[]} [learnings]
 * @property {string[]} [usedIn]
 * @property {string[]} [keyUses]
 * @property {string} [experienceLevel]
 * @property {string} [whyRelevant]
 * @property {string} [location]
 * @property {string} [timeline]
 * @property {string} [badge]
 * @property {string} [cta]
 * @property {Object} [thumbnail]
 * @property {Object} [channel]
 * @property {string} [sectionId]
 * @property {string} [sectionTitle]
 * @property {string} [sectionVariant]
 * @property {string} [contentType]
 */

export function getSectionById(sectionId) {
  return homeSections.find((section) => section.id === sectionId) ?? null
}

export function getFilteredSections(activeFilterId = 'all') {
  return homeSections
    .map((section) => {
      const items =
        section.items?.filter((item) => {
          const filters =
            item?.filters && item.filters.length > 0 ? item.filters : null

          return (
            activeFilterId === 'all' ||
            (filters ? filters.includes(activeFilterId) : false)
          )
        }) ?? []

      return { ...section, items }
    })
    .filter((section) => section.items.length > 0)
}

export function getReelIndex(sectionId, itemId) {
  const section = getSectionById(sectionId)
  const index = section?.items?.findIndex((item) => item.id === itemId)

  return Number.isInteger(index) && index >= 0 ? index : 0
}

export function getItemUrl(item) {
  if (item.sectionVariant === 'reels') {
    return `/reels?category=${item.sectionId}&index=${getReelIndex(
      item.sectionId,
      item.id,
    )}`
  }

  if (item.sectionId === 'skills') {
    return `/skill/${normalizeId(item.id)}`
  }

  return `/content/${item.id}`
}

export function getSearchResults(searchQuery) {
  if (!searchQuery || searchQuery.trim().length === 0) {
    return []
  }

  const normalizedSearch = searchQuery.trim().toLowerCase()
  const allItems = []

  homeSections.forEach((section) => {
    section.items?.forEach((item) => {
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
}

export function getContentDetailData(contentId) {
  const sections = homeSections.filter(
    (section) => section.variant !== 'reels' && section.id !== 'skills',
  )

  for (const section of sections) {
    const item = section.items?.find((entry) => entry.id === contentId)

    if (item) {
      return {
        item,
        section,
        relatedItems: section.items.filter((entry) => entry.id !== contentId).slice(0, 10),
      }
    }
  }

  return {
    item: null,
    section: null,
    relatedItems: [],
  }
}

export function getSkillDetailData(skillId) {
  const normalizedSkillId = normalizeId(skillId)
  const section = getSectionById('skills')

  if (!section?.items || !normalizedSkillId) {
    return {
      skill: null,
      section,
      relatedSkills: [],
    }
  }

  const skill =
    section.items.find((item) => normalizeId(item.id) === normalizedSkillId) ?? null

  return {
    skill,
    section,
    relatedSkills: skill
      ? section.items.filter((item) => normalizeId(item.id) !== normalizedSkillId)
      : [],
  }
}
