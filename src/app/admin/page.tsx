"use server"

import CarouselDisplay from "@/components/CarouselDisplay";
import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";

import Link from "next/link";
import { LogOutButton } from "@/components/LogOutButton";

export default async function AdminPage() {
  const session = await auth();
  
  return (
   <div>
      <Navbar />
      {
        session? (
          <div>
          <div> Signed in as: {session.user?.name}</div>
          <div> You are a: {session.user?.email}</div>
          <LogOutButton />
          </div>
        ): (
          <Link className="font-bold text-base" href="/sign-in/">Sign in</Link>
        )
      }
      <div className="flex flex-col">
        <div className="w-[30%] text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md">
          <Link className="font-bold text-base" href="/admin/volunteers/">View all volunteers</Link>
        </div>
        <div className="w-[30%] text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md">
          <Link className="font-bold text-base" href="/admin/users/">View all users</Link>
        </div>
        <CarouselDisplay />
      </div>
   </div>
  );
}
