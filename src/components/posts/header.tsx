"use client";

import * as motion from "motion/react-client";

export function PostsHeader() {
  return (
    <div className="mx-auto mt-4 mb-8 max-w-3xl text-center sm:mt-8 sm:mb-16">
      <div className="mb-4 flex justify-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 backdrop-blur-md">
          Updated for 2024
        </span>
      </div>
      <h1 className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
        Explore the Library
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
        A curated collection of optimized KTU BTech CS lab programs. <br className="hidden sm:inline" />
        Search, filter, and copy code instantly.
      </p>
    </div>
  );
}
