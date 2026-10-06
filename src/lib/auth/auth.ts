import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/db";

export const isAuthConfigured = Boolean(process.env.DATABASE_URL && process.env.BETTER_AUTH_SECRET && process.env.BETTER_AUTH_URL);

export const auth = isAuthConfigured
  ? betterAuth({
      database: prismaAdapter(prisma, { provider: "postgresql" }),
      baseURL: process.env.BETTER_AUTH_URL,
      secret: process.env.BETTER_AUTH_SECRET,
      emailAndPassword: { enabled: true, disableSignUp: true },
      user: { additionalFields: { role: { type: "string", required: false, input: false }, active: { type: "boolean", required: false, input: false } } },
      trustedOrigins: [process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"],
    })
  : null;
