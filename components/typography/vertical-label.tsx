import { cn } from "@/lib/cn";

type VerticalLabelProps = {
  text: string;
  className?: string;
};

export function VerticalLabel({ text, className }: VerticalLabelProps) {
  return (
    <span
      className={cn(
        "hidden text-[10px] uppercase tracking-[0.35em] text-[var(--muted)] md:block [writing-mode:vertical-rl]",
        className
      )}
    >
      {text}
    </span>
  );
}
