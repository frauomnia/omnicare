import prisma from "@/lib/db/prisma";

export default async function handler(req: { query: { name: string; email: string; role: string;}; }, res: any) {
    const { name, email, role} = req.query;

    // fetch data from database using Prisma "findMany" method
    try {
      const usersList = await prisma.user.findMany({
        orderBy: {name: 'desc'},
      });

      res.status(200).json(usersList);
    // catch error on issue when quering the database
    } catch (error) {
      console.error(error);
      res.status(500).json({error: "Internal server error"});
    }
}