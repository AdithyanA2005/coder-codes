import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function Page() {
  const posts = getAllPosts();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Coder Codes</h1>
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
