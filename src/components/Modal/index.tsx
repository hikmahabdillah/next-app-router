"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef } from "react";

export default function Modal({children}: {children: React.ReactNode}){
  const overlay = useRef(null);
  const router = useRouter();

  const closeModal: MouseEventHandler = (e) => {
    // if click on overlay
    if(e.target === overlay.current){
      router.back();
    }
  }

  return (
    <div ref={overlay} className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 flex items-center justify-center" onClick={closeModal}>
      <div className="p-6 bg-white rounded-lg">
        {children}
      </div>
    </div>
  )
}