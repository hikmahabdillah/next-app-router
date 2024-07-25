"use client";

export default function AdminProductPage() {
  const revalidate = async () => {
    await fetch('http://localhost:3000/api/revalidate', {method: 'POST'});
  }
  return (
    <div>
      <button className="m-5 bg-slate-50 px-3 py-2 rounded-lg text-neutral-800" onClick={() => revalidate()}>Revalidate</button>
    </div>
  )
}