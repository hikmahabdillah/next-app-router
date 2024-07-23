"use client";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <div>
      <p>template click count : {state}</p>
      <button onClick={() => setState(state + 1)}>Click</button>
      {children}
    </div>
  );
}
