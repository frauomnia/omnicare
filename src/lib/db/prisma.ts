
// source: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if(!globalThis.prismaGlobal) {
    globalThis.prismaGlobal = prismaClientSingleton()
  }
  prisma = globalThis.prismaGlobal
}

export default prisma;