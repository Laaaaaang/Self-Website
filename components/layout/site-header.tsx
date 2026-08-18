"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IndexOverlay } from "@/components/navigation/index-overlay";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLangClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="site-grid pt-5 md:pt-7">
          <div className="col-span-2 pointer-events-auto">
            <Link href="/" onClick={handleLangClick} className="tiny-label text-black transition-opacity duration-500 hover:opacity-60">
              LANG
            </Link>
          </div>

          <div className="col-span-2 justify-self-end pointer-events-auto md:col-start-11 md:col-span-2">
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="dialog"
              onClick={() => setOpen(true)}
              className="tiny-label text-black transition-opacity duration-500 hover:opacity-60"
            >
              INDEX
            </button>
          </div>
        </div>
      </header>

      <IndexOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
