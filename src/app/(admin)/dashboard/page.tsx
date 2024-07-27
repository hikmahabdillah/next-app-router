"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage(){
  const {data: session, status} : {data: any; status: string;}= useSession();
  const router = useRouter();
  useEffect(()=> {
    if(status === "unauthenticated" ||  (session?.user && session?.user.role !== "admin")){
      router.push('/login');
    }
  },[router, status, session])

  return (
    <div className="mb-5 w-full h-96 bg-gray-300 rounded-xl flex justify-center items-center">
      <h1>Dashboard</h1>
    </div>
    )
}