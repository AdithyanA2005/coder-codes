import type { Metadata } from "next";
import { CategoryCard } from "@/components/categories/category-card";
import { CategoryHeader } from "@/components/categories/category-header";
import { getAllCategories, getPostsByCategorySlug } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Categories - CoderCodes",
  description: "Browse all topics and categories of lab programs available on CoderCodes.",
  openGraph: {
    title: "Categories - CoderCodes",
    description: "Browse all topics and categories of lab programs available on CoderCodes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Categories - CoderCodes",
    description: "Browse all topics and categories of lab programs available on CoderCodes.",
  },
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <main className="relative min-h-screen pt-24 selection:bg-cyan-500/30 sm:pt-32">
      {/* Global Background Effects */}
      <div className="fixed inset-0 -z-50 bg-black" />
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/80 via-black to-black" />
      <div className="fixed top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 opacity-30 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <CategoryHeader count={categories.length} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const count = getPostsByCategorySlug(category.slug).length;
            return <CategoryCard key={category.slug} category={category} count={count} />;
          })}
        </div>
      </div>
    </main>
  );
}
