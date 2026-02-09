import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="focus-visible:focus-ring-subtle focus-visible:rounded focus-visible:px-1 focus-visible:py-0.5"
    >
      <div className="relative bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text bg-no-repeat text-transparent">
        <h1 className="text-lg font-extrabold tracking-tight sm:text-2xl">CoderCodes</h1>
      </div>
    </Link>
  );
}
