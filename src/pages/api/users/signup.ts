import prisma from "@/lib/db/prisma";

// this API handler responds to POST request and creates a new user
export default async function handler(req: any, res: any) {
    try {
        const {
            name,
            email,
            password
        } = req.body;

        if (
            !name ||
            !email ||
            !password 
        ) {
            return res.status(400).json({error: "Missing required data"});
            }
            await prisma.user.create({
                data: {
                    name,
                    email,
                    password
                }
            });
         
            return res.status(201).json({ message: "Success: user created"});

    } catch (error) {
        return res.status(500).json({error: "Internal server error"});
    }
}