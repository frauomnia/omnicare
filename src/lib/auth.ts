import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "./db/prisma"
export const { auth, handlers } = NextAuth({ providers: 
    
    [Credentials({
        credentials: {
            email: {},
            password: {},
            name: {}
        },
        authorize:async (credentials) => {
            const user = await prisma.user.findFirst({
                where: {email: credentials.email, password: credentials.password},
            });
            if (!user) {
                throw new Error("Invalid credentials.");
            }
            return user;
        }
    })
    ] 
})

