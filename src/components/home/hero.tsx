"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
            Code, Simplified.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            A comprehensive collection of KTU BTech CS lab programs. <br className="hidden sm:inline" />
            Designed for clarity, performance, and ease of use.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/library"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform hover:scale-105 hover:bg-zinc-100"
            >
              Explore Programs
            </Link>
            <Link
              href="https://github.com/AdithyanA2005/CoderCodes"
              target="_blank"
              className="text-sm leading-6 font-semibold text-white hover:text-zinc-300"
            >
              View on GitHub <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
