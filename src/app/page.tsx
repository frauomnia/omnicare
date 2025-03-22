"use client"

import CarouselDisplay from "@/components/CarouselDisplay";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  
  return (
   <div>
      <Navbar />
      <div className="flex flex-col">
      <div className="btn w-[30%] mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2">
        <Link className="font-bold text-base" href="/volunteers/">Find your doctor</Link>
      </div>
      <CarouselDisplay />
      </div>
   </div>
  );
}
