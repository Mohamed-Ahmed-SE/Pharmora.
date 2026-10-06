import { notFound } from "next/navigation";
import { AdminSection } from "@/components/admin-section";
import { adminSections } from "@/lib/auth/permissions";

type AdminSectionPageProps = { params: Promise<{ section: string }> };

export default async function AdminSectionPage({ params }: AdminSectionPageProps) {
  const { section } = await params;
  if (!Object.hasOwn(adminSections, section)) notFound();
  return <AdminSection section={section as keyof typeof adminSections} />;
}
