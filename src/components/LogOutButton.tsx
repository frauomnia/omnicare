"use client"

import * as React from "react";
import { signOut } from "next-auth/react"

export default function LogOutButton() {
    const handleLogout = async () => {
        await signOut();
    }
    return (
        <div>
            <button onClick={handleLogout} className="underline text-base font-bold text-[#48752C]" >
                Log out
            </button>
        </div>
    )
}


