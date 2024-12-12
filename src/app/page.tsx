import VolunteerInfoDisplay from "@/components/VolunteerInfoDisplay";
import prisma from "@/lib/db/prisma";
import Image from "next/image";

export default async function Home() {
  const volunteers = await prisma.volunteer.findMany({
    orderBy: {medical_speciality: "desc"}
  })
  return (
   <div>
      <VolunteerInfoDisplay volunteer={volunteers[0]} />
   </div>
  );
}
