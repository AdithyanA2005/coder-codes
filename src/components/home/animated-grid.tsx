"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon, Sparkles } from "lucide-react";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2, // Wait for Hero to pop in first
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export function AnimatedGrid({ posts, categories }: { posts: any[]; categories: any[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 pb-40" id="posts">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Latest <span className="text-cyan-400">Resources</span>
        </h2>
        <p className="mt-4 text-zinc-400">Filter by category or browse the latest lab programs below.</p>
      </motion.div>

      {/* Categories Scroller */}
      <motion.div
        ref={scrollContainerRef}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`scrollbar-hide mb-16 overflow-x-auto pb-4 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex min-w-max justify-center gap-3 px-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              onClick={(e) => {
                // Prevent click if we were dragging
                if (isDragging) e.preventDefault();
              }}
              draggable={false} // Prevent native drag
              className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all select-none hover:border-cyan-500/50 hover:bg-cyan-950/30 hover:text-cyan-200 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] active:scale-95"
            >
              <span className="relative z-10">{category.title}</span>
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Posts Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={itemVariants}>
            <Link
              href={`/posts/${post.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-900/20"
            >
              {/* Internal Glow Blob */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all group-hover:bg-cyan-500/20" />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300">
                    <Sparkles className="size-3" />
                    {post.frontmatter.category}
                  </span>
                  <time dateTime={post.frontmatter.date} className="text-xs font-medium text-zinc-500">
                    {new Date(post.frontmatter.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h3 className="mt-6 text-2xl leading-tight font-bold text-white transition-colors group-hover:text-cyan-300">
                  {post.frontmatter.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
                  {post.frontmatter.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-sm font-semibold text-zinc-400 transition-colors group-hover:text-white">
                  Read Program
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all group-hover:rotate-[-45deg] group-hover:bg-cyan-500 group-hover:text-black">
                  <ArrowRightIcon className="size-5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
