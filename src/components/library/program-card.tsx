import Link from "next/link";
import { ArrowRightIcon, Sparkles } from "lucide-react";
import type { Post } from "@/lib/mdx";

interface ProgramCardProps {
  post: Post;
  hideCategory?: boolean;
}

export function ProgramCard({ post, hideCategory = false }: ProgramCardProps) {
  return (
    <Link
      href={`/library/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-cyan-900/10"
    >
      <div className="relative flex flex-1 flex-col">
        {!hideCategory && (
          <div className="mb-4 flex items-start justify-between gap-4">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium tracking-wide text-cyan-200 uppercase">
              <Sparkles className="size-2.5" />
              {post.frontmatter.category}
            </span>
          </div>
        )}

        <h2 className="mb-2 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-400">
          {post.frontmatter.title}
        </h2>

        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
          {post.frontmatter.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
        <time
          dateTime={post.frontmatter.date}
          className="text-xs font-medium tracking-wider text-zinc-400 transition-colors group-hover:text-zinc-400"
        >
          {new Date(post.frontmatter.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <ArrowRightIcon className="size-4 text-zinc-400 transition-all group-hover:translate-x-1 group-hover:text-cyan-400" />
      </div>
    </Link>
  );
}
