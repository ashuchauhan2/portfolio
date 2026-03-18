// Public aggregation layer for the portfolio content system.
// Most edits should happen in the domain files, not in this file.
import { homeFilters, validHomeFilterIds } from './filters'
import { normalizeSection } from './contentSchema'
import { spotlightSection } from './spotlight'
import { experienceSection } from './experience'
import { projectsSection } from './projects'
import { skillsSection } from './skills'

export { homeFilters }

export const homeSections = [
  spotlightSection,
  experienceSection,
  projectsSection,
  skillsSection,
].map((section) => normalizeSection(section, validHomeFilterIds))
