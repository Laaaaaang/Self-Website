"use client";

import Image from "next/image";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { VerticalLabel } from "@/components/typography/vertical-label";

export function HeroObservation() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.72, 0]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const backgroundFilter = useTransform(scrollYProgress, [0, 0.7, 1], ["blur(0px)", "blur(2px)", "blur(14px)"]);
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section ref={sectionRef} className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { opacity: backgroundOpacity, scale: backgroundScale, filter: backgroundFilter }}
        className="absolute -inset-6 -z-10"
      >
        <Image
          src="/images/_DSC7906.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,240,234,0.18)_0%,rgba(242,240,234,0.34)_44%,rgba(242,240,234,0.95)_100%)]" />
      </motion.div>

      <div className="site-grid w-full">
        <div className="hidden self-center md:col-start-4 md:col-span-1 md:block md:justify-self-end">
          <VerticalLabel text="OBSERVATION" />
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={reduceMotion ? { duration: 0 } : { ...transition, delay: 0.12 }}
          className="col-span-full min-w-0 -translate-y-10 text-center md:col-start-4 md:col-span-6 md:-translate-y-16 md:self-center"
        >
          <h1 className="max-w-full text-[clamp(3rem,15vw,5.75rem)] font-normal leading-[0.95] tracking-[-0.025em] [overflow-wrap:anywhere] md:text-[clamp(3.25rem,6.25vw,7rem)]">
            HIDDEN
            <br />
            STRUCTURE
          </h1>
        </motion.div>

      </div>

      <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { ...transition, delay: 0.18 }}
          className="site-grid absolute inset-x-0 bottom-10 md:bottom-14"
        >
          <div className="col-span-full flex items-end justify-between gap-8 tiny-label">
            <span>Research / Image / Notes</span>
          </div>
      </motion.div>
    </section>
  );
}
