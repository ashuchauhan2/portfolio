import Link from 'next/link'

export default function NotFoundState({ title }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <p className="text-lg">{title}</p>
        <Link
          href="/"
          className="mt-4 inline-block text-red-500 hover:text-red-400"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}
