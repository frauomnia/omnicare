import prisma from "@/lib/db/prisma";

export default async function handler(req: any, res: any) {
    const { id } = req.query;
    
    // query by id to delete user as response to DELETE request
    if (req.method === "DELETE") {
        try {
            await prisma.user.delete({where: {id}})
                    return res.status(200).json({ message: "Success: user deleted"});
                } catch (error) {
                    console.error(error);
                    return res.status(500).json({error: "Internal server error"});
                }
    }

    // query by id to update user's role as response to PATCH request
    if (req.method === "PATCH") {
        try {
            await prisma.user.update({
                where: {
                    id
                }, 
                data: {
                role: "admin"
                }
            })
                    return res.status(200).json({ message: "Success: admin role"});
                } catch (error) {
                    console.error(error);
                    return res.status(500).json({error: "Internal server error"});
                }
    }
} 

