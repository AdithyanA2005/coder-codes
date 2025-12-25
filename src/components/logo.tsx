import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="relative bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text bg-no-repeat text-transparent">
        <h1 className="text-2xl font-extrabold tracking-tight">CoderCodes</h1>
      </div>
    </Link>
  );
}
