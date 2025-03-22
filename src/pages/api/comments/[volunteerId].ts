import { prisma } from "@/lib/db/prisma";

export default async function handler(req: any, res: any) {

    const { volunteerId } = req.query;
    const { content } = req.body;

    if (req.method === "POST") {
        if (!content || content.trim() === "") {
            return res.status(400).json({error: "Content is required"});
        }

        try {
            const comment = await prisma.feedback.create({
                data: {
                    volunteerId: String(volunteerId),
                    content,
                },
            });
            return res.status(201).json(comment);
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error"})
        }
    }

    if (req.method === "GET") {
        try {
            const comments = await prisma.feedback.findMany({
                where: {
                    volunteerId: String(volunteerId),
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
            return res.status(200).json(comments);
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error"})
        }
    }
}