"use client"

import { Home, PlaySquare, BriefcaseBusiness, Award, Mail } from 'lucide-react'

const navItems = [
  { id: 'all', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: PlaySquare },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'skills', label: 'Skills', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function HomeSidebar({ activeFilterId, onSelect }) {
  return (
    <aside className="hidden md:flex fixed top-[64px] bottom-0 left-0 w-64 flex-col border-r border-zinc-900 bg-zinc-950/95">
      <div className="flex-1 overflow-y-auto py-5">
        <nav className="space-y-1 px-3">
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = id === activeFilterId

            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelect?.(id)}
                className={[
                  'w-full flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500',
                  isActive
                    ? 'bg-zinc-800/80 text-white'
                    : 'text-zinc-300 hover:bg-zinc-900/90',
                ].join(' ')}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span>{label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}


