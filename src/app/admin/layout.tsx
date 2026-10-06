import type { ReactNode } from "react";
import { AdminShell } from "@/components/admin-shell";

export const metadata = { title: "Admin workspace", robots: { index: false, follow: false } };

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <AdminShell>{children}</AdminShell>;
}
