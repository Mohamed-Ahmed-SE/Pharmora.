import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { demoJobs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Careers", "Example careers listings, clearly marked as demonstration content.", "/careers");

export default function CareersPage() {
  return <>
    <PageHero title="Bring your perspective to meaningful work." description="This careers experience is a product demonstration. Roles, departments, and locations below are examples only—not open or current vacancies." path="Careers" image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85" imageAlt="Illustrative laboratory team reviewing scientific work" />
    <section className="section section-white"><div className="container careers-content"><div className="careers-intro"><h2>Example opportunities</h2><p>Do not submit personal information through this demonstration. Application processing is not connected.</p></div><div className="job-list">{demoJobs.map((job) => <article className="job-row" key={job.slug}><div className="job-details"><h3>{job.title}</h3><p>{job.department} · {job.location} · {job.type}</p></div><Link className="job-link" href={`/careers/${job.slug}`}>View example <ArrowIcon direction="right" /></Link></article>)}</div></div></section>
  </>;
}
