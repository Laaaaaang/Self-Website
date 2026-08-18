"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { SectionMarker } from "@/components/typography/section-marker";
import { sitePath } from "@/lib/site-path";
import { traceEntries } from "@/content/site-data";
import { cn } from "@/lib/cn";

type TracesSectionProps = {
  showIntro?: boolean;
  showEnding?: boolean;
};

export function TracesSection({ showIntro = true, showEnding = false }: TracesSectionProps) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.72, 0]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const backgroundFilter = useTransform(scrollYProgress, [0, 0.7, 1], ["blur(0px)", "blur(2px)", "blur(14px)"]);

  return (
    <section ref={sectionRef} id="traces" className="relative isolate overflow-hidden section-space pb-40 md:pb-56">
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { opacity: backgroundOpacity, scale: backgroundScale, filter: backgroundFilter }}
        className="pointer-events-none absolute -inset-6 -z-10"
      >
        <Image src={sitePath("/images/_DSC7506.jpg")} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,240,234,0.52)_0%,rgba(242,240,234,0.66)_52%,rgba(242,240,234,0.88)_100%)]" />
      </motion.div>

      {showIntro ? (
        <div className="site-grid relative z-10 gap-y-8">
          <SectionMarker index="04" label="TRACES" className="col-span-full md:col-span-3" />

          <div className="col-span-full md:col-start-8 md:col-span-4">
            <p className="text-base leading-8 tracking-[-0.01em] text-[rgba(40,35,41,0.9)] md:text-lg">
              Photography is treated here as perceptual research. Line, repetition, shadow, and interval are read as structural evidence rather than decoration.
            </p>
          </div>
        </div>
      ) : null}

      <div className="relative z-10 mt-16 space-y-20 md:mt-24 md:space-y-32">
        {traceEntries.map((trace) => (
          <figure key={trace.slug} className="site-grid items-start gap-y-5">
            <div className={cn("col-span-full", trace.frameClass)}>
              <div className={cn("relative overflow-hidden bg-[#e7e2da]", trace.aspectClass)}>
                <Image
                  src={trace.image}
                  alt={trace.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015]"
                />
              </div>
            </div>

            <figcaption className={cn("col-span-full", trace.captionClass)}>
              <p className="tiny-label">
                {trace.location}
                <span className="mx-2 inline-block h-px w-4 bg-[var(--line)] align-middle" aria-hidden="true" />
                {trace.year}
              </p>
              <p className="mt-3 text-base tracking-[-0.02em] text-[rgba(40,35,41,0.92)]">{trace.title}</p>
              <p className="mt-3 max-w-[22rem] text-sm leading-7 text-[rgba(40,35,41,0.68)]">
                {trace.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {showEnding ? (
        <div className="site-grid relative z-10 mt-28 min-h-[42vh] items-end md:mt-40 md:min-h-[52vh]">
          <div className="col-span-full md:col-start-7 md:col-span-2 md:justify-self-center">
            <span className="tiny-label">LANG</span>
          </div>

          <div className="col-span-full md:col-start-5 md:col-span-4">
            <p className="font-editorial text-[clamp(2.6rem,4.2vw,4.8rem)] leading-[0.96] tracking-[-0.025em] text-[rgba(40,35,41,0.94)]">
              what remains?
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
