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
  const posts: Post[] = [];

  slugs.forEach((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    posts.push({
      slug,
      frontmatter: data as Post["frontmatter"],
      content: "", // Content not needed for listing, saves memory
    });
  });

  return posts.sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
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
  const slugs = getPostSlugs();
  const categories = new Set<string>();

  slugs.forEach((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    if (data.category) categories.add(data.category);
  });

  return Array.from(categories)
    .map((title) => ({
      title,
      slug: slugify(title),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getPostsByCategorySlug(slug: string): Post[] {
  const slugs = getPostSlugs();
  const posts: Post[] = [];

  slugs.forEach((postSlug) => {
    const fullPath = path.join(postsDirectory, `${postSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    if (slugify(data.category) === slug) {
      posts.push({
        slug: postSlug,
        frontmatter: data as Post["frontmatter"],
        content,
      });
    }
  });

  return posts.sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
}
