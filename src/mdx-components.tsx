import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter
          {...props}
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          codeTagProps={{
            style: {
              background: "transparent",
              boxShadow: "none",
            },
            className: "!bg-transparent !shadow-none !p-0 !rounded-none",
          }}
          customStyle={{
            background: "#1e1e1e",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "0",
          }}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    ...components,
  };
}
