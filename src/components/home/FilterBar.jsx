"use client"

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
              className={[
                'px-4 py-1.5 rounded-full border text-sm font-medium whitespace-nowrap transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500',
                isActive
                  ? 'border-white bg-white text-zinc-950'
                  : 'border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:bg-zinc-800',
              ].join(' ')}
            >
              {filter.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}


