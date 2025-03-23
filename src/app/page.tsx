"use server"

import CarouselDisplay from "@/components/CarouselDisplay";
import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { LogOutButton } from "@/components/LogOutButton";
import prisma from "@/lib/db/prisma";
import Footer from "@/components/Footer";

export default async function Home() {

  const session = await auth();
  
  const userDB = await prisma.user.findFirst({
    where: {
      email: session?.user?.email
    },
  })
  
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
      { 
          session && userDB?.role === 'admin'? (
            <div className="w-[30%] text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md">
              <Link className="" href="/admin/">Admin view</Link> 
            </div>
          ) : (
            <div></div>
          )
          }
        {
        session? (
          <div className="w-[30%] text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md">
          <Link className="font-bold text-base" href="/volunteersList/">Find your doctor</Link>
        </div>
        ): (
          <div></div>
          )
      }
        <div className="w-[30%] text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md">
          <Link className="font-bold text-base" href="/register/">Register as volunteer</Link>
        </div>
        <CarouselDisplay />
      </div>
      <Footer />
   </div>
  );
}
