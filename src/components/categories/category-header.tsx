export function CategoryHeader({ count }: { count: number }) {
  return (
    <div className="mx-auto mt-4 mb-8 max-w-3xl text-center sm:mt-8 sm:mb-16">
      <div className="mb-4 flex justify-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 backdrop-blur-md">
          {count} Topics Available
        </span>
      </div>
      <h1 className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
        Browse by Category
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">
        Find the exact program you need by exploring our curated topics. <br className="hidden sm:inline" />
        From sorting algorithms to system calls.
      </p>
    </div>
  );
}
