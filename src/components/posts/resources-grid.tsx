"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, Sparkles, Search } from "lucide-react";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
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
      ease: "easeOut" as const,
    },
  },
};

export function ResourcesGrid({ posts, categories }: { posts: any[]; categories: any[] }) {
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
    <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20" id="resources">
      {/* Centered Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto mt-4 mb-8 max-w-3xl text-center sm:mt-8 sm:mb-16"
      >
        <div className="mb-4 flex justify-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 backdrop-blur-md">
            Updated for 2024
          </span>
        </div>
        <h1 className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
          Explore the Library
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
          A curated collection of optimized KTU BTech CS lab programs. <br className="hidden sm:inline" />
          Search, filter, and copy code instantly.
        </p>
      </motion.div>

      {/* Categories Scroller - Centered */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 flex justify-center sm:mb-12"
      >
        <div
          ref={scrollContainerRef}
          className={`scrollbar-hide -mx-6 flex w-full max-w-4xl overflow-x-auto px-6 pb-4 md:mx-auto md:justify-center md:px-0 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex min-w-max gap-2 sm:gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                onClick={(e) => {
                  if (isDragging) e.preventDefault();
                }}
                draggable={false}
                className="group relative flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-md transition-all select-none hover:border-cyan-500/30 hover:bg-cyan-950/20 hover:text-cyan-200 sm:px-5 sm:py-2.5"
              >
                <span className="relative z-10">{category.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Posts Grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={itemVariants}>
            <Link
              href={`/posts/${post.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-cyan-900/10"
            >
              <div className="relative flex flex-1 flex-col">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-cyan-200 uppercase">
                    <Sparkles className="size-2.5" />
                    {post.frontmatter.category}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-400">
                  {post.frontmatter.title}
                </h3>

                <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
                  {post.frontmatter.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <time
                  dateTime={post.frontmatter.date}
                  className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase group-hover:text-zinc-400"
                >
                  {new Date(post.frontmatter.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <ArrowRightIcon className="size-4 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
