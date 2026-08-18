"use client";

import Link from "next/link";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { navigationItems } from "@/content/site-data";

type IndexOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function IndexOverlay({ open, onClose }: IndexOverlayProps) {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="index-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          data-lenis-prevent
          className="fixed inset-0 z-50 h-[100svh] overflow-y-scroll overscroll-contain bg-[rgba(242,240,234,0.98)] backdrop-blur-[2px]"
        >
          <div role="dialog" aria-modal="true" aria-label="Site index" className="min-h-screen">
            <div className="site-grid pt-5 md:pt-7">
              <div className="col-span-2">
                <Link
                  href="/"
                  onClick={(event) => {
                    onClose();

                    if (window.location.pathname === "/") {
                      event.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="tiny-label text-black transition-opacity duration-500 hover:opacity-60"
                >
                  LANG
                </Link>
              </div>

              <div className="col-span-2 justify-self-end md:col-start-11 md:col-span-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="tiny-label text-black transition-opacity duration-500 hover:opacity-60"
                >
                  CLOSE
                </button>
              </div>
            </div>

            <nav aria-label="Editorial index" className="site-grid pb-12 pt-8 md:pb-16 md:pt-10">
              <div className="col-span-full md:col-start-4 md:col-span-7">
                <Link
                  href="/"
                  onClick={onClose}
                  className="tiny-label inline-flex transition-opacity duration-500 hover:opacity-60"
                >
                  00 / HIDDEN STRUCTURE
                </Link>

                <ol className="mt-10 space-y-8 md:mt-14 md:space-y-10">
                  {navigationItems.map((item) => (
                    <li key={item.href} className="page-rule pt-5 md:pt-6">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group block transition-opacity duration-500 hover:opacity-85"
                      >
                        <div className="grid gap-3 md:grid-cols-[80px_minmax(0,1fr)_minmax(220px,280px)] md:items-end md:gap-6">
                          <span className="tiny-label">{item.index}</span>
                          <span className="section-title leading-[0.92]">{item.label}</span>
                          <span className="text-sm leading-7 text-[rgba(40,35,41,0.68)]">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="col-span-full mt-20 flex flex-col gap-3 text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] md:col-start-4 md:col-span-7 md:mt-28 md:flex-row md:justify-between">
                <span>Research / Image / Notes</span>
              </div>
            </nav>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
