"use server"

import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";

import Link from "next/link";
import LogOutButton from "@/components/LogOutButton";
import Footer from "@/components/Footer";

export default async function AdminPage() {
  const session = await auth();
  
  return (
   <div>
      <Navbar />
      {
        session? (
          <div className="flex flex-row-reverse">
            <LogOutButton />
            <div className="text-lg font-extrabold text-[#48752C] mr-5"> Welcome {session.user?.name}!</div>
          </div>
        ): (
          <Link className="underline text-base font-bold text-[#48752C]" href="/sign-in/">Log in</Link>
        )
      }
      <div className="flex flex-col">
        <div className="w-[30%] text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md">
          <Link className="font-bold text-base" href="/admin/volunteers/">View all volunteers</Link>
        </div>
        <div className="w-[30%] text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md">
          <Link className="font-bold text-base" href="/admin/users/">View all users</Link>
        </div>
      </div>
      <div>
        
      </div>
      <Footer />
   </div>
  );
}
