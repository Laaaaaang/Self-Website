import { HeroObservation } from "@/components/sections/hero-observation";
import { ResearchSection } from "@/components/sections/research-section";
import { ThesisSection } from "@/components/sections/thesis-section";
import { TracesSection } from "@/components/sections/traces-section";
import { VisibleLatent } from "@/components/sections/visible-latent";

export default function HomePage() {
  return (
    <main className="overflow-clip bg-[var(--paper)] text-[var(--ink)]">
      <HeroObservation />
      <ThesisSection />
      <ResearchSection limit={3} />
      <VisibleLatent />
      <TracesSection showEnding />
    </main>
  );
}
