import Link from "next/link";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start coding?
            <br />
            Browse the full library today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Get access to all implemented algorithms, data structures, and system programs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/library"
              className="rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-cyan-500/40"
            >
              Go to Library
            </Link>
            <Link
              href="https://github.com/AdithyanA2005/CoderCodes"
              target="_blank"
              className="text-sm leading-6 font-semibold text-white hover:text-cyan-300"
            >
              Star on GitHub <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
