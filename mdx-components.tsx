import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ className, ...props }) => (
      <h2 className={["font-editorial", className].filter(Boolean).join(" ")} {...props} />
    ),
    p: ({ className, ...props }) => <p className={className} {...props} />,
    a: ({ className, ...props }) => <a className={["ink-link", className].filter(Boolean).join(" ")} {...props} />,
    ul: ({ className, ...props }) => <ul className={className} {...props} />,
    li: ({ className, ...props }) => <li className={className} {...props} />,
    blockquote: ({ className, ...props }) => (
      <blockquote className={["font-editorial", className].filter(Boolean).join(" ")} {...props} />
    ),
    ...components
  };
}
