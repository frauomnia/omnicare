"use client"

import { Volunteer } from "@prisma/client";

interface VolunteerInfoDisplayProps {
    volunteer: Volunteer;
}

export default function PublishButton({volunteer}: VolunteerInfoDisplayProps) {

    const handlePublish = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/volunteers/${volunteer.id}`, {
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
        className="btn">
                Publish
        </button>
       </>
    )
}