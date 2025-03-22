"use server"

import CarouselDisplay from "@/components/CarouselDisplay";
import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";

import Link from "next/link";
import LogOutButton from "@/components/LogOutButton";

export default async function Home() {

  const session = await auth();
  // console.log(session)
  // if(!session) redirect("/sign-up/");
  
  return (
   <div>
      <Navbar />
      {
        session? (
          <div>
          <div> Signed in as: {session.user?.name}</div>
          <LogOutButton />
          </div>
        ): (
          <Link className="font-bold text-base" href="/sign-in/">Sign in</Link>
        )
      }
      <div className="flex flex-col">
        <div className="btn w-[30%] mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2">
          <Link className="font-bold text-base" href="/volunteers/">Find your doctor</Link>
        </div>
        <div className="btn w-[30%] mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2">
          <Link className="font-bold text-base" href="/volunteers/register/">Register as volunteer</Link>
        </div>
        <CarouselDisplay />
      </div>
   </div>
  );
}
