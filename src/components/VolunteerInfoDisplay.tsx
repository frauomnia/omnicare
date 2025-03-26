
import * as React from "react"
import { Volunteer } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

interface VolunteerInfoDisplayProps {
    volunteer: Volunteer;
}

export default function VolunteerInfoDisplay({volunteer}: VolunteerInfoDisplayProps) {
    return(
        <Link href={`/volunteers/` + volunteer.id} 
        title="valunteerList"
        className="card w-{70%} bg-[#F1E6D0] border-[#48752C] hover:shadow-xl">
            <figure>
                <Image 
                    src="/images/avatar-placeholder.png"
                    alt="avatar placeholder"
                    width={100}
                    height={50}
                />
            </figure>
            <div className="card-body">
                <h2 title="volunteerName" className="card-title">
                    
                    {volunteer.first_name + " " + volunteer.last_name}
                </h2>
                <h3 title="medical_speciality">{volunteer.medical_speciality}</h3>
            </div>
        </Link>
    )
}