import { prisma } from "@/lib/db/prisma";
import bcrypt from "bcryptjs"; 
import { redirect } from "next/dist/server/api-utils";

export default async function handler(req: any, res: any) {
    try {
        const {
            name,
            email,
            password
        } = req.body;
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(password, salt);
        
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