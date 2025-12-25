import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main className="container mx-auto px-4 py-12">
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
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group block rounded-xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-cyan-900/10"
          >
            <h2 className="mb-2 text-xl font-semibold text-zinc-100 transition-colors group-hover:text-cyan-400">
              {post.frontmatter.title}
            </h2>
            <p className="mb-4 line-clamp-2 text-zinc-400">{post.frontmatter.description}</p>
            <div className="flex justify-between text-sm text-zinc-500">
              <span className="text-cyan-500/80">{post.frontmatter.category}</span>
              <time dateTime={post.frontmatter.date}>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
