"use client"

import CarouselDisplay from "@/components/CarouselDisplay";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  
  return (
   <div>
      <Navbar />
      <div className="flex flex-col">
      <div className="btn w-[30%] ml-auto mr-auto">
        <Link className="ml-5 mt-5" href="/volunteers/">Find your doctor</Link>
      </div>
      <CarouselDisplay />
      </div>
   </div>
  );
}
