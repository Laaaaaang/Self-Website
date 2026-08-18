"use client";

import { useMemo, useState } from "react";

import Image from "next/image";

import { traceCollections, tracePhotos, type TraceLayout } from "@/content/traces";
import { sitePath } from "@/lib/site-path";

type Filter = "all" | `collection:${string}` | `tag:${string}`;

const orientationClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square"
};

const layoutClasses: Record<TraceLayout, string> = {
  grid: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
  sequence: "space-y-16",
  diptych: "grid gap-6 md:grid-cols-2"
};

export function TraceArchive() {
  const [filter, setFilter] = useState<Filter>("all");
  const tags = useMemo(() => [...new Set(tracePhotos.flatMap((photo) => photo.tags))].sort(), []);
  const selectedCollection = filter.startsWith("collection:")
    ? traceCollections.find((collection) => collection.slug === filter.slice("collection:".length))
    : undefined;
  const visiblePhotos = tracePhotos
    .filter((photo) => {
      if (filter === "all") {
        return true;
      }

      if (filter.startsWith("collection:")) {
        return photo.collection === filter.slice("collection:".length);
      }

      return photo.tags.includes(filter.slice("tag:".length));
    })
    .sort((a, b) => a.order - b.order);
  const layout = selectedCollection?.layout ?? "grid";

  return (
    <section className="pb-24 md:pb-32">
      <div className="site-grid">
        <div className="col-span-full md:col-start-3 md:col-span-8">
          <div className="page-rule pt-5 md:pt-6">
            <p className="tiny-label">EXHIBITIONS</p>
            <p className="mt-4 max-w-[36rem] text-base leading-8 tracking-[-0.01em] text-[rgba(40,35,41,0.82)] md:text-lg">
              Browse by exhibition or subject. Each exhibition has its own sequence and display format.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 md:mt-14">
            <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>All photographs</FilterButton>
            {traceCollections.map((collection) => (
              <FilterButton
                key={collection.slug}
                active={filter === `collection:${collection.slug}`}
                onClick={() => setFilter(`collection:${collection.slug}`)}
              >
                {collection.title}
              </FilterButton>
            ))}
            {tags.map((tag) => (
              <FilterButton key={tag} active={filter === `tag:${tag}`} onClick={() => setFilter(`tag:${tag}`)}>
                #{tag}
              </FilterButton>
            ))}
          </div>

          {selectedCollection ? (
            <div className="mt-10 page-rule pt-5 md:mt-14 md:pt-6">
              <p className="tiny-label">{selectedCollection.layout}</p>
              <h2 className="mt-4 section-title">{selectedCollection.title}</h2>
              <p className="mt-4 max-w-[38rem] text-sm leading-7 text-[rgba(40,35,41,0.76)]">{selectedCollection.description}</p>
            </div>
          ) : null}

          {visiblePhotos.length > 0 ? (
            <div className={`mt-12 md:mt-16 ${layoutClasses[layout]}`}>
              {visiblePhotos.map((photo) => (
                <figure key={photo.id} className={layout === "sequence" ? "site-grid gap-y-5" : undefined}>
                  <div className={layout === "sequence" ? "col-span-full md:col-start-2 md:col-span-8" : undefined}>
                    <div className={`relative overflow-hidden bg-[#e7e2da] ${orientationClasses[photo.orientation]}`}>
                      <Image src={sitePath(photo.src)} alt={photo.alt} fill sizes={layout === "sequence" ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"} className="object-cover" />
                    </div>
                  </div>
                  <figcaption className={layout === "sequence" ? "col-span-full md:col-start-10 md:col-span-2 md:pt-8" : "mt-4"}>
                    <p className="tiny-label">{[photo.location, photo.date].filter(Boolean).join(" / ")}</p>
                    <p className="mt-2 text-base tracking-[-0.02em]">{photo.title}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">{photo.tags.join(" · ")}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="mt-12 page-rule pt-6 md:mt-16">
              <p className="text-lg leading-8 tracking-[-0.02em]">No photographs have been added yet.</p>
              <p className="mt-3 max-w-[38rem] text-sm leading-7 text-[rgba(40,35,41,0.7)]">
                Add image files under <code>public/images/traces/</code>, then register them in <code>content/traces.ts</code> to create an exhibition.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterButton({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`tiny-label transition-opacity duration-300 ${active ? "text-[var(--ink)]" : "hover:opacity-60"}`}>
      {children}
    </button>
  );
}
