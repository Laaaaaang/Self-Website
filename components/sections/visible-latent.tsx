"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { SectionMarker } from "@/components/typography/section-marker";
import { sitePath } from "@/lib/site-path";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function VisibleLatent() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.72, 0]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const backgroundFilter = useTransform(scrollYProgress, [0, 0.7, 1], ["blur(0px)", "blur(2px)", "blur(14px)"]);
  const [reveal, setReveal] = useState(0.18);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden section-space" aria-labelledby="visible-latent-heading">
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { opacity: backgroundOpacity, scale: backgroundScale, filter: backgroundFilter }}
        className="pointer-events-none absolute -inset-6 -z-10"
      >
        <Image src={sitePath("/images/2.jpg")} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,240,234,0.52)_0%,rgba(242,240,234,0.66)_52%,rgba(242,240,234,0.88)_100%)]" />
      </motion.div>

      <div className="site-grid relative z-10 gap-y-8">
        <SectionMarker index="03" label="VISIBLE / LATENT" className="col-span-full md:col-span-3" />

        <div className="col-span-full md:col-start-7 md:col-span-4">
          <h2 id="visible-latent-heading" className="section-title max-w-[10ch]">
            Appearance gives way to structure.
          </h2>
          <p className="mt-6 max-w-[24rem] text-sm leading-7 text-[rgba(40,35,41,0.76)]">
            The frame begins as an image. Under inspection it becomes a diagram of relation, adjacency, and dependency.
          </p>
        </div>

        <div className="col-span-full md:col-start-3 md:col-span-8 md:mt-8">
          <div
            className="group relative isolate overflow-hidden bg-[#e7e2da]"
            onPointerMove={(event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              const nextReveal = clamp((event.clientX - bounds.left) / bounds.width, 0.08, 0.92);
              setReveal(nextReveal);
            }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={sitePath("/images/_DSC8858.jpg")}
                alt="Visible view of an interactive art installation."
                fill
                sizes="(min-width: 768px) 70vw, 100vw"
                className="object-cover"
              />

              <motion.div
                animate={{ clipPath: `inset(0 ${100 - reveal * 100}% 0 0)` }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: "linear" }}
                className="absolute inset-0"
              >
                <Image
                  src={sitePath("/images/_DSC8883.jpg")}
                  alt="Alternate latent view of the interactive art installation."
                  fill
                  sizes="(min-width: 768px) 70vw, 100vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ left: `${reveal * 100}%` }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: "linear" }}
                className="absolute inset-y-0 w-px bg-[rgba(40,35,41,0.22)]"
              />

              <div className="absolute left-4 top-4 tiny-label">VISIBLE</div>
              <motion.div
                animate={{ opacity: reveal > 0.45 ? 1 : 0.32 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.25 }}
                className="absolute right-4 top-4 tiny-label"
              >
                LATENT
              </motion.div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="tiny-label">Move across the frame to reveal relation.</p>

            <label className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">
              <span>Reveal</span>
              <input
                type="range"
                min="8"
                max="92"
                value={Math.round(reveal * 100)}
                onChange={(event) => setReveal(Number(event.target.value) / 100)}
                aria-label="Reveal latent structure"
                className="w-40 accent-[var(--ink)]"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
