import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getFragmentBySlug, fragmentEntries } from "@/content/fragments";

type FragmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return fragmentEntries.map((fragment) => ({ slug: fragment.slug }));
}

export async function generateMetadata({ params }: FragmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const fragment = getFragmentBySlug(slug);

  if (!fragment) {
    return {};
  }

  return {
    title: `${fragment.title} | Fragments`,
    description: fragment.summary
  };
}

export default async function FragmentPage({ params }: FragmentPageProps) {
  const { slug } = await params;
  const fragment = getFragmentBySlug(slug);

  if (!fragment) {
    notFound();
  }

  const Component = fragment.Component;

  return (
    <main className="bg-[var(--paper)] text-[var(--ink)] pb-24 pt-28 md:pb-32 md:pt-36">
      <article className="site-grid">
        <div className="col-span-full md:col-start-4 md:col-span-6">
          <p className="tiny-label">{fragment.date}</p>
          <h1 className="section-title mt-6">{fragment.title}</h1>
          <p className="mt-5 max-w-[28rem] text-sm leading-7 text-[rgba(40,35,41,0.72)]">
            {fragment.subtitle}
          </p>

          <div className="reading-column mt-14">
            <Component />
          </div>
        </div>
      </article>
    </main>
  );
}
