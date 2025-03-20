import CommentsDisplay from '@/components/CommentsDisplay';
import DeleteButton from '@/components/DeleteButton';
import Navbar from '@/components/Navbar';
import prisma from '@/lib/db/prisma';
import Image from 'next/image'
import { notFound } from 'next/navigation';

interface VolunteerPageProps {
    params: {
        id: string;
    }
}

export default async function VolunteerPage( { params } : VolunteerPageProps) 
{
    const { id } = await params;
    const volunteer = await prisma.volunteer.findUnique({
        where: {id}
    })

    if(!volunteer) notFound();

    return(
        <div>
            <Navbar />
            <div className="flex flex-col">
                <Image 
                    src="/images/avatar-placeholder.png"
                    alt="avatar placeholder"
                    className="rounded-md"
                    width={100}
                    height={50}
                />
                <div>
                    <h1 className="font-bold text-5xl">
                        {volunteer.first_name + " " + volunteer.last_name}
                    </h1>
                    <h2>
                    Medical Speciality: {volunteer.medical_speciality}
                    </h2>
                    <h2>
                    First Language: {volunteer.first_language}
                    </h2>
                    <h2>
                    Home Country: {volunteer.home_country}
                    </h2>
                    <h2>
                    Country of Residence: {volunteer.country_residence}
                    </h2>
                    <h2>
                    Place of employment: {volunteer.place_employment}
                    </h2>
                </div>
                <DeleteButton volunteer={volunteer}/>
                <CommentsDisplay volunteer={volunteer} />
            </div>
        </div> 
    )
}

