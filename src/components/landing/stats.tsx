"use client";

import { CheckCircle, Code2, Users } from "lucide-react";

const stats = [
  { label: "Lab Programs", value: "50+", icon: Code2 },
  { label: "Verified Output", value: "100%", icon: CheckCircle },
  { label: "Students Helped", value: "200+", icon: Users },
];

export function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-white/5 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dt className="text-base leading-7 text-zinc-400">{stat.label}</dt>
              <dd className="order-first flex items-center justify-center gap-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <stat.icon className="size-8 text-cyan-400" />
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
