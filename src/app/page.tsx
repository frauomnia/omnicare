"use server"

import CarouselDisplay from "@/components/CarouselDisplay";
import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import Link from "next/link";
import LogOutButton from "@/components/LogOutButton";
import prisma from "@/lib/db/prisma";
import Footer from "@/components/Footer";

export default async function Home() {

  const session = await auth();
  
  // match email coming from session with db to get user role
  const userDB = await prisma.user.findFirst({
    where: {
      email: session?.user?.email
    },
  })
  
  return (
   <div>
      <Navbar />
      {/* if user logged in */}
      {
        session? (
          <div className="flex flex-row-reverse">
            <LogOutButton />
            <div className="text-lg font-extrabold text-[#48752C] mr-5"> Welcome {session.user?.name}!</div>
          </div>
        ): (
          <div>
          </div>        
        )
      }
      <div className="flex flex-col">
      {/* if user logged in as admin */}
      { 
        session && userDB?.role === 'admin'? (
          <div className="w-[30%] h-12 text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md shadow-xl">
          <Link className="font-bold text-base" href="/admin/">Admin view</Link> 
          </div>
        ) : (
          <div></div>
        )
      }
      {/* if user logged in as normal user */}
      {
        session? (
          <div className="w-[30%] h-12 text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md shadow-xl">
            <Link className="font-bold text-base" href="/volunteersList/">Find your doctor</Link>
        </div>
        ): (
          <div></div>
        )
      }
      <div className="w-[30%] h-12 text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md shadow-xl">
        <Link className="font-bold text-base" href="/register/">Register as volunteer</Link>
      </div>
      {/* if user is not logged in yet */}
      {
        !session? (
          <div className="w-[30%] h-12 text-center mt-5 ml-auto mr-auto text-[#48752C] mb-10">
          <p>OR</p>
            <Link className="underline text-base font-bold text-[#48752C]" href="/sign-in/">Log in</Link>
            <p className="font-bold">To be able to search for a doctor</p>
          </div>
        ): (
          <div></div>
        )
      }
      <CarouselDisplay />
      </div>
      <Footer />
   </div>
  );
}
