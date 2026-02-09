import { MetadataRoute } from "next";
import { getAllPosts, getAllCategories } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codercodes.vercel.app";
  const posts = getAllPosts();
  const categories = getAllCategories();

  const staticRoutes = ["", "/library", "/categories"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const postRoutes = posts.map((post) => {
    const date = new Date(post.frontmatter.date);
    const isValidDate = !isNaN(date.getTime());
    return {
      url: `${baseUrl}/library/${post.slug}`,
      lastModified: isValidDate ? date : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
