import { notFound } from "next/navigation";
import { getPostSlugs } from "@/lib/mdx";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  try {
    const { frontmatter } = await import(`@/content/posts/${slug}.mdx`);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch (error) {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  try {
    const { default: PostContent, frontmatter } = await import(`@/content/posts/${slug}.mdx`);

    return (
      <article className="container mx-auto max-w-3xl px-4 pt-32 pb-20">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">{frontmatter.title}</h1>
          <div className="flex items-center justify-center gap-4 text-zinc-400">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span className="text-cyan-400">{frontmatter.category}</span>
          </div>
        </div>

        <div className="prose prose-invert prose-pre:bg-[#1e1e1e] prose-pre:p-0 max-w-none">
          <PostContent />
        </div>
      </article>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
