import Link from "next/link";
import { FolderOpen, ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: {
    title: string;
    slug: string;
  };
  count: number;
}

export function CategoryCard({ category, count }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-cyan-900/10"
    >
      <div>
        <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400 ring-1 ring-cyan-500/20 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
          <FolderOpen className="h-5 w-5" />
        </div>
        <h2 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-400">
          {category.title}
        </h2>
        <p className="mt-2 text-sm text-zinc-400 transition-colors group-hover:text-zinc-300">
          {count} {count === 1 ? "program" : "programs"} available
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-xs font-medium text-zinc-400 transition-colors group-hover:text-cyan-400">
          View Category
        </span>
        <ArrowRight className="h-4 w-4 text-zinc-400 transition-all group-hover:translate-x-1 group-hover:text-cyan-400" />
      </div>
    </Link>
  );
}
