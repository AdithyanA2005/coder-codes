import { notFound } from "next/navigation";
import { CategorySlugHeader } from "@/components/categories/category-slug-header";
import { ProgramCard } from "@/components/library/program-card";
import { getAllCategories, getPostsByCategorySlug } from "@/lib/mdx";
import { constructMetadata } from "@/lib/utils";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const posts = getPostsByCategorySlug(slug);

  if (posts.length === 0) {
    return notFound();
  }

  const categoryName = posts[0].frontmatter.category;
  const title = `${categoryName} Examples - CoderCodes`;
  const description = `Explore ${posts.length} programming examples and lab solutions for ${categoryName}.`;

  return constructMetadata({
    title,
    description,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const posts = getPostsByCategorySlug(slug);

  if (posts.length === 0) {
    notFound();
  }

  const categoryTitle = posts[0].frontmatter.category;

  return (
    <main className="relative min-h-screen pt-24 selection:bg-cyan-500/30 sm:pt-32">
      {/* Global Background Effects */}
      <div className="fixed inset-0 -z-50 bg-black" />
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/80 via-black to-black" />
      <div className="fixed top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 opacity-30 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <CategorySlugHeader title={categoryTitle} count={posts.length} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="h-full">
              <ProgramCard post={post} hideCategory={true} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
