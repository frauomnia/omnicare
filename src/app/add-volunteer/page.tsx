import ApplicationMainButton from "@/components/ApplicationMainButton";
import prisma from "@/lib/db/prisma";
import { redirect } from 'next/navigation'

export const metadata = {
    title: "add volunteer - Omnicare"
}

async function addVolunteer(formData: FormData) {
    "use server";
    
    // get the name from the form data
    const first_name = formData.get("first-name")?.toString();
    const last_name = formData.get("last-name")?.toString();
    const first_language = formData.get("first-language")?.toString();
    const home_country = formData.get("home-country")?.toString();
    const country_residence = formData.get("country-residence")?.toString();
    const place_employment = formData.get("place-employment")?.toString();
    const medical_speciality = formData.get("medical-speciality")?.toString();

    if (!first_name || !last_name || !first_language || !home_country || !country_residence || !place_employment || !medical_speciality)
    {
        throw Error ("Missing data is required!");
    } 

    await prisma.volunteer.create({
       data: {first_name, last_name, first_language, home_country, country_residence, place_employment, medical_speciality},
    });

    redirect('/');
}

export default function AddVolunteerPage() {
    return(
        <div>
            <h1 className="text-lg mb-5 font-semibold">Add volunteer</h1>
            <form action={addVolunteer}>
                <input 
                    required
                    name="first-name" 
                    placeholder="first name"
                    className="input input-bordered mb-3 w-1/2">
                </input>
                <br/>
                <input 
                    required
                    name="last-name" 
                    placeholder="last name"
                    className="input input-bordered mb-3 w-1/2">
                </input>
                <br/>
                <input 
                    required
                    name="first-language" 
                    placeholder="first language"
                    className="input input-bordered mb-3 w-1/2">
                </input>
                <br/>
                <input 
                    required
                    name="home-country" 
                    placeholder="home country"
                    className="input input-bordered mb-3 w-1/2">
                </input>
                <br/>
                <input 
                    required
                    name="country-residence" 
                    placeholder="country of residence"
                    className="input input-bordered mb-3 w-1/2">
                </input>
                <br/>
                <input 
                    required
                    name="place-employment" 
                    placeholder="place of employment"
                    className="input input-bordered mb-3 w-1/2">
                </input>
                <br/>
                <input 
                    required
                    name="medical-speciality" 
                    placeholder="medical speciality"
                    className="input input-bordered mb-3 w-1/2">
                </input>
                <br/>
                <ApplicationMainButton className="btn btn-primary btn-wide">Submit application</ApplicationMainButton>
            </form>
        </div>
    )
}