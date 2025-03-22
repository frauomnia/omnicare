import prisma from "@/lib/db/prisma";
import bcrypt from "bcryptjs"; 

export default async function handler(req: any, res: any) {
    const { email, password, name } = await req.json();
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await prisma.user.create({
        data: {
            email, 

        }
    })

}