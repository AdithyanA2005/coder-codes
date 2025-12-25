"use client";

import Link from "next/link";
import * as motion from "motion/react-client";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 pt-14 sm:pt-20 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
            Code, Simplified.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            A comprehensive collection of KTU BTech CS lab programs. <br className="hidden sm:inline" />
            Designed for clarity, performance, and ease of use.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="#posts"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
