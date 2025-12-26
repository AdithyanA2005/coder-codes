import { Hero } from "@/components/home/hero";
import { CodePreview } from "@/components/landing/code-preview";
import { CTA } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Stats } from "@/components/landing/stats";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "CoderCodes - KTU CS Lab Programs",
  description: "A comprehensive collection of KTU BTech CS lab programs, simplified for clarity and performance.",
});

export default function Page() {
  return (
    <main className="relative min-h-screen selection:bg-cyan-500/30">
      {/* Global Background Effects */}
      <div className="fixed inset-0 -z-50 bg-black" />
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/80 via-black to-black" />
      <div className="fixed top-0 right-0 -z-30 h-[800px] w-[800px] rounded-full bg-cyan-500/15 opacity-40 blur-[120px]" />
      <div className="fixed bottom-0 left-0 -z-30 h-[800px] w-[800px] rounded-full bg-violet-600/15 opacity-40 blur-[120px]" />

      {/* Grid Texture - Extended for landing page */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[100vh] bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center" />

      <Hero />
      <CodePreview />
      <Stats />
      <Features />
      <CTA />
    </main>
  );
}
