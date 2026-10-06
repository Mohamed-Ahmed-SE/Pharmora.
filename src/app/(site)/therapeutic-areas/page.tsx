import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { demoAreas } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Therapeutic areas", "Illustrative therapeutic-area navigation for a demo corporate website.", "/therapeutic-areas");

export default function TherapeuticAreasPage() {
  return <>
    <PageHero title="A clear framework for areas of focus." description="The categories below demonstrate catalogue organization only. They do not imply the existence, approval, availability, or effectiveness of any therapy or product." path="Therapeutic areas" image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85" imageAlt="Illustrative scientific team at work" />
    <section className="section section-white"><div className="container area-catalogue"><div className="area-catalogue-heading"><h2>Browse by category</h2><p>Each destination shows the demonstration entries assigned to that category.</p></div><div className="area-grid">{demoAreas.map((area) => <Link className="area-item" href={`/therapeutic-areas/${area.slug}`} key={area.slug}><span className="area-label">Illustrative category</span><strong>{area.title}</strong><span>{area.detail}</span><span className="area-link">Explore category <ArrowIcon direction="right" /></span></Link>)}</div></div></section>
  </>;
}
