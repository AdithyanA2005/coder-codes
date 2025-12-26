import { Cpu, Eye, Zap, BookOpen, Terminal, Share2 } from "lucide-react";

const features = [
  {
    name: "Optimized Logic",
    description: "Algorithms simplified to their core. Easy to understand, easy to remember for exams.",
    icon: Cpu,
  },
  {
    name: "Clean Syntax",
    description: "Code formatted with standard conventions (K&R/Allman) for maximum readability.",
    icon: Eye,
  },
  {
    name: "Verified Outputs",
    description: "Every program includes a screenshot of the actual terminal output. No guessing.",
    icon: Terminal,
  },
  {
    name: "Instant Search",
    description: "Find any program instantly by name, category, or keyword.",
    icon: Zap,
  },
  {
    name: "Exam Focus",
    description: "Curated specifically for the KTU BTech Computer Science syllabus.",
    icon: BookOpen,
  },
  {
    name: "Open Source",
    description: "Completely free and open source. Contribute or fork on GitHub.",
    icon: Share2,
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base leading-7 font-semibold text-cyan-400">Why CoderCodes?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to ace the lab.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Stop struggling with complex, unreadable code snippets from random websites. We provide clean, working
            solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-white">
                  <feature.icon className="h-5 w-5 flex-none text-cyan-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
