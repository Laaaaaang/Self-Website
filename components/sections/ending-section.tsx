"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function EndingSection() {
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
    <section ref={sectionRef} className="relative isolate flex min-h-[72vh] items-end overflow-hidden pb-10 md:pb-14">
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { opacity: backgroundOpacity, scale: backgroundScale, filter: backgroundFilter }}
        className="pointer-events-none absolute -inset-6 -z-10"
      >
        <Image src="/images/_DSC7506.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,240,234,0.52)_0%,rgba(242,240,234,0.66)_52%,rgba(242,240,234,0.88)_100%)]" />
      </motion.div>

      <div className="site-grid relative z-10 gap-y-8">
        <div className="col-span-full md:col-start-7 md:col-span-2 md:justify-self-center">
          <span className="tiny-label">LANG</span>
        </div>

        <div className="col-span-full md:col-start-5 md:col-span-4">
          <p className="font-editorial text-[clamp(2.6rem,4.2vw,4.8rem)] leading-[0.96] tracking-[-0.05em] text-[rgba(40,35,41,0.94)]">
            what remains?
          </p>
        </div>
      </div>
    </section>
  );
}
