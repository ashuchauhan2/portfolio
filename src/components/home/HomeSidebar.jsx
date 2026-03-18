"use client"

import { Home, PlaySquare, BriefcaseBusiness, Award, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

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
                className="relative w-full flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                {isActive ? (
                  <motion.div
                    layoutId="sidebarActive"
                    className="absolute inset-0 rounded-xl bg-zinc-800/80"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : null}
                {isActive ? (
                  <motion.div
                    layoutId="sidebarGlow"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-r-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : null}
                <Icon className={[
                  'relative z-10 h-5 w-5 flex-shrink-0 transition',
                  isActive ? 'text-white' : 'text-zinc-400',
                ].join(' ')} />
                <span className={[
                  'relative z-10 transition',
                  isActive ? 'text-white' : 'text-zinc-300 hover:text-white',
                ].join(' ')}>
                  {label}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
