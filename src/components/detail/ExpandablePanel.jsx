"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ExpandablePanel({
  title,
  isExpanded,
  onToggle,
  children,
  className = '',
}) {
  return (
    <div className={`rounded-xl border border-white/5 bg-zinc-900/50 ${className}`.trim()}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-white/5"
      >
        <span className="font-medium text-white">{title}</span>
        <ChevronDown
          className={[
            'h-5 w-5 text-zinc-400 transition-transform',
            isExpanded ? 'rotate-180' : '',
          ].join(' ')}
        />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
