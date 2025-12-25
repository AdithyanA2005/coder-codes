export function CategorySlugHeader({ title, count }: { title: string; count: number }) {
  return (
    <div className="mx-auto mt-4 mb-8 max-w-3xl text-center sm:mt-8 sm:mb-16">
      <div className="mb-4 flex justify-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 backdrop-blur-md">
          {count} Programs
        </span>
      </div>
      <h1 className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
        Browse all optimized solutions available for this topic.
      </p>
    </div>
  );
}
