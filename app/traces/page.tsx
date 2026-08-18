import { PageIntro } from "@/components/sections/page-intro";
import { TraceArchive } from "@/components/sections/trace-archive";

export default function TracesPage() {
  return (
    <main className="overflow-clip bg-[var(--paper)] text-[var(--ink)]">
      <PageIntro
        index="03"
        title="TRACES"
        statement="A photographic archive organized as exhibitions, series, and recurring subjects."
        annotation="ARCHIVE"
      />
      <TraceArchive />
    </main>
  );
}
