import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  const navigation = {
    explore: [
      { name: "Home", href: "/" },
      { name: "Library", href: "/posts" },
      { name: "All Categories", href: "/#categories" },
    ],
    connect: [
      { name: "GitHub", href: "https://github.com/AdithyanA2005/", icon: Github },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/iadithyana/", icon: Linkedin },
      { name: "Twitter", href: "https://x.com/iadithyana/", icon: Twitter },
      { name: "Email", href: "mailto:deepaadithyan56@gmail.com", icon: Mail },
    ],
  };

  return (
    <footer className="relative z-10 border-t border-white/5 bg-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
              A collection of optimized lab programs for KTU BTech CS students. Open source and built for the community.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://adithyana.vercel.app"
                target="_blank"
                className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-cyan-500/20 hover:bg-cyan-500/10 hover:text-cyan-200"
              >
                <span>Built by Adithyan A</span>
                <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:gap-12">
            <div>
              <p className="text-sm leading-6 font-semibold text-white">Explore</p>
              <ul className="mt-6 space-y-4">
                {navigation.explore.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-zinc-400 transition-colors hover:text-cyan-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm leading-6 font-semibold text-white">Connect</p>
              <ul className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target="_blank"
                      className="group flex items-center gap-2 text-sm leading-6 text-zinc-400 transition-colors hover:text-white"
                    >
                      <item.icon className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-white" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-xs leading-5 text-zinc-500">&copy; {year} CoderCodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
