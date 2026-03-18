"use client"

import { useParams, useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { getContentDetailData } from "@/data/contentQueries"
import DetailMedia from "@/components/detail/DetailMedia"
import DetailPageShell from "@/components/detail/DetailPageShell"
import ExpandablePanel from "@/components/detail/ExpandablePanel"
import RelatedItemsList from "@/components/detail/RelatedItemsList"
import NotFoundState from "@/components/detail/NotFoundState"
import { fadeUp } from "@/components/detail/animations"
import { useSearchOverlay } from "@/hooks/useSearchOverlay"

export default function ContentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const contentId = params?.id
  const [descriptionExpanded, setDescriptionExpanded] = useState(true)
  const search = useSearchOverlay()
  const { item, section, relatedItems } = useMemo(
    () => getContentDetailData(contentId),
    [contentId],
  )

  if (!item) {
    return <NotFoundState title="Content not found" />
  }

  return (
    <DetailPageShell search={search} onMenuClick={() => router.push('/')}>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="min-w-0 flex-1">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <DetailMedia
              title={item.title}
              meta={item.meta}
              thumbnail={item.thumbnail}
              badge={item.badge}
              iframeSrc={contentId === 'resume' ? '/Resume.pdf' : undefined}
            />
          </motion.div>

          <motion.div
            className="mt-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h2 className="mb-2 text-xl font-semibold text-white md:text-2xl">
              {item.title}
            </h2>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <span>{item.meta}</span>
              {item.timeline ? (
                <>
                  <span>•</span>
                  <span>{item.timeline}</span>
                </>
              ) : null}
              {item.location ? (
                <>
                  <span>•</span>
                  <span>{item.location}</span>
                </>
              ) : null}
            </div>
          </motion.div>

          {contentId === 'resume' ? (
            <motion.div
              className="mt-4 flex gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <a
                href="/Resume.pdf"
                download="Ashu_Chauhan_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                Download Resume
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ) : null}

          <motion.div
            className="mt-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <ExpandablePanel
              title="Description"
              isExpanded={descriptionExpanded}
              onToggle={() => setDescriptionExpanded((value) => !value)}
            >
              <div className="space-y-4">
                {item.description ? (
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {item.description}
                  </p>
                ) : null}

                {item.highlights?.length ? (
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-white">
                      Highlights
                    </h3>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-sm text-zinc-300"
                        >
                          <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-red-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </ExpandablePanel>
          </motion.div>
        </div>

        <motion.div
          className="flex-shrink-0 lg:w-[400px] xl:w-[440px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <RelatedItemsList
            title={section?.title ? `More from ${section.title}` : 'Related Content'}
            items={relatedItems}
            getHref={(relatedItem) => `/content/${relatedItem.id}`}
          />
        </motion.div>
      </div>
    </DetailPageShell>
  )
}
