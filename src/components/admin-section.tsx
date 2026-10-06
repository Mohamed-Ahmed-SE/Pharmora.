import { getAdminIdentity } from "@/lib/auth/authorization";
import { canManageSection, type adminSections } from "@/lib/auth/permissions";
import { isAuthConfigured } from "@/lib/auth/auth";
import { getMediaConfiguration } from "@/lib/media/config";

type SectionKey = keyof typeof adminSections;

type AdminSectionProps = { section: SectionKey };

export async function AdminSection({ section }: AdminSectionProps) {
  const identity = await getAdminIdentity();
  const title = section.replaceAll("-", " ");
  if (!identity) return <div className="config-panel"><h1 className="admin-title">Admin sign-in required</h1><p>Authenticate with an active admin account to view this module.</p></div>;
  if (!canManageSection(identity.role, section)) return <div className="config-panel"><h1 className="admin-title">Access not permitted</h1><p>Your role does not have permission to view {title}.</p></div>;
  if (section === "settings") return <SettingsStatus />;
  return <><h1 className="admin-title">{title.replace(/\b\w/g, (letter) => letter.toUpperCase())}</h1><p className="admin-subtitle">Content module · storage connection is not configured in this demo.</p><div className="config-panel"><span className="demo-note">Integration state · Not connected</span><h2>Records unavailable</h2><p>This section is intentionally read-only until PostgreSQL is configured and verified server-side. No sample records are presented as real content, and no create, edit, delete, or publish action is exposed as functional.</p><p>Uploads and mutations must be added with server-side role checks, Zod validation, and safe error handling before production use.</p></div></>;
}

function SettingsStatus() {
  const media = getMediaConfiguration();
  const statuses = [
    ["PostgreSQL URL", Boolean(process.env.DATABASE_URL)],
    ["Better Auth environment", isAuthConfigured],
    ["Cloudinary credentials", media.configured],
  ] as const;
  return <><h1 className="admin-title">Site settings</h1><p className="admin-subtitle">Environment configuration presence only; connectivity is not tested here.</p><div className="admin-panel">{statuses.map(([label, configured]) => <div className="job-row" key={label}><strong>{label}</strong><span>{configured ? "Environment values present · unverified" : "Not configured"}</span></div>)}</div><div className="config-panel"><h2>Media integration</h2><p>{media.configured ? "Server environment values are present but unverified." : `Missing environment variables: ${media.missing.join(", ")}.`}</p><p>Cloudinary upload and delivery operations are not implemented. Never expose the API secret to a browser.</p></div></>;
}
