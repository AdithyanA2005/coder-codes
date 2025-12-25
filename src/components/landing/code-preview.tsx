"use client";

export function CodePreview() {
  return (
    <div className="relative mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
      <div className="relative rounded-xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-sm">
        {/* Mac-style header */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
          <div className="size-3 rounded-full bg-red-500/20" />
          <div className="size-3 rounded-full bg-yellow-500/20" />
          <div className="size-3 rounded-full bg-green-500/20" />
          <div className="ml-2 text-xs font-medium text-zinc-500">main.c</div>
        </div>

        {/* Code Content */}
        <div className="overflow-hidden p-6 font-mono text-sm leading-relaxed">
          <div className="text-zinc-400">
            #include <span className="text-orange-400">&lt;stdio.h&gt;</span>
          </div>
          <div className="h-4" />
          <div className="text-purple-400">
            int <span className="text-blue-400">main</span>() {"{"}
          </div>
          <div className="pl-4 text-zinc-300">
            <span className="text-zinc-500">// Simplicity is key</span>
          </div>
          <div className="pl-4 text-zinc-300">
            printf(<span className="text-green-400">"Hello, CoderCodes!\n"</span>);
          </div>
          <div className="pl-4 text-zinc-300">
            return <span className="text-orange-400">0</span>;
          </div>
          <div className="text-purple-400">{"}"}</div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500/5 via-purple-500/5 to-transparent" />
      </div>
    </div>
  );
}
