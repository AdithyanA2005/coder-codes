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
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-cyan-900/10"
    >
      <div>
        <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-3 text-cyan-400 ring-1 ring-cyan-500/20 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
          <FolderOpen className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400">{category.title}</h2>
        <p className="mt-2 text-sm text-zinc-400">
          {count} {count === 1 ? "program" : "programs"} available
        </p>
      </div>

      <div className="mt-8 flex items-center text-sm font-medium text-zinc-500 transition-colors group-hover:text-cyan-400">
        View Category <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
