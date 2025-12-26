import { Metadata } from "next";

export function constructMetadata({
  title = "CoderCodes - KTU CS Lab Programs",
  description = "A comprehensive collection of KTU BTech CS lab programs, simplified for clarity and performance.",
  noIndex = false,
  type = "website",
}: {
  title?: string;
  description?: string;
  noIndex?: boolean;
  type?: "website" | "article";
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      images: [{ url: "/social-card.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/social-card.jpg"],
      creator: "@codercodes",
    },
    icons: {
      icon: "/icon.png",
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png",
    },
    metadataBase: new URL("https://codercodes.vercel.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
