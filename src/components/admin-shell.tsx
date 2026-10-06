import Link from "next/link";
import type { ReactNode } from "react";
import { getAdminIdentity } from "@/lib/auth/authorization";
import { isAuthConfigured } from "@/lib/auth/auth";
import { AdminSignIn } from "@/components/admin-sign-in";
import { adminSections } from "@/lib/auth/permissions";

export async function AdminShell({ children }: Readonly<{ children: ReactNode }>) {
  const identity = await getAdminIdentity();
  return <div className="dashboard"><aside className="admin-sidebar"><Link className="brand" href="/admin"><span className="brand-mark">P</span><span>Pharmora<span className="brand-note">Demo CMS</span></span></Link><nav className="admin-nav" aria-label="Admin navigation"><Link href="/admin">Overview</Link>{Object.entries(adminSections).map(([slug, section]) => <Link href={`/admin/${slug}`} key={slug}>{section.label}</Link>)}</nav><div className="admin-side-foot">Content workspace · Demo</div></aside><div className="admin-main"><header className="admin-topbar"><span><span className="admin-mobile-label">Admin / </span>Content workspace</span><span>{identity ? `${identity.name} · ${identity.role}` : "Configuration required"}</span></header><main className="admin-main-content">{!isAuthConfigured ? <div className="config-panel"><span className="demo-note">Secure configuration state</span><h1 className="admin-title">Admin access is not configured.</h1><p>Set `DATABASE_URL`, `BETTER_AUTH_SECRET`, and `BETTER_AUTH_URL` in the server environment. Admin content stays unavailable until secure authentication is connected.</p><p>No demo credentials or fallback sessions are provided.</p></div> : identity ? children : <div className="config-panel"><h1 className="admin-title">Sign in to the content workspace.</h1><p>Only authorized, active admin accounts can access this area.</p><AdminSignIn /></div>}</main></div></div>;
}
