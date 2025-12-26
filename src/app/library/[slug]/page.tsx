import { notFound } from "next/navigation";
import { ProgramHeader } from "@/components/library/program-header";
import { getPostSlugs } from "@/lib/mdx";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((slug) => ({
    slug,
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
      <article className="relative min-h-screen pt-24 selection:bg-cyan-500/30 sm:pt-32">
        {/* Global Background Effects */}
        <div className="fixed inset-0 -z-50 bg-black" />
        <div className="fixed inset-0 -z-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/80 via-black to-black" />
        <div className="fixed top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 opacity-30 blur-[100px]" />

        <div className="container mx-auto max-w-3xl px-6 pb-20">
          <ProgramHeader title={frontmatter.title} category={frontmatter.category} date={frontmatter.date} />

          <div className="prose prose-invert prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-p:leading-relaxed prose-p:text-zinc-300 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300 prose-strong:text-white prose-code:rounded prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:text-cyan-200 prose-hr:border-white/10 prose-pre:bg-zinc-900/50 prose-pre:backdrop-blur-sm prose-pre:border prose-pre:border-white/10 prose-pre:p-0 prose-pre:rounded-2xl prose-pre:shadow-2xl max-w-none">
            <PostContent />
          </div>
        </div>
      </article>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
