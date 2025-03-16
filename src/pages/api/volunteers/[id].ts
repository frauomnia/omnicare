import prisma from "@/lib/db/prisma";

export default async function handler(req: any, res: any) {
    const { id } = req.query;
    
    if (req.method === "DELETE") {
        try {
            await prisma.volunteer.delete({where: {id}})
                    return res.status(200).json({ message: "Success: volunteer deleted"});
                } catch (error) {
                    return res.status(500).json({error: "Internal server error"});
                }
    }
} 