import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/posts/post-card";
import { getAllCategories, getPostsByCategorySlug } from "@/lib/mdx";

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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const posts = getPostsByCategorySlug(slug);

  if (posts.length === 0) {
    notFound();
  }

  const categoryTitle = posts[0].frontmatter.category;

  return (
    <main className="container mx-auto px-4 pt-32 pb-20">
      <div className="mb-12">
        <Link
          href="/categories"
          className="mb-4 inline-flex items-center text-sm text-zinc-400 transition-colors hover:text-cyan-400"
        >
          <span className="mr-2">←</span> Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">{categoryTitle}</h1>
        <p className="mt-2 text-gray-500">{posts.length} posts</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.slug} className="h-full">
            <PostCard post={post} hideCategory={true} />
          </div>
        ))}
      </div>
    </main>
  );
}
