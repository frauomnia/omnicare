import {prisma} from "@/lib/db/prisma";

export default async function handler(req: { query: { medicalSpeciality: string; country: string; place: string; language: string;}; }, res: any) {
    const { medicalSpeciality, country, place, language} = req.query;

    let queryFilter: any = {};

    if (medicalSpeciality) {
      queryFilter.medical_speciality = medicalSpeciality;
    }

    if (country) {
      queryFilter.home_country = country;
    }

    if (place) {
      queryFilter.place_employment = place;
    }

    if (language) {
      queryFilter.first_language = language;
    }

    // fetch data from database using Prisma "findMany" method
    try {
      const volunteersList = await prisma.volunteer.findMany({
        where: queryFilter,
        orderBy: {medical_speciality: 'desc'},
      });

      res.status(200).json(volunteersList);
    // catch error on issue when quering the database
    } catch (error) {
      console.error(error);
      res.status(500).json({error: "Internal server error"});
    }
}