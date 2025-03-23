"use client"

import { signOut } from "next-auth/react"

const LogOutButton = () => {
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
export { LogOutButton }


