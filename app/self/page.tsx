import Image from "next/image";

import { PageIntro } from "@/components/sections/page-intro";
import { selfDetails, selfOpening } from "@/content/site-data";

export default function SelfPage() {
  return (
    <main className="relative isolate overflow-hidden text-[var(--ink)] pb-24 md:pb-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image src="/images/4.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,240,234,0.56)_0%,rgba(242,240,234,0.72)_52%,rgba(242,240,234,0.94)_100%)]" />
      </div>

      <div className="relative z-10">
        <PageIntro
          index="05"
          title="SELF"
          statement={selfOpening}
          annotation="SELF"
        />

        <section className="site-grid gap-y-10">
        <figure className="col-span-full md:col-start-2 md:row-span-2 md:col-span-3">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#e7e2da]">
            <Image
              src="/images/3.jpg"
              alt="Portrait of the site author."
              fill
              sizes="(min-width: 768px) 24vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </figure>

        <div className="col-span-full md:col-start-6 md:col-span-5">
          <p className="text-lg leading-8 tracking-[-0.03em] text-[rgba(40,35,41,0.9)] md:text-xl">
            The same question runs through the formal work, the images, and the notes: what kind of structure becomes visible when one pays sustained attention to relation?
          </p>
        </div>

        <div className="col-span-full md:col-start-6 md:col-span-5">
          <dl className="page-rule divide-y divide-[var(--line)]">
            {selfDetails.map((detail) => (
              <div key={detail.label} className="grid gap-3 py-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-6 md:py-6">
                <dt className="tiny-label">{detail.label}</dt>
                <dd className="text-sm leading-7 text-[rgba(40,35,41,0.78)]">
                  {detail.label === "Contact" ? <a href={`mailto:${detail.value}`} className="hover:opacity-60">{detail.value}</a> : detail.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <a href="/CV.pdf" target="_blank" rel="noreferrer" className="ink-link tiny-label text-[var(--ink)]">
              Download CV (PDF)
            </a>
          </div>
        </div>
        </section>
      </div>
    </main>
  );
}
