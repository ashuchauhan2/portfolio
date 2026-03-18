"use client"

import { motion } from 'framer-motion'

export default function FilterBar({ filters, activeFilterId, onSelect }) {
  return (
    <div className="sticky top-[64px] z-30 bg-zinc-950/95 backdrop-blur-md py-3 border-b border-zinc-900">
      <div className="flex gap-3 overflow-x-auto px-2 md:px-0">
        {filters.map((filter) => {
          const isActive = filter.id === activeFilterId

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onSelect?.(filter.id)}
              className="relative px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              {isActive ? (
                <motion.span
                  layoutId="filterPill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              ) : null}
              <span
                className={[
                  'relative z-10 transition-colors',
                  isActive ? 'text-zinc-950' : 'text-zinc-300 hover:text-white',
                ].join(' ')}
              >
                {filter.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
