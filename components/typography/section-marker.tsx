import { cn } from "@/lib/cn";

type SectionMarkerProps = {
  index: string;
  label: string;
  className?: string;
};

export function SectionMarker({ index, label, className }: SectionMarkerProps) {
  return (
    <div className={cn("tiny-label flex items-center gap-3", className)}>
      <span>{index}</span>
      <span className="h-px w-8 bg-[var(--line)]" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
