"use server"

import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

import Link from "next/link";
import LogOutButton from "@/components/LogOutButton";
import Footer from "@/components/Footer";

export default async function AdminPage() {
  const session = await auth();

  if(!session) redirect('/');
  
  return (
   <div>
      <Navbar />
      {
        session? (
          <div className="flex flex-row-reverse mt-5">
            <LogOutButton />
            <div className="text-lg font-extrabold text-[#48752C] mr-5"> Welcome {session.user?.name}!</div>
          </div>
        ): (
          <div className="flex flex-row-reverse mt-5 mr-10">
            <Link className="underline text-base font-bold text-[#48752C]" href="/sign-in/">Log in</Link>
          </div>
        )
      }
      <div className="text-base font-bold text-[#48752C] mt-5">
        <p>As an admin, you have more permissions than other users.</p>
        <br/>
        <p className="underline">You are able to:</p>
        <br />
        <div className="flex flex-row">
          <div className=" w-[30%] ml-auto mr-auto">
            <p>1. View all volunteers.</p>
            <p>2. Delete volunteer.</p>
            <p>3. Publish volunteer's profile.</p>
          </div>
          <div className="w-[30%] ml-auto mr-auto">
            <p>1. View all users.</p>
            <p>2. Delete user.</p>
            <p>3. Make user an admin.</p>
          </div>
        </div>

      </div>
      <div className="flex flex-row mb-44 mt-14">
        <div className="w-[30%] h-14 text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md shadow-xl">
          <Link className="font-bold text-lg" href="/admin/volunteers/">View volunteers</Link>
        </div>
        <div className="w-[30%] h-14 text-center mt-5 ml-auto mr-auto bg-[#F1E6D0] text-[#48752C] border-[#48752C] border-2 rounded-md shadow-xl">
          <Link className="font-bold text-lg" href="/admin/users/">View users</Link>
        </div>
      </div>
      <div>
        
      </div>
      <Footer />
   </div>
  );
}
