import { PageIntro } from "@/components/sections/page-intro";
import { ResearchSection } from "@/components/sections/research-section";

export default function StructuresPage() {
  return (
    <main className="overflow-clip bg-[var(--paper)] text-[var(--ink)] pb-20 md:pb-28">
      <PageIntro
        index="01"
        title="STRUCTURES"
        statement="Research is organized here by questions about persistence: what remains legible when systems are reduced, generated, reasoned over, or revised."
        annotation="INVARIANT"
      />
      <ResearchSection showIntro={false} />
    </main>
  );
}
