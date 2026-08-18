import { SectionMarker } from "@/components/typography/section-marker";
import { VerticalLabel } from "@/components/typography/vertical-label";

type PageIntroProps = {
  index: string;
  title: string;
  statement: string;
  annotation?: string;
};

export function PageIntro({ index, title, statement, annotation }: PageIntroProps) {
  return (
    <section className="pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="site-grid gap-y-8">
        <SectionMarker index={index} label={title} className="col-span-full md:col-span-3" />

        <div className="col-span-full md:col-start-6 md:col-span-6">
          <h1 className="section-title">{title}</h1>
          <p className="mt-6 max-w-[32rem] text-sm leading-7 text-[rgba(40,35,41,0.78)]">
            {statement}
          </p>
        </div>

        {annotation ? (
          <div className="col-span-full md:col-start-11 md:col-span-2 md:justify-self-end">
            <VerticalLabel text={annotation} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
