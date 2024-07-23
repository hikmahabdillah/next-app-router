import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <>
    <nav className="fixed right-0 top-14 z-10 h-screen w-60 bg-gray-800">
      <ul className="flex flex-col gap-5 items-center text-sm cursor-pointer p-5">
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
    {children}
    </>
  )
}