declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXComponent: ComponentType<Record<string, never>>;

  export default MDXComponent;
  export const metadata: {
    title: string;
    date: string;
    subtitle: string;
    summary: string;
  };
}
