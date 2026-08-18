import { PageIntro } from "@/components/sections/page-intro";
import { cvSections } from "@/content/site-data";
import { sitePath } from "@/lib/site-path";

export default function CvPage() {
  return (
    <main className="bg-[var(--paper)] text-[var(--ink)] pb-24 md:pb-32">
      <PageIntro
        index="06"
        title="CV"
        statement="A conventional summary remains useful when a reader needs the formal outline rather than the larger conceptual frame."
        annotation="FORMAL"
      />

      <section className="site-grid">
        <div className="col-span-full md:col-start-4 md:col-span-6">
          <div className="space-y-10">
            {cvSections.map((section) => (
              <section key={section.title} className="page-rule pt-5 md:pt-6">
                <h2 className="tiny-label text-[var(--ink)]">{section.title}</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[rgba(40,35,41,0.76)]">
                  {section.items.map((item) => (
                    <li key={item}>
                      {section.title === "Materials" && item === "Download CV (PDF)" ? (
                        <a href={sitePath("/CV.pdf")} download className="ink-link text-[var(--ink)]">
                          {item}
                        </a>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
