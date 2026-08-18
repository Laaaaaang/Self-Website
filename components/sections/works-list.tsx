import { selectedWorks } from "@/content/site-data";

export function WorksList() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="space-y-12 md:space-y-16">
        {selectedWorks.map((work, index) => (
          <article key={work.title} className="site-grid gap-y-5">
            <div className="col-span-full md:col-span-2">
              <div className="page-rule pt-5 md:pt-6">
                <p className="tiny-label">0{index + 1}</p>
                <p className="mt-4 text-sm leading-7 text-[rgba(40,35,41,0.68)]">{work.year}</p>
              </div>
            </div>

            <div className="col-span-full md:col-start-4 md:col-span-4">
              <div className="page-rule pt-5 md:pt-6">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer"
                  className="section-title block text-[clamp(1.9rem,3vw,3rem)] transition-opacity duration-500 hover:opacity-60"
                >
                  {work.title}
                </a>
                <p className="mt-4 tiny-label">{work.kind}</p>
                <a href={work.url} target="_blank" rel="noreferrer" className="ink-link mt-5 tiny-label text-[var(--ink)]">
                  View paper
                </a>
              </div>
            </div>

            <div className="col-span-full md:col-start-9 md:col-span-3">
              <div className="page-rule pt-5 md:pt-6">
                <p className="tiny-label">{work.theme}</p>
                <p className="mt-4 text-sm leading-7 text-[rgba(40,35,41,0.72)]">{work.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
