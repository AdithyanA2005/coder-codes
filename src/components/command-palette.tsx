"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { FileTextIcon, FolderIcon, HomeIcon, LibraryIcon } from "lucide-react";
import { useCommandPalette } from "@/hooks/use-command-palette";

type PostItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
};

export function CommandPalette() {
  const router = useRouter();
  const { open, setOpen } = useCommandPalette();
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && posts.length === 0) {
      setLoading(true);
      fetch("/api/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .finally(() => setLoading(false));
    }
  }, [open, posts.length]);

  function navigate(path: string) {
    setOpen(false);
    router.push(path);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

      {/* Dialog */}
      <div className="fixed top-[20%] left-1/2 w-[90%] max-w-xl -translate-x-1/2">
        <Command
          className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/95 shadow-2xl shadow-black/50"
          loop
        >
          <Command.Input
            placeholder="Search posts or navigate..."
            className="w-full border-b border-white/10 bg-transparent px-4 py-4 text-base text-white placeholder:text-zinc-500 focus:outline-none"
            autoFocus
          />

          <Command.List className="custom-scrollbar max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-4 py-8 text-center text-sm text-zinc-500">
              {loading ? "Loading posts..." : "No results found."}
            </Command.Empty>

            {/* Navigation Group */}
            <Command.Group
              heading="Navigation"
              className="[&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-zinc-500 [&_[cmdk-group-heading]]:uppercase"
            >
              <CommandItem onSelect={() => navigate("/")}>
                <HomeIcon className="size-4 text-cyan-400" />
                <span>Home</span>
              </CommandItem>
              <CommandItem onSelect={() => navigate("/library")}>
                <LibraryIcon className="size-4 text-cyan-400" />
                <span>Library</span>
              </CommandItem>
              <CommandItem onSelect={() => navigate("/categories")}>
                <FolderIcon className="size-4 text-cyan-400" />
                <span>Categories</span>
              </CommandItem>
            </Command.Group>

            {/* Posts Group */}
            {posts.length > 0 && (
              <Command.Group
                heading="Posts"
                className="mt-2 [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-zinc-500 [&_[cmdk-group-heading]]:uppercase"
              >
                {posts.map((post) => (
                  <CommandItem key={post.slug} onSelect={() => navigate(`/library/${post.slug}`)}>
                    <FileTextIcon className="size-4 shrink-0 text-violet-400" />
                    <div className="flex min-w-0 flex-col">
                      <span className="truncate">{post.title}</span>
                      <span className="truncate text-xs text-zinc-500">{post.category}</span>
                    </div>
                  </CommandItem>
                ))}
              </Command.Group>
            )}
          </Command.List>

          {/* Footer with keyboard hints */}
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-xs text-zinc-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px]">↑↓</kbd>
                <span>Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px]">↵</kbd>
                <span>Select</span>
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px]">esc</kbd>
              <span>Close</span>
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}

function CommandItem({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition-colors data-[selected=true]:bg-white/5 data-[selected=true]:text-white"
    >
      {children}
    </Command.Item>
  );
}
