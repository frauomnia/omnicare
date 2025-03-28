"use client"

import { User } from "@prisma/client";

interface UsersProps {
    user: User;
}

export default function DeleteUserButton({user}: UsersProps) {

    const handleDelete = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/users/${user.id}`, {
                method: "DELETE",
            });
                
            if(response.ok) {
                window.location.href = "/admin/users/";
            }
        } catch (error) {
            console.error(error);
        }
    }
    return(
       <>
        <button onClick={handleDelete} className="btn border-2 border-[#48752C] text-[#48752C] bg-[#F1E6D0] shadow-md">
            Delete
        </button>
       </>
    )
}