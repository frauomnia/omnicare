"use client"

import { Session } from "next-auth";
import Image from "next/image";
import { signOut, signIn } from "next-auth/react";


interface UserDropDownProps {
    session: Session | null
}

export default function UserDropDown ({session}: UserDropDownProps) {
    const user = session?.user;

    return(
        <div className="dropdown dropdown-end">
            <label 
            tabIndex={0}
            className="btn btn-ghost btn-circle">
                {user ? (
                <Image 
                src="/images/avatar-placeholder.png"
                alt="avatar placeholder"
                width={40}
                height={40}
                className="w-10 rounded-full"
                />
                ) : (
                    <div><p>not found</p></div>
                )
                }
            </label>
            <ul 
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm mt-3 bg-base-100"
            >
                <li>
                    { user? 
                    <button onClick={() => signOut({callbackUrl: '/'})}>Log out</button>
                :
                <button onClick={() => signIn("google", { callbackUrl: '/'})}>Log out</button>
            } 
                </li>
            </ul>
        </div>
    )
}