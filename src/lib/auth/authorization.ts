import "server-only";
import { headers } from "next/headers";
import { auth, isAuthConfigured } from "@/lib/auth/auth";
import { prisma } from "@/lib/db";

export const adminRoles = ["SUPER_ADMIN", "CONTENT_ADMIN", "PRODUCT_MANAGER", "HR_MANAGER"] as const;
export type AdminRole = (typeof adminRoles)[number];
export type AdminIdentity = { id: string; email: string; name: string; role: AdminRole };

export async function getAdminIdentity(): Promise<AdminIdentity | null> {
  if (!isAuthConfigured || !auth) return null;
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return null;
  const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { id: true, email: true, name: true, role: true, active: true } });
  if (!user || !user.active) return null;
  return { id: user.id, email: user.email, name: user.name, role: user.role };
}

export async function requireAdminRole(allowedRoles: readonly AdminRole[]) {
  const identity = await getAdminIdentity();
  if (!identity || !allowedRoles.includes(identity.role)) throw new Error("Forbidden: an authenticated admin role is required.");
  return identity;
}
