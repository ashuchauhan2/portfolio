/**
 * Shared content schema + normalization helpers for portfolio data.
 * Raw data files stay easy to edit; this file makes sure the app receives
 * one consistent shape everywhere.
 */

const DEFAULT_SECTION_DESCRIPTION = ''

export const SECTION_VARIANTS = {
  GRID: 'grid',
  REELS: 'reels',
}

export const CONTENT_TYPES = {
  SPOTLIGHT: 'spotlight',
  PROJECT: 'project',
  EXPERIENCE: 'experience',
  SKILL: 'skill',
}

export const normalizeId = (value) =>
  (typeof value === 'string' ? value.trim().toLowerCase() : '')

const normalizeString = (value, fallback = '') =>
  typeof value === 'string' ? value.trim() : fallback

const normalizeOptionalString = (value) =>
  typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined

const normalizeStringArray = (value) =>
  Array.isArray(value)
    ? value
        .filter((entry) => typeof entry === 'string')
        .map((entry) => entry.trim())
        .filter(Boolean)
    : []

const normalizeThumbnail = (thumbnail, fallbackTitle) => {
  if (!thumbnail || typeof thumbnail !== 'object') {
    return undefined
  }

  return {
    ...thumbnail,
    type: normalizeOptionalString(thumbnail.type) ?? 'image',
    src: normalizeOptionalString(thumbnail.src),
    alt: normalizeOptionalString(thumbnail.alt) ?? fallbackTitle,
    label: normalizeOptionalString(thumbnail.label),
    headline: normalizeOptionalString(thumbnail.headline),
    classes: normalizeOptionalString(thumbnail.classes),
  }
}

const normalizeChannel = (channel) => {
  if (!channel?.href) {
    return undefined
  }

  return {
    href: channel.href,
    label: normalizeOptionalString(channel.label) ?? 'View Link',
    type: normalizeOptionalString(channel.type) ?? 'demo',
    target: normalizeOptionalString(channel.target),
  }
}

const getContentType = (sectionId) => {
  if (sectionId === 'projects') {
    return CONTENT_TYPES.PROJECT
  }

  if (sectionId === 'experience') {
    return CONTENT_TYPES.EXPERIENCE
  }

  if (sectionId === 'skills') {
    return CONTENT_TYPES.SKILL
  }

  return CONTENT_TYPES.SPOTLIGHT
}

const getDefaultCta = (section, itemId) => {
  if (section.id === 'skills') {
    return `/skill/${normalizeId(itemId)}`
  }

  if (section.variant === SECTION_VARIANTS.REELS) {
    return undefined
  }

  return `/content/${itemId}`
}

const normalizeFilters = (filters, sectionId, validFilterIds) => {
  const sanitized = normalizeStringArray(filters).filter((filterId) =>
    validFilterIds.has(filterId),
  )

  if (sanitized.length > 0) {
    return sanitized
  }

  return validFilterIds.has(sectionId) ? [sectionId] : []
}

export function normalizeItem(item, section, validFilterIds) {
  const id = normalizeId(item?.id)
  const title = normalizeString(item?.title, 'Untitled')

  return {
    ...item,
    id,
    title,
    description: normalizeOptionalString(item?.description),
    meta: normalizeOptionalString(item?.meta),
    accent: normalizeOptionalString(item?.accent),
    badge: normalizeOptionalString(item?.badge),
    cta: normalizeOptionalString(item?.cta) ?? getDefaultCta(section, id),
    location: normalizeOptionalString(item?.location),
    timeline: normalizeOptionalString(item?.timeline),
    experienceLevel: normalizeOptionalString(item?.experienceLevel),
    whyRelevant: normalizeOptionalString(item?.whyRelevant),
    filters: normalizeFilters(item?.filters, section.id, validFilterIds),
    profiles: normalizeStringArray(item?.profiles),
    highlights: normalizeStringArray(item?.highlights),
    learnings: normalizeStringArray(item?.learnings),
    usedIn: normalizeStringArray(item?.usedIn),
    keyUses: normalizeStringArray(item?.keyUses),
    thumbnail: normalizeThumbnail(item?.thumbnail, title),
    channel: normalizeChannel(item?.channel),
    sectionId: section.id,
    sectionTitle: section.title,
    sectionVariant: section.variant,
    contentType: getContentType(section.id),
  }
}

export function normalizeSection(section, validFilterIds) {
  const normalizedSection = {
    ...section,
    id: normalizeId(section?.id),
    title: normalizeString(section?.title, 'Untitled Section'),
    description: normalizeOptionalString(section?.description) ?? DEFAULT_SECTION_DESCRIPTION,
    variant:
      section?.variant === SECTION_VARIANTS.REELS
        ? SECTION_VARIANTS.REELS
        : SECTION_VARIANTS.GRID,
  }

  return {
    ...normalizedSection,
    items: Array.isArray(section?.items)
      ? section.items
          .map((item) => normalizeItem(item, normalizedSection, validFilterIds))
          .filter((item) => item.id)
      : [],
  }
}
