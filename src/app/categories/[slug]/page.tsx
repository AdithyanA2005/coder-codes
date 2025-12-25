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
        <Link href="/" className="mb-4 inline-block text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
          ← Back to all posts
        </Link>
        <h1 className="text-4xl font-bold">{categoryTitle}</h1>
        <p className="mt-2 text-gray-500">{posts.length} posts</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="mb-2 text-xl font-semibold">{post.frontmatter.title}</h2>
            <p className="mb-4 line-clamp-2 text-gray-500">{post.frontmatter.description}</p>
            <div className="flex justify-between text-sm text-gray-400">
              <span>{post.frontmatter.category}</span>
              <time dateTime={post.frontmatter.date}>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
