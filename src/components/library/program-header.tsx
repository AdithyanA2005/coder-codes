import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

interface ProgramHeaderProps {
  title: string;
  categoryName: string;
  categorySlug: string;
  date: string;
  description?: string;
}

export function ProgramHeader({ title, categoryName, categorySlug, date, description }: ProgramHeaderProps) {
  return (
    <div className="mb-6 text-center">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
            <Calendar className="size-3" />
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
          <Link
            href={`/categories/${categorySlug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 transition-colors hover:bg-cyan-500/20"
          >
            <Tag className="size-3" />
            {categoryName}
          </Link>
        </div>

        <h1 className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description && <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">{description}</p>}
      </div>
    </div>
  );
}
