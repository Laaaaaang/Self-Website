"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { SectionMarker } from "@/components/typography/section-marker";

const revealWord = {
  initial: { opacity: 0.32 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.8 }
};

export function ThesisSection() {
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
    <section ref={sectionRef} className="relative isolate overflow-hidden section-space">
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { opacity: backgroundOpacity, scale: backgroundScale, filter: backgroundFilter }}
        className="pointer-events-none absolute -inset-6 -z-10"
      >
        <Image src="/images/_DSC9498.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,240,234,0.52)_0%,rgba(242,240,234,0.66)_52%,rgba(242,240,234,0.88)_100%)]" />
      </motion.div>

      <div className="site-grid relative z-10 gap-y-10">
        <SectionMarker index="01" label="THESIS" className="col-span-full md:col-span-3" />

        <div className="col-span-full md:col-start-7 md:col-span-5">
          <h2 className="statement-title max-w-[8ch]">
            I study structures
            <br />
            that survive
            <br />
            <motion.span {...(reduceMotion ? {} : revealWord)}>representation,</motion.span>
            <br />
            <motion.span {...(reduceMotion ? {} : revealWord)}>transformation,</motion.span>
            <br />
            <motion.span {...(reduceMotion ? {} : revealWord)}>and scale.</motion.span>
          </h2>

          <p className="mt-10 max-w-[26rem] text-sm leading-7 text-[rgba(40,35,41,0.78)]">
            Research, photography, and writing are treated here as parallel modes of observation. Each asks what remains legible when the surface changes.
          </p>
        </div>
      </div>
    </section>
  );
}
