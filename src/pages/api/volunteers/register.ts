import prisma from "@/lib/db/prisma";

export default async function handler(req: any, res: any) {
    
   try {
        const {
            first_name, 
            last_name, 
            first_language, 
            home_country, 
            country_residence, 
            place_employment, 
            medical_speciality,
            clinic_address} = req.body;

        //check if any of the required fields are missing
        if (
            !first_name || 
            !last_name || 
            !first_language || 
            !home_country || 
            !country_residence || 
            !place_employment || 
            !medical_speciality ||
            !clinic_address)
        {
            return res.status(400).json({ error: "Missing required data" });
        } 
            await prisma.volunteer.create({
                data: {
                    first_name, 
                    last_name, 
                    first_language, 
                    home_country, 
                    country_residence, 
                    place_employment, 
                    medical_speciality,
                    clinic_address},
             });
            
            return res.status(201).json({ message: "Success: volunteer added"});
        } catch (error) {
            return res.status(500).json({error: "Internal server error"});
        }
} 