import { Metadata } from "next";
import { ResourcesGrid } from "@/components/posts/resources-grid";
import { getAllPosts, getAllCategories } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Resources - CoderCodes",
  description: "Browse all KTU BTech CS lab programs, simplified for clarity and performance.",
};

export default async function PostsPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main className="relative min-h-screen pt-24 selection:bg-cyan-500/30 sm:pt-32">
      {/* Global Background Effects */}
      <div className="fixed inset-0 -z-50 bg-black" />
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/80 via-black to-black" />
      <div className="fixed top-0 right-0 -z-30 h-[800px] w-[800px] rounded-full bg-cyan-500/15 opacity-40 blur-[120px]" />
      <div className="fixed bottom-0 left-0 -z-30 h-[800px] w-[800px] rounded-full bg-violet-600/15 opacity-40 blur-[120px]" />

      <ResourcesGrid posts={posts} categories={categories} />
    </main>
  );
}
