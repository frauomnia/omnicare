import CommentsDisplay from '@/components/CommentsDisplay';
import DeleteButton from '@/components/DeleteButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import prisma from '@/lib/db/prisma';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface VolunteerPageProps {
    params: {id : string}
}

export default async function VolunteerPage({ params }: VolunteerPageProps) {
    const {id} = params; 
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
                    First language: {volunteer.first_language}
                    </h2>
                    <h2 className="font-light text-[16] text-[#48752C]">
                    Home Country: {volunteer.home_country}
                    </h2>
                    <h2 className="font-light text-[16] text-[#48752C]">
                    Host Country: {volunteer.country_residence}
                    </h2>
                    <h2 className="font-light text-[16] text-[#48752C]">
                    Curent Location: {volunteer.place_employment}
                    </h2>
                    <h2 className="font-light text-[16] text-[#48752C]">
                    Clinic Address: {volunteer.clinic_address}
                    </h2>
                </div>
                <DeleteButton volunteer={volunteer}/>
            </div>
            <div className='ml-auto mr-auto w-1/2 mt-5'>
                <CommentsDisplay volunteer={volunteer} />
            </div>
            <Footer />
        </div> 
    )
}

