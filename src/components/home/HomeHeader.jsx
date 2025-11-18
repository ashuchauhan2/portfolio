"use client"

import Link from "next/link"
import {
  Search,
  Mic,
  Bell,
  UserCircle2,
  Menu,
  PlusCircle,
  Mail,
  Phone,
} from "lucide-react"
import { useCallback, useState } from "react"

export default function HomeHeader({
  searchQuery = "",
  onSearchChange,
  onSearchSubmit,
  onMenuClick,
  searchPlaceholder = "Search my work",
}) {
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      onSearchSubmit?.()
    },
    [onSearchSubmit],
  )

  const handleChange = useCallback(
    (event) => {
      onSearchChange?.(event.target.value)
    },
    [onSearchChange],
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-zinc-950/95 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="inline-flex items-center justify-center rounded-full p-2 text-zinc-400 transition hover:bg-zinc-900 hover:text-white md:hidden"
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full pr-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-semibold tracking-tight">
              AC
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              AshuTube
            </span>
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-4 hidden max-w-2xl flex-1 items-center justify-center md:flex"
        >
          <div className="flex w-full overflow-hidden rounded-full border border-zinc-800 bg-zinc-900/90 focus-within:border-zinc-500">
            <input
              type="search"
              value={searchQuery}
              onChange={handleChange}
              placeholder={searchPlaceholder}
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-zinc-500"
              aria-label={searchPlaceholder}
            />
            <button
              type="submit"
              className="border-l border-zinc-800 px-4 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
              aria-label="Submit search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
          <button
            type="button"
            className="ml-3 hidden items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white lg:inline-flex"
            aria-label="Voice search"
          >
            <Mic className="h-5 w-5" />
          </button>
        </form>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={onSearchSubmit}
            className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 p-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white md:hidden"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 p-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white md:inline-flex"
            aria-label="Create new entry"
          >
            <PlusCircle className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 p-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            aria-label="View notifications"
          >
            <Bell className="h-5 w-5" />
          </button>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowProfileMenu((value) => !value)}
              className="flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 p-1 text-white transition hover:bg-zinc-800"
              aria-label="Profile menu"
            >
              <UserCircle2 className="h-8 w-8" />
            </button>

            {showProfileMenu ? (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowProfileMenu(false)}
                />
                <div className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/95 shadow-2xl backdrop-blur-md">
                  <div className="space-y-4 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white">
                        AC
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">
                          Ashu Chauhan
                        </h3>
                        <p className="mt-1 text-sm text-zinc-400">
                          Seeking: New grad roles in tech
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-zinc-800" />

                    <div className="space-y-3">
                      <a
                        href="mailto:ashuchauhan2702@gmail.com"
                        className="group flex items-center gap-3 rounded-lg p-3 transition hover:bg-zinc-800/50"
                      >
                        <div className="flex items-center justify-center rounded-full bg-blue-500/10 p-2">
                          <Mail className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                            Email
                          </p>
                          <p className="truncate text-sm text-white transition group-hover:text-blue-400">
                            ashuchauhan2702@gmail.com
                          </p>
                        </div>
                      </a>

                      <a
                        href="tel:+19053584278"
                        className="group flex items-center gap-3 rounded-lg p-3 transition hover:bg-zinc-800/50"
                      >
                        <div className="flex items-center justify-center rounded-full bg-green-500/10 p-2">
                          <Phone className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                            Phone
                          </p>
                          <p className="text-sm text-white transition group-hover:text-green-400">
                            905-358-4278
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="h-px bg-zinc-800" />

                    <Link
                      href="/content/connect-with-me"
                      onClick={() => setShowProfileMenu(false)}
                      className="block w-full rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-red-700"
                    >
                      View Full Contact Page
                    </Link>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}
