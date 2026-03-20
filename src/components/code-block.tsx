"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

type CodeBlockProps = {
  code: string;
  language: string;
} & React.ComponentPropsWithoutRef<"code">;

export function CodeBlock({ code, language, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeoutId = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timeoutId);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-100 transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:outline-none"
        aria-label={copied ? "Code copied" : "Copy code"}
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>

      <SyntaxHighlighter
        {...props}
        style={vscDarkPlus}
        language={language}
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
          padding: "3rem 1.5rem 1.5rem",
          margin: "0",
        }}
        className="custom-scrollbar"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
