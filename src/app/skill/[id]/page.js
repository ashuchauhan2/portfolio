"use client"

import { useParams, useRouter } from "next/navigation"
import { useCallback, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  Award,
  Code,
  Briefcase,
  TrendingUp,
} from "lucide-react"
import { homeSections } from "@/data/homeContent"
import SearchResults from "@/components/SearchResults"
import HomeHeader from "@/components/home/HomeHeader"

export default function SkillDetailPage() {
  const params = useParams()
  const router = useRouter()
  const rawSkillParam = params?.id
  const skillId = Array.isArray(rawSkillParam) ? rawSkillParam[0] : rawSkillParam
  const normalizedSkillId = skillId?.toLowerCase() ?? ''
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

  const skillsSection = useMemo(() => {
    return homeSections.find((section) => section.id === 'skills')
  }, [])

  const skill = useMemo(() => {
    if (!skillsSection?.items || !normalizedSkillId) {
      return null
    }
    return skillsSection.items.find(
      (item) => item.id?.toLowerCase() === normalizedSkillId,
    )
  }, [skillsSection, normalizedSkillId])

  const relatedSkills = useMemo(() => {
    if (!skillsSection?.items || !skill) {
      return []
    }
    return skillsSection.items.filter(
      (item) => item.id?.toLowerCase() !== normalizedSkillId,
    )
  }, [skillsSection, skill, normalizedSkillId])

  if (!skill) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <p className="text-lg">Skill not found</p>
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
        searchPlaceholder="Search skills"
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
                <div className="aspect-video relative">
                  {skill.thumbnail?.type === 'image' && skill.thumbnail.src ? (
                    <div className="absolute inset-0 flex items-center justify-center p-16 bg-zinc-900">
                      <Image
                        src={skill.thumbnail.src}
                        alt={skill.thumbnail.alt ?? skill.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 70vw"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className={[
                        'absolute inset-0 flex flex-col items-center justify-center p-12',
                        skill.thumbnail?.classes ?? 'bg-zinc-800',
                      ].join(' ')}
                    >
                      <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-white/60 mb-2">
                        {skill.meta}
                      </p>
                      <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
                        {skill.title}
                      </h1>
                    </div>
                  )}
                </div>
              </div>

              {/* Title & meta */}
              <div className="mt-4">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {skill.title}
                </h2>
                <p className="text-sm text-zinc-400">{skill.meta}</p>
              </div>

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
                  <div className="px-4 pb-4 space-y-6">
                    {/* Experience Level */}
                    <section>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-blue-400" />
                        <h3 className="text-sm font-semibold text-white">
                          Experience Level
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-300">
                        {skill.experienceLevel || skill.description}
                      </p>
                    </section>

                    {/* Projects & Coursework */}
                    {skill.usedIn && skill.usedIn.length > 0 ? (
                      <section>
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="h-4 w-4 text-purple-400" />
                          <h3 className="text-sm font-semibold text-white">
                            Projects & Coursework
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {skill.usedIn.map((item, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-sm text-zinc-300"
                            >
                              <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-purple-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : null}

                    {/* Key Applications */}
                    {skill.keyUses && skill.keyUses.length > 0 ? (
                      <section>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 text-emerald-400" />
                          <h3 className="text-sm font-semibold text-white">
                            Key Applications
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {skill.keyUses.map((use, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-sm text-zinc-300"
                            >
                              <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                              <span>{use}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : null}

                    {/* Why This Matters */}
                    {skill.whyRelevant ? (
                      <section className="rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-4 w-4 text-red-400" />
                          <h3 className="text-sm font-semibold text-white">
                            Why This Matters
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-zinc-200">
                          {skill.whyRelevant}
                        </p>
                      </section>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Right column - Related skills */}
            <div className="lg:w-[400px] xl:w-[440px] flex-shrink-0">
              <div className="space-y-2">
                <h3 className="px-2 text-sm font-semibold text-white mb-3">
                  Other Skills
                </h3>
                {relatedSkills.map((relatedSkill) => (
                  <Link
                    key={relatedSkill.id}
                    href={`/skill/${relatedSkill.id?.toLowerCase()}`}
                    className="flex gap-2 rounded-lg p-2 transition hover:bg-zinc-900/50 group"
                  >
                    <RelatedSkillThumbnail
                      thumbnail={relatedSkill.thumbnail}
                      title={relatedSkill.title}
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-1 text-sm font-semibold text-white line-clamp-2 transition group-hover:text-blue-400">
                        {relatedSkill.title}
                      </h4>
                      <p className="mb-1 text-xs text-zinc-500">
                        {relatedSkill.meta}
                      </p>
                      <p className="text-xs text-zinc-400 line-clamp-2">
                        {relatedSkill.description}
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

function RelatedSkillThumbnail({ thumbnail, title }) {
  if (thumbnail?.type === 'image' && thumbnail.src) {
    const isSvg = thumbnail.src.endsWith('.svg')
    return (
      <div className="relative aspect-video w-40 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900">
        <Image
          src={thumbnail.src}
          alt={thumbnail.alt ?? title}
          fill
          sizes="160px"
          className={
            isSvg
              ? 'object-contain p-6'
              : 'object-cover transition duration-300 group-hover:scale-[1.02]'
          }
        />
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-40 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900">
      <div
        className={[
          'absolute inset-0 flex items-center justify-center p-2',
          thumbnail?.classes ?? 'bg-zinc-800',
        ].join(' ')}
      >
        <p className="text-lg font-bold text-white text-center">{title}</p>
      </div>
    </div>
  )
}
