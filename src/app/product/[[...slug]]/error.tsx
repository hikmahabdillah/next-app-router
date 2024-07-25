"use client";

import { useEffect } from "react";

export default function Error({error, reset}: {error: Error; reset: ()=> void;}){
  useEffect(()=> {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-5 text-center">
      <h2>Something went wrong!</h2>
      <button onClick={(()=> reset())}>Try Again</button>
    </div>
  )
}