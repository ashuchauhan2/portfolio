'use client'

import { useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ReelsScreen from '@/components/home/ExperienceReelScreen'
import { homeSections } from '@/data/homeContent'

const DEFAULT_CATEGORY = 'experience'

export default function ReelsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get('category') ?? DEFAULT_CATEGORY
  const initialIndexParam = Number.parseInt(
    searchParams.get('index') ?? '0',
    10,
  )

  const section = useMemo(
    () => homeSections.find((item) => item.id === category),
    [category],
  )

  const items = section?.items ?? []
  const initialIndex =
    Number.isInteger(initialIndexParam) && initialIndexParam >= 0
      ? Math.min(initialIndexParam, Math.max(items.length - 1, 0))
      : 0

  if (!section || items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <p className="text-lg font-semibold">Reels not available yet.</p>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
        >
          Back home
        </button>
      </div>
    )
  }

  const heading =
    section.id === 'experience'
      ? 'Experience Stories'
      : section.id === 'projects'
        ? 'Project Reels'
        : 'Reels'

  return (
    <ReelsScreen
      items={items}
      initialIndex={initialIndex}
      onExit={() => router.push('/')}
      heading={heading}
    />
  )
}


