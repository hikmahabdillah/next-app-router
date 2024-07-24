import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return(
    <nav className="flex items-center justify-between px-6 py-4">
      <h1>Navbar</h1>
      <ul className="flex gap-5 items-center text-sm cursor-pointer">
        <Link href="/">
        <li className={`${pathname === '/' ? "text-blue-600" : "text-white"}`}>Home</li>
        </Link>
        <Link href="/about">
        <li className={`${pathname === '/about' ? "text-blue-600" : "text-white"}`}>About</li>
        </Link>
        <Link href="/about/profile">
        <li className={`${pathname === '/about/profile' ? "text-blue-600" : "text-white"}`}>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}