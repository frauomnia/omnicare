import CommentsDisplay from '@/components/CommentsDisplay';
import DeleteButton from '@/components/DeleteButton';
import Navbar from '@/components/Navbar';
import prisma from '@/lib/db/prisma';
import { Metadata } from 'next';
import Image from 'next/image'
import { notFound } from 'next/navigation';

// interface VolunteerPageProps {
//     params: {
//         id: string;
//     }
// }

// @ts-ignore
export default async function VolunteerPage({ params }: {params: Promise<{id: string}>}) {
    // @ts-ignore
    const {id} = await params; // @ts-ignore
    const volunteer = await prisma.volunteer.findUnique({
        where: {id}
    })

    if(!volunteer) notFound();

    return(
        <div>
            <Navbar />
            <div className="ml-auto mr-auto w-1/2 border-[#48752C] border-2 rounded-md mt-5 p-2">
                <Image 
                    src="/images/avatar-placeholder.png"
                    alt="avatar placeholder"
                    className="rounded-full ml-auto mr-auto bg-[#F1E6D0] mt-2"
                    width={100}
                    height={50}
                />
                <div className="m-5">
                    <h1 className="font-bold text-3xl text-[#48752C]">
                        {volunteer.first_name + " " + volunteer.last_name}
                    </h1>
                    <h2 className="font-light text-[16] text-[#48752C]">
                    Medical Speciality: {volunteer.medical_speciality}
                    </h2>
                    <h2 className="font-light text-[16] text-[#48752C]">
                    First Language: {volunteer.first_language}
                    </h2>
                    <h2 className="font-light text-[16] text-[#48752C]">
                    Home Country: {volunteer.home_country}
                    </h2>
                    <h2 className="font-light text-[16] text-[#48752C]">
                    Country of Residence: {volunteer.country_residence}
                    </h2>
                    <h2 className="font-light text-[16] text-[#48752C]">
                    Place of employment: {volunteer.place_employment}
                    </h2>
                </div>
                {/* <DeleteButton volunteer={volunteer}/> */}
            </div>
            <div className='ml-auto mr-auto w-1/2 mt-5'>
                <CommentsDisplay volunteer={volunteer} />
            </div>
        </div> 
    )
}

