import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { PublicForm } from "@/components/public-form";
import { demoJobs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type CareerDetailProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: CareerDetailProps) {
  const { slug } = await params;
  const job = demoJobs.find((entry) => entry.slug === slug);
  return job ? pageMetadata(`${job.title} · Demo`, `Demonstration career listing. ${job.location}.`, `/careers/${slug}`) : { title: "Career not found", robots: { index: false } };
}

export function generateStaticParams() { return demoJobs.map(({ slug }) => ({ slug })); }

export default async function CareerDetailPage({ params }: CareerDetailProps) {
  const { slug } = await params;
  const job = demoJobs.find((entry) => entry.slug === slug);
  if (!job) notFound();
  return <><PageHero title={job.title} description={`${job.department} · ${job.location} · ${job.type}. This is not a real vacancy.`} path="Careers / Example role" image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85" imageAlt="Illustrative laboratory team" /><section className="section section-white"><div className="container application-layout"><aside className="application-intro prose"><span className="demo-note"><span className="demo-dot" /> Example role</span><h2>About this example</h2><p>This role exists only to demonstrate page structure. There is no verified employer, vacancy, job specification, or application process behind this listing.</p><p>Application submissions are not stored, and no CV upload is enabled.</p></aside><div className="contact-form-panel"><div className="form-heading"><h2>Application form preview</h2><p>Submitting personal information is disabled until the organization configures secure application storage.</p></div><PublicForm endpoint="/api/applications" submitLabel="Check application service"><div className="form-grid"><label className="form-field">Name<input name="name" autoComplete="name" required minLength={2} /></label><label className="form-field">Email<input name="email" type="email" autoComplete="email" required /></label><label className="form-field">Phone<input name="phone" type="tel" autoComplete="tel" required /></label><label className="form-field">Role<input name="role" defaultValue={job.title} required /></label><label className="form-field full">Cover note<textarea name="coverNote" maxLength={5000} /></label></div></PublicForm></div></div></section></>;
}
