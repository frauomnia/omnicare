import { Volunteer } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

interface VolunteerInfoDisplayProps {
    volunteer: Volunteer;
}

export default function VolunteerInfoDisplay({volunteer}: VolunteerInfoDisplayProps) {
    return(
        <Link href={`/volunteers/` + volunteer.id} 
        className="card card-bordered w-2/3 bg-base-100 border-[#48752C] hover:shadow-xl">
            <figure>
                <Image 
                    src="/images/avatar-placeholder.png"
                    alt="avatar placeholder"
                    width={100}
                    height={50}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {volunteer.first_name + " " + volunteer.last_name}
                </h2>
                <h3>{volunteer.medical_speciality}</h3>
            </div>
        </Link>
    )
}