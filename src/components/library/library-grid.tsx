import Link from "next/link";
import { ArrowRightIcon, Sparkles } from "lucide-react";
import { ProgramCard } from "./program-card";

export function ResourcesGrid({ posts }: { posts: any[] }) {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20" id="resources">
      {/* Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.slug}>
            <ProgramCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
