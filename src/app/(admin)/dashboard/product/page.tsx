"use client";
import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch('http://localhost:3000/api/revalidate?tag=products&secret=195044', {method: 'POST'});

    console.log(res);
    if(!res.ok){
      setStatus("Revalidate Failed");
    }else{
      const responseStatus = await res.json();
      if(responseStatus.revalidate){
        setStatus("Revalidate Success");
      }
    }
  }
  return (
    <div>
      <h1>{status}</h1>
      <button className="m-5 bg-slate-50 px-3 py-2 rounded-lg text-neutral-800" onClick={() => revalidate()}>Revalidate</button>
    </div>
  )
}