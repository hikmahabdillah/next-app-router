import Link from "next/link";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <>
    <h1>Title</h1>
    {children}
    </>
  )
}