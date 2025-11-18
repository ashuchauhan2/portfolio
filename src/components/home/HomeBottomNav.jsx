"use client"

import { Home, PlaySquare, BriefcaseBusiness } from 'lucide-react'

const navItems = [
  { id: 'all', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: PlaySquare },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
]

export default function HomeBottomNav({ activeFilterId, onSelect }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-900 bg-zinc-950/95 backdrop-blur-md">
      <div className="flex items-center justify-around">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = id === activeFilterId

          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelect?.(id)}
              className="flex flex-col items-center gap-1 py-3 w-full text-xs font-medium text-zinc-300"
            >
              <span
                className={[
                  'flex h-9 w-9 items-center justify-center rounded-full transition',
                  isActive ? 'bg-white text-zinc-950' : 'bg-zinc-900 text-zinc-400',
                ].join(' ')}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className={isActive ? 'text-white' : undefined}>{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}


