"use client"

import { Volunteer } from "@prisma/client";

interface VolunteerInfoDisplayProps {
    volunteer: Volunteer;
}

export default function DeleteButton({volunteer}: VolunteerInfoDisplayProps) {

    const handleDelete = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/volunteers/${volunteer.id}`, {
                method: "DELETE",
            });
                
            if(response.ok) {
                window.location.href = "/admin/volunteers/";
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