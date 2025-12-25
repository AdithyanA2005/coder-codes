"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { Logo } from "@/components/logo";

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-3 z-50 mx-auto w-[95%] max-w-4xl sm:top-6">
      <div className="group relative flex items-center justify-between rounded-full border border-white/5 bg-zinc-900/60 px-4 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all hover:bg-zinc-900/80 hover:shadow-[0_8px_40px_rgba(6,182,212,0.1)] hover:ring-1 hover:ring-cyan-500/20 sm:px-6 sm:py-3">
        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="flex items-center gap-1">
          <Logo />
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/posts">Library</NavLink>

          <div className="mx-1 h-4 w-px bg-white/10 sm:mx-2" />

          <Link
            href="https://github.com/AdithyanA2005/CoderCodes"
            target="_blank"
            aria-label="GitHub"
            className="flex items-center gap-2 rounded-full bg-white/5 p-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white sm:px-3 sm:py-1.5"
          >
            <Github className="size-4 sm:size-3.5" />
            <span className="hidden sm:inline">Star</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative rounded-full px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white sm:px-4"
    >
      {children}
    </Link>
  );
}
