"use client"

import { signOut } from "next-auth/react"

const LogOutButton = () => {
    const handleLogout = async () => {
        await signOut();
    }
    return (
        <div>
            <button onClick={handleLogout}>
                Log out
            </button>
        </div>
    )
}
export { LogOutButton }


