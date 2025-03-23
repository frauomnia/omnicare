import prisma from "@/lib/db/prisma";

export default async function handler(req: any, res: any) {
    const { id } = req.query;

    if(req.method === "GET") {
        try {
            const volunteer = await prisma.volunteer.findUnique({
                where: {id} })
                return res.status(200).json(volunteer);
        } catch (error )
 {
    console.error(error);
    return res.status(500).json({error: "Internal server error"});

 }
    }
    
    if (req.method === "DELETE") {
        try {
            await prisma.volunteer.delete({where: {id}})
                    return res.status(200).json({ message: "Success: volunteer deleted"});
                } catch (error) {
                    console.error(error);
                    return res.status(500).json({error: "Internal server error"});
                }
    }

    if (req.method === "PATCH") {
        try {
            await prisma.volunteer.update({
                where: {
                    id
                }, 
                data: {
                published: true
                }
            })
                    return res.status(200).json({ message: "Success: volunteer published"});
                } catch (error) {
                    console.error(error);
                    return res.status(500).json({error: "Internal server error"});
                }
    }
} 

