"use client";

import TextareaWithText from "@/components/text-aa";
import { useParams } from "next/navigation";

export default function Home() {
  const name = useParams() || "";
  return (
    <>
    <nav className=" py-5 flex justify-center text-3xl bg-violet-900 text-white">Agent Name</nav>
    <TextareaWithText/>
    </>
    
   
  );
}
