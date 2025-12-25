import { Logo } from "@/components/logo";

export function Navbar() {
  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="max-w-main mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
      </div>
    </header>
  );
}
