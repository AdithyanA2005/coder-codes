import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";

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

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    };
  } catch (error) {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">{post.frontmatter.title}</h1>
        <div className="space-x-4 text-gray-500">
          <time dateTime={post.frontmatter.date}>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
          <span>•</span>
          <span>{post.frontmatter.category}</span>
        </div>
      </div>

      <MDXContent source={post.content} />
    </article>
  );
}
