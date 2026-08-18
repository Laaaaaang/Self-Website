"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { SectionMarker } from "@/components/typography/section-marker";
import { researchThemes } from "@/content/site-data";
import { sitePath } from "@/lib/site-path";

type ResearchSectionProps = {
  limit?: number;
  showIntro?: boolean;
};

export function ResearchSection({ limit, showIntro = true }: ResearchSectionProps) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.72, 0]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const backgroundFilter = useTransform(scrollYProgress, [0, 0.7, 1], ["blur(0px)", "blur(2px)", "blur(14px)"]);
  const themes = typeof limit === "number" ? researchThemes.slice(0, limit) : researchThemes;

  return (
    <section ref={sectionRef} id="structures" className="relative isolate overflow-hidden section-space">
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { opacity: backgroundOpacity, scale: backgroundScale, filter: backgroundFilter }}
        className="pointer-events-none absolute -inset-6 -z-10"
      >
        <Image src={sitePath("/images/_DSC7630.jpg")} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,240,234,0.52)_0%,rgba(242,240,234,0.66)_52%,rgba(242,240,234,0.88)_100%)]" />
      </motion.div>

      {showIntro ? (
        <div className="site-grid relative z-10 gap-y-8">
          <SectionMarker index="02" label="STRUCTURES" className="col-span-full md:col-span-3" />

          <div className="col-span-full md:col-start-6 md:col-span-5">
            <h2 className="section-title max-w-[10ch]">Research as a study of invariants.</h2>
            <p className="mt-6 max-w-[28rem] text-sm leading-7 text-[rgba(40,35,41,0.76)]">
              The work is framed here by structural questions first. Domains such as circuit simulation, graph reasoning, and AI for design appear as specific terrains within a broader concern.
            </p>
          </div>
        </div>
      ) : null}

      <div className="relative z-10 mt-16 space-y-24 md:mt-24 md:space-y-40">
        {themes.map((theme) => (
          <article key={theme.slug} className="site-grid gap-y-8 md:gap-y-0">
            <div className="col-span-full md:col-start-3 md:col-span-3">
              <div className="page-rule pt-5 md:pt-6">
                <p className="tiny-label">{theme.title}</p>
                <p className="mt-5 max-w-[22rem] text-lg leading-8 tracking-[-0.03em] text-[rgba(40,35,41,0.9)] md:text-xl">
                  {theme.statement}
                </p>
                <p className="mt-5 max-w-[22rem] text-sm leading-7 text-[rgba(40,35,41,0.72)]">
                  {theme.description}
                </p>

                <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                  {theme.metadata.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-span-full md:col-start-7 md:col-span-4">
              <ol className="page-rule space-y-5 pt-6">
                {theme.projects.map((project, index) => (
                  <li key={project.title} className="grid gap-2 md:grid-cols-[36px_minmax(0,1fr)] md:gap-4">
                    <span className="tiny-label">0{index + 1}</span>
                    <div>
                      <p className="text-base tracking-[-0.02em] text-[rgba(40,35,41,0.92)]">
                        {project.title}
                      </p>
                      <p className="mt-2 max-w-[38rem] text-sm leading-7 text-[rgba(40,35,41,0.7)]">
                        {project.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
