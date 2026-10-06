import type { AdminRole } from "@/lib/auth/authorization";

export const adminSections = {
  products: { label: "Products", roles: ["SUPER_ADMIN", "PRODUCT_MANAGER"] },
  categories: { label: "Categories", roles: ["SUPER_ADMIN", "PRODUCT_MANAGER"] },
  "therapeutic-areas": { label: "Therapeutic areas", roles: ["SUPER_ADMIN", "PRODUCT_MANAGER"] },
  news: { label: "News", roles: ["SUPER_ADMIN", "CONTENT_ADMIN"] },
  careers: { label: "Careers", roles: ["SUPER_ADMIN", "HR_MANAGER"] },
  applications: { label: "Applications", roles: ["SUPER_ADMIN", "HR_MANAGER"] },
  certifications: { label: "Certifications", roles: ["SUPER_ADMIN", "PRODUCT_MANAGER", "CONTENT_ADMIN"] },
  messages: { label: "Contact messages", roles: ["SUPER_ADMIN", "CONTENT_ADMIN"] },
  homepage: { label: "Homepage content", roles: ["SUPER_ADMIN", "CONTENT_ADMIN"] },
  settings: { label: "Site settings", roles: ["SUPER_ADMIN"] },
  users: { label: "Admin users", roles: ["SUPER_ADMIN"] },
} satisfies Record<string, { label: string; roles: readonly AdminRole[] }>;

export function canManageSection(role: AdminRole, section: keyof typeof adminSections) {
  const allowedRoles: readonly AdminRole[] = adminSections[section].roles;
  return allowedRoles.includes(role);
}
