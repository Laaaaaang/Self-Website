import Link from "next/link";

import { PageIntro } from "@/components/sections/page-intro";
import { fragmentEntries } from "@/content/fragments";

export default function FragmentsPage() {
  return (
    <main className="bg-[var(--paper)] text-[var(--ink)] pb-24 md:pb-32">
      <PageIntro
        index="04"
        title="FRAGMENTS"
        statement="Notes are presented as a quiet archive. Each entry is a partial approach to the same underlying question."
        annotation="NOTE"
      />

      <section className="site-grid">
        <div className="col-span-full md:col-start-4 md:col-span-6">
          <ol className="space-y-6 md:space-y-8">
            {fragmentEntries.map((fragment) => (
              <li key={fragment.slug} className="page-rule pt-5 md:pt-6">
                <Link href={`/fragments/${fragment.slug}`} className="group block transition-opacity duration-500 hover:opacity-85">
                  <div className="grid gap-3 md:grid-cols-[100px_minmax(0,1fr)] md:gap-6">
                    <span className="tiny-label">{fragment.date}</span>
                    <div>
                      <p className="section-title text-[clamp(1.6rem,3vw,2.8rem)]">{fragment.title}</p>
                      <p className="mt-3 max-w-[30rem] text-sm leading-7 tracking-[0.02em] text-[rgba(40,35,41,0.72)]">
                        {fragment.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
