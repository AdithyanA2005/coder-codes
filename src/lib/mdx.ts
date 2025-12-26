import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export type Post = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    category: string;
    date: string;
  };
  content: string;
};

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as Post["frontmatter"],
    content,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();

  // Return posts sorted by date in descending order
  return slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export function getAllCategories() {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.frontmatter.category).filter(Boolean));

  return Array.from(categories)
    .map((title) => ({
      title,
      slug: slugify(title),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getPostsByCategorySlug(slug: string): Post[] {
  const posts = getAllPosts();
  return posts.filter((post) => slugify(post.frontmatter.category) === slug);
}
