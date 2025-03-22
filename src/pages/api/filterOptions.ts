import { prisma } from "@/lib/db/prisma";

export default async function handler(req: any, res: any) {
    try {
        // to query distinct fields and return unique values 
        const medicalSpecialities = await prisma.volunteer.findMany({
            distinct: ['medical_speciality'],
            select: {
                medical_speciality: true
            },
        })
        const countries = await prisma.volunteer.findMany({
            distinct: ['home_country'],
            select: {
                home_country: true
            },
        })
        const places = await prisma.volunteer.findMany({
            distinct: ['place_employment'],
            select: {
                place_employment: true
            },
        });
        const languages = await prisma.volunteer.findMany({
            distinct: ['first_language'],
            select: {
                first_language: true
            },
        })
        // respond with JSON object, with unique values for each field
        res.status(200).json({
            medicalSpecialities: medicalSpecialities.map(item => item.medical_speciality),
            countries: countries.map(item => item.home_country),
            places: places.map(item => item.place_employment),
            languages: languages.map(item => item.first_language),
        });
    // catch error on issue when quering the database
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
}