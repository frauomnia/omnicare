"use client"

import { User } from "@prisma/client";

interface UsersProps {
    user: User;
}

export default function MakeAdminButton({user}: UsersProps) {

    const handlePublish = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/users/${user.id}`, {
                method: "PATCH",
            });
        
            if(response.ok) {
                window.location.href = "/";
            }
        } catch (error) {
            console.error(error);
        }
    }
    return(
       <>
        <button onClick={handlePublish}
        className="btn border-2 border-[#48752C] text-[#48752C] bg-[#F1E6D0] shadow-md">
                Make Admin
        </button>
       </>
    )
}