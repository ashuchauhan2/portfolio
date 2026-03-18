"use client"

import { Home, PlaySquare, BriefcaseBusiness } from 'lucide-react'
import { motion } from 'framer-motion'

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
            <motion.button
              key={id}
              type="button"
              onClick={() => onSelect?.(id)}
              className="flex flex-col items-center gap-1 py-3 w-full text-xs font-medium text-zinc-300"
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full">
                {isActive ? (
                  <motion.span
                    layoutId="bottomNavActive"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full bg-zinc-900" />
                )}
                <Icon className={[
                  'relative z-10 h-5 w-5 transition',
                  isActive ? 'text-zinc-950' : 'text-zinc-400',
                ].join(' ')} />
              </span>
              <span className={isActive ? 'text-white' : undefined}>{label}</span>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
