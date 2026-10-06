import { PageHero } from "@/components/page-hero";
import { MediaImage } from "@/components/media-image";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About", "A demonstration company overview with clearly identified placeholder content.", "/about");

export default function AboutPage() {
  return <>
    <PageHero title="A company story, waiting for its facts." description="This is a design demonstration for an international pharmaceutical corporate website. Company identity, origins, leadership, and operating information have not been provided." path="About" image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85" imageAlt="Laboratory team reviewing scientific work" />
    <section className="section section-white"><div className="container editorial-grid editorial-feature"><div className="editorial-copy"><h2>Purpose and principles—defined by the real organization.</h2><p className="prose">The mission, vision, values, milestones, and leadership sections on this page are intentionally not invented. Replace this content with reviewed statements and verified details from the company before launch.</p><p className="prose">No company age, manufacturing footprint, registrations, markets, employee count, or leadership names are asserted in this demo.</p></div><figure className="editorial-photo editorial-photo-offset"><MediaImage src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85" alt="Illustrative laboratory workspace" /><figcaption>Illustrative imagery · demonstration content</figcaption></figure></div></section>
    <section className="section section-aqua"><div className="container checklist-section"><div><span className="demo-note"><span className="demo-dot" /> Ready for verified content</span><h2>Content checklist</h2></div><ul className="checklist-list"><li>Approved company name and brand identity</li><li>Verified history and organizational profile</li><li>Leadership bios approved for publication</li><li>Mission, vision, values, and milestones</li></ul></div></section>
  </>;
}
