import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const {data: session, status} : {data: any; status: string;}= useSession();
  console.log(session)

  return(
    <nav className="flex items-center justify-between px-6 py-4">
      <div>
      <h1>Navbar</h1>
      <ul className="mt-3 flex gap-5 items-center text-sm cursor-pointer">
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
      </div>
      {status === 'authenticated' && session?.user?.username && <p>{session.user.username}</p>}
      {status === 'authenticated' ? (
        <button onClick={() => signOut()} className="px-3 py-2 rounded-md bg-blue-500 text-slate-50">Logout</button>
      ) : (
        <button onClick={() => signIn()} className="px-3 py-2 rounded-md bg-blue-500 text-slate-50">Login</button>
      )}
    </nav>
  );
}