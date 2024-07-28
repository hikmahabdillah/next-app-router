"use client"
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const {data: session} : {data: any;}= useSession();

  return (
    <div className="ml-5">
      <h1>Profile Page</h1>
      {session?.user?.username && <p>Username : {session.user.username}</p>}
      {session?.user?.email && <p>Email : {session.user.email}</p>}
      {session?.user?.role && <p>Role : {session.user.role}</p>}
    </div>
  )
}