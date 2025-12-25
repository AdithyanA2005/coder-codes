import { Metadata } from "next";
import { CategoryBar } from "@/components/library/category-bar";
import { ResourcesGrid } from "@/components/library/library-grid";
import { PostsHeader } from "@/components/library/library-header";
import { getAllPosts, getAllCategories } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Library - CoderCodes",
  description: "Browse our collection of KTU BTech CS lab programs.",
};

export default function PostsPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main className="relative min-h-screen pt-24 selection:bg-cyan-500/30 sm:pt-32">
      {/* Global Background Effects */}
      <div className="fixed inset-0 -z-50 bg-black" />
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/80 via-black to-black" />
      <div className="fixed top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 opacity-30 blur-[100px]" />

      <PostsHeader />
      <CategoryBar categories={categories} />
      <ResourcesGrid posts={posts} />
    </main>
  );
}
