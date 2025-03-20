import NextAuth from "next-auth";
import { NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/db/prisma";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "select_account",
                }
            }
        })
    ],
    debug: true,
    callbacks: {
        async redirect({url, baseUrl})  {
            return baseUrl;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

