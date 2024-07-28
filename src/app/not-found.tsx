import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <h3 className="text-xl font-semibold">Not Found</h3>
      <p>Could not find requested resource</p>
      <Link className="px-3 py-2 rounded bg-slate-50 text-neutral-800" href="/">Return Home</Link>
    </div>
  )
}