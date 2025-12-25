"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import * as motion from "motion/react-client";

interface Category {
  title: string;
  slug: string;
}

export function CategoryBar({ categories }: { categories: Category[] }) {
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
    <div className="mb-8 flex justify-center sm:mb-12">
      <div
        ref={scrollContainerRef}
        className={`scrollbar-hide -mx-6 flex w-full max-w-4xl overflow-x-auto px-6 pb-4 md:mx-auto md:justify-center md:px-0 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
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
    </div>
  );
}
