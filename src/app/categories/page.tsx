import Link from "next/link";
import { FolderOpen, ArrowRight } from "lucide-react";
import { getAllCategories, getPostsByCategorySlug } from "@/lib/mdx";

export const metadata = {
  title: "Categories - CoderCodes",
  description: "Browse all topics and categories of lab programs.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <main className="relative min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-b border-white/5 pb-8">
          <h1 className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent">
            Categories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Browse programs by topic. Select a category to see all related resources.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const count = getPostsByCategorySlug(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-cyan-900/10"
              >
                <div>
                  <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-3 text-cyan-400 ring-1 ring-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
                    <FolderOpen className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    {count} {count === 1 ? "program" : "programs"} available
                  </p>
                </div>

                <div className="mt-8 flex items-center text-sm font-medium text-zinc-500 transition-colors group-hover:text-cyan-400">
                  View Category <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
