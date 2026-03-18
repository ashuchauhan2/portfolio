"use client"

import { useParams, useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  Award,
  Code,
  Briefcase,
  TrendingUp,
} from "lucide-react"
import {
  getSkillDetailData,
  normalizeId,
} from "@/data/contentQueries"
import DetailMedia from "@/components/detail/DetailMedia"
import DetailPageShell from "@/components/detail/DetailPageShell"
import ExpandablePanel from "@/components/detail/ExpandablePanel"
import RelatedItemsList from "@/components/detail/RelatedItemsList"
import NotFoundState from "@/components/detail/NotFoundState"
import { fadeUp } from "@/components/detail/animations"
import { useSearchOverlay } from "@/hooks/useSearchOverlay"

export default function SkillDetailPage() {
  const params = useParams()
  const router = useRouter()
  const rawSkillParam = params?.id
  const skillId = Array.isArray(rawSkillParam) ? rawSkillParam[0] : rawSkillParam
  const [descriptionExpanded, setDescriptionExpanded] = useState(true)
  const search = useSearchOverlay()
  const { skill, relatedSkills } = useMemo(
    () => getSkillDetailData(skillId),
    [skillId],
  )

  if (!skill) {
    return <NotFoundState title="Skill not found" />
  }

  return (
    <DetailPageShell
      search={search}
      onMenuClick={() => router.push('/')}
      searchPlaceholder="Search skills"
    >
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="min-w-0 flex-1">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <DetailMedia
              title={skill.title}
              meta={skill.meta}
              thumbnail={skill.thumbnail}
              glowAccent={skill.accent}
              imageMode="contain"
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
              {skill.title}
            </h2>
            <p className="text-sm text-zinc-400">{skill.meta}</p>
          </motion.div>

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
              <div className="space-y-6">
                <section>
                  <div className="mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-400" />
                    <h3 className="text-sm font-semibold text-white">
                      Experience Level
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {skill.experienceLevel || skill.description}
                  </p>
                </section>

                {skill.usedIn?.length ? (
                  <section>
                    <div className="mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 text-purple-400" />
                      <h3 className="text-sm font-semibold text-white">
                        Projects & Coursework
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.usedIn.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-zinc-300"
                        >
                          <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-purple-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {skill.keyUses?.length ? (
                  <section>
                    <div className="mb-2 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-emerald-400" />
                      <h3 className="text-sm font-semibold text-white">
                        Key Applications
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.keyUses.map((use) => (
                        <li
                          key={use}
                          className="flex gap-2 text-sm text-zinc-300"
                        >
                          <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {skill.whyRelevant ? (
                  <section className="rounded-lg border border-red-500/20 bg-gradient-to-br from-red-500/10 to-orange-500/10 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-red-400" />
                      <h3 className="text-sm font-semibold text-white">
                        Why This Matters
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-200">
                      {skill.whyRelevant}
                    </p>
                  </section>
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
            title="Other Skills"
            items={relatedSkills}
            getHref={(relatedSkill) => `/skill/${normalizeId(relatedSkill.id)}`}
          />
        </motion.div>
      </div>
    </DetailPageShell>
  )
}
