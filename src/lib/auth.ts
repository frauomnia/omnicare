import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "./db/prisma"

export const { auth, handlers, signIn, signOut } = NextAuth({ providers: 
    
    [Credentials({
        credentials: {
            email: {},
            password: {},
            name: {},
            role: {}
        },
        authorize: async (credentials) => {

            const user = await prisma.user.findFirst({
                where: {
                    name: credentials.name!,
                    email: credentials.email!,
                    password: credentials.password!,
                    role: credentials.role!
                }
            })
            if(!user) {
                throw new Error("Invalid credentials")
            }
            return user;
        }
    })
    ] 
})

