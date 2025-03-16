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
    
            // const result = await response.json();
    
            if(response.ok) {
                window.location.href = "/";
            }
        } catch (error) {
            console.error(error);
        }
    }
    return(
       <>
        <button onClick={handleDelete}
        className="btn">
                Delete
        </button>
       </>
    )
}