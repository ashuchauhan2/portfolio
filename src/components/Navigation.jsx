// src/components/Navigation.jsx
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Ashu Chauhan
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-zinc-950 bg-white hover:bg-zinc-200 px-4 py-2 rounded-lg transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}