import Image from 'next/image'

export default function DetailMedia({
  title,
  meta,
  thumbnail,
  badge,
  iframeSrc,
  glowAccent,
  imageMode = 'cover',
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-zinc-900">
      {iframeSrc ? (
        <div className="w-full" style={{ height: '80vh' }}>
          <iframe src={iframeSrc} className="h-full w-full" title={title} />
        </div>
      ) : (
        <div className="aspect-video relative">
          {thumbnail?.type === 'image' && thumbnail.src ? (
            <>
              {glowAccent ? (
                <div
                  className={[
                    'absolute inset-0 opacity-20 blur-3xl',
                    'bg-gradient-to-br',
                    glowAccent,
                  ].join(' ')}
                />
              ) : null}
              {imageMode === 'contain' ? (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 p-16">
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt ?? title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <Image
                  src={thumbnail.src}
                  alt={thumbnail.alt ?? title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                />
              )}
            </>
          ) : (
            <div
              className={[
                'absolute inset-0 flex flex-col items-center justify-center p-12',
                thumbnail?.classes ?? 'bg-zinc-800',
              ].join(' ')}
            >
              {thumbnail?.label || meta ? (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 md:text-sm">
                  {thumbnail?.label ?? meta}
                </p>
              ) : null}
              <h1 className="text-center text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                {thumbnail?.headline ?? title}
              </h1>
            </div>
          )}

          {badge ? (
            <span className="absolute right-4 top-4 rounded-md bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {badge}
            </span>
          ) : null}
        </div>
      )}
    </div>
  )
}
