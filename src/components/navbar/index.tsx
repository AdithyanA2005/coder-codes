import Link from "next/link";
import { Github } from "lucide-react";
import { Logo } from "@/components/logo";

export function Navbar() {
  return (
    <nav className="group fixed top-6 right-0 left-0 z-50 mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 py-3 shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all hover:bg-black/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      {/* Background gradient hint */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex items-center gap-4">
        <Logo />
      </div>

      <div className="flex items-center gap-6">
        <Link href="/" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
          Home
        </Link>
        <Link href="#posts" className="text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400">
          Resources
        </Link>
        <div className="h-4 w-px bg-white/10" />
        <Link
          href="https://github.com/AdithyanA2005/CoderCodes"
          target="_blank"
          aria-label="GitHub"
          className="flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          <Github className="size-4" />
          <span className="hidden sm:inline">GitHub</span>
        </Link>
      </div>
    </nav>
  );
}
