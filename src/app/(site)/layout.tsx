import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";

export default function PublicLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <SiteLayout>{children}</SiteLayout>;
}
