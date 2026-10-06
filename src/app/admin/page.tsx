import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { getAdminIdentity } from "@/lib/auth/authorization";

const indicators = ["Products", "Published products", "Categories", "News articles", "Open careers", "Unread messages"];

export default async function AdminDashboardPage() {
  const identity = await getAdminIdentity();
  if (!identity) return <div className="config-panel"><h1 className="admin-title">Dashboard unavailable</h1><p>Sign in with an active admin account after configuring Better Auth and PostgreSQL.</p></div>;
  return <><h1 className="admin-title">Overview</h1><p className="admin-subtitle">A secure starting point for the content team. No production records are connected.</p><div className="demo-note"><span className="demo-dot" /> No database content connected</div><div className="kpi-grid">{indicators.map((label) => <div className="kpi" key={label}><span>{label}</span><strong>—</strong></div>)}</div><section className="admin-panel"><div className="panel-heading"><span>Workspace setup</span><span>Action required</span></div><div style={{ padding: 20 }}><p>Connect PostgreSQL and complete the initial migration before managing public content.</p><Link href="/admin/settings">Review site configuration <ArrowIcon direction="right" /></Link></div></section><section className="admin-panel"><div className="panel-heading"><span>Administration modules</span><span>Access controlled</span></div><div className="table-wrap"><table className="admin-table"><thead><tr><th>Module</th><th>Role protection</th><th>Content status</th></tr></thead><tbody><tr><td>Product catalogue</td><td>Product Manager, Super Admin</td><td>Not connected</td></tr><tr><td>Editorial and homepage</td><td>Content Admin, Super Admin</td><td>Not connected</td></tr><tr><td>Careers and applications</td><td>HR Manager, Super Admin</td><td>Not connected</td></tr></tbody></table></div></section></>;
}
