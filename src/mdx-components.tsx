import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"code">) => {
      const match = /language-(\w+)/.exec(className || "");
      const code = String(children).replace(/\n$/, "");

      return match ? (
        <CodeBlock {...props} language={match[1]} code={code} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    ...components,
  };
}
