import Link from "next/link";
import { ArrowRightIcon, Sparkles } from "lucide-react";

export function ResourcesGrid({ posts }: { posts: any[] }) {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20" id="resources">
      {/* Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-cyan-900/10"
            >
              <div className="relative flex flex-1 flex-col">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-cyan-200 uppercase">
                    <Sparkles className="size-2.5" />
                    {post.frontmatter.category}
                  </span>
                </div>

                <h2 className="mb-2 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-400">
                  {post.frontmatter.title}
                </h2>

                <p className="line-clamp-2 text-sm leading-relaxed text-zinc-300 group-hover:text-zinc-300">
                  {post.frontmatter.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <time
                  dateTime={post.frontmatter.date}
                  className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase group-hover:text-zinc-400"
                >
                  {new Date(post.frontmatter.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <ArrowRightIcon className="size-4 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
