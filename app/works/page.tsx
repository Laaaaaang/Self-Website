import { PageIntro } from "@/components/sections/page-intro";
import { WorksList } from "@/components/sections/works-list";

export default function WorksPage() {
  return (
    <main className="bg-[var(--paper)] text-[var(--ink)]">
      <PageIntro
        index="02"
        title="WORKS"
        statement="Selected papers and conference work."
        annotation="PAPERS"
      />
      <WorksList />
    </main>
  );
}
