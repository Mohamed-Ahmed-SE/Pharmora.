import "server-only";
import { PrismaClient } from "@prisma/client";

type PrismaGlobal = typeof globalThis & { pharmoraPrisma?: PrismaClient };
const globalForPrisma = globalThis as PrismaGlobal;

export const prisma = globalForPrisma.pharmoraPrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.pharmoraPrisma = prisma;
