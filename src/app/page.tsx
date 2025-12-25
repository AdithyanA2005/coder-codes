import { Metadata } from "next";
import { Hero } from "@/components/home/hero";

export const metadata: Metadata = {
  title: "CoderCodes - KTU CS Lab Programs",
  description: "A comprehensive collection of KTU BTech CS lab programs, simplified for clarity and performance.",
};

export default function Page() {
  return (
    <main className="relative min-h-screen selection:bg-cyan-500/30">
      {/* Global Background Effects - Visible across Hero and Grid */}
      <div className="fixed inset-0 -z-50 bg-black" />
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/80 via-black to-black" />
      <div className="fixed top-0 right-0 -z-30 h-[800px] w-[800px] rounded-full bg-cyan-500/15 opacity-40 blur-[120px]" />
      <div className="fixed bottom-0 left-0 -z-30 h-[800px] w-[800px] rounded-full bg-violet-600/15 opacity-40 blur-[120px]" />

      {/* Helper grid for texture */}
      <div className="fixed inset-0 -z-20 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center" />

      <Hero />
    </main>
  );
}
