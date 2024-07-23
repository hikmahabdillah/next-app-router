import Link from "next/link";

export default function Navbar() {
  return(
    <nav className="flex items-center justify-between px-6 py-4">
      <h1>Navbar</h1>
      <ul className="flex gap-5 items-center text-sm cursor-pointer">
        <Link href="/">
        <li>Home</li>
        </Link>
        <Link href="/about">
        <li>About</li>
        </Link>
        <Link href="/about/profile">
        <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}