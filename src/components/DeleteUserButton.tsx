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
                window.location.href = "/";
            }
        } catch (error) {
            console.error(error);
        }
    }
    return(
       <>
        <button onClick={handleDelete} className="btn">
            Delete
        </button>
       </>
    )
}