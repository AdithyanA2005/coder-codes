import Link from "next/link";

interface Category {
  title: string;
  slug: string;
}

export function CategoryBar({ categories }: { categories: Category[] }) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="scrollbar-hide flex w-full touch-pan-x flex-nowrap gap-2 overflow-x-auto px-6 pb-4 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
        <Link
          href="/library"
          className="group shrink-0 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20 transition-all sm:px-5 sm:py-2.5"
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group shrink-0 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-400 transition-all hover:border-cyan-500/30 hover:bg-cyan-950/20 hover:text-cyan-200 sm:px-5 sm:py-2.5"
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
