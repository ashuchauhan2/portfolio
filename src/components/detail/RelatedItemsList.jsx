import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function RelatedItemsList({ title, items, getHref }) {
  return (
    <div className="space-y-2">
      <h3 className="mb-3 px-2 text-sm font-semibold text-white">{title}</h3>
      {items.map((item, index) => {
        const isSvg = item.thumbnail?.src?.endsWith('.svg')

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
          >
            <Link
              href={getHref(item)}
              className="group flex gap-2 rounded-lg p-2 transition hover:bg-zinc-900/50"
            >
              <div className="relative aspect-video w-40 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900">
                {item.thumbnail?.type === 'image' && item.thumbnail.src ? (
                  <Image
                    src={item.thumbnail.src}
                    alt={item.thumbnail.alt ?? item.title}
                    fill
                    sizes="160px"
                    className={
                      isSvg
                        ? 'object-contain p-6'
                        : 'object-cover transition duration-300 group-hover:scale-[1.02]'
                    }
                  />
                ) : (
                  <div
                    className={[
                      'absolute inset-0 flex items-center justify-center p-2',
                      item.thumbnail?.classes ?? 'bg-zinc-800',
                    ].join(' ')}
                  >
                    <p className="px-2 text-center text-xs font-bold text-white">
                      {item.thumbnail?.headline ?? item.title}
                    </p>
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="mb-1 line-clamp-2 text-sm font-semibold text-white transition group-hover:text-blue-400">
                  {item.title}
                </h4>
                <p className="mb-1 text-xs text-zinc-500">{item.meta}</p>
                <p className="line-clamp-2 text-xs text-zinc-400">
                  {item.description}
                </p>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
