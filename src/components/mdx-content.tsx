import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  code: ({ className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter {...props} style={vscDarkPlus} language={match[1]} PreTag="div">
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  // Add other custom components here (e.g. Image, Link) if needed
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
