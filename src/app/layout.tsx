import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./global.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CoderCodes - KTU CS Lab Programs",
  description:
    "A comprehensive collection of KTU BTech CS lab programs, simplified for clarity and performance. Built by Adithyan A.",
  keywords: ["KTU", "CS", "Lab Programs", "BTech", "Computer Science", "CoderCodes", "Adithyan A"],
  openGraph: {
    title: "CoderCodes - KTU CS Lab Programs",
    description: "Simplified KTU BTech CS lab programs for easy learning.",
    url: "https://codercodes.vercel.app", // Assuming Vercel deployment, update if known
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoderCodes",
    description: "KTU CS Lab Programs, Simplified.",
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
