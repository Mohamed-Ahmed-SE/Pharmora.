import { PageHero } from "@/components/page-hero";
import { MediaImage } from "@/components/media-image";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Research & development", "A placeholder for approved research and development information.", "/research");

export default function ResearchPage() {
  return <>
    <PageHero title="Research starts with honest questions." description="An editorial framework for the real research priorities, methods, and partnerships of the organization. No pipeline, clinical work, or research capability is asserted here." path="Research" image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85" imageAlt="Scientist examining laboratory samples" />
    <section className="section section-white"><div className="container research-story"><div className="research-copy prose"><h2>Research, in the organization’s own words.</h2><p>This demonstration leaves technical capabilities and scientific programs open for accurate, approved source material. Add only details the organization can substantiate and publish.</p><h2>Partnerships and priorities</h2><p>No partners, studies, or clinical programs have been supplied. Placeholder content is deliberately absent rather than invented.</p></div><figure className="research-visual research-visual-tall"><MediaImage src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=85" alt="Illustrative researcher working in a laboratory" /><figcaption>Illustrative imagery · demonstration content</figcaption></figure></div></section>
    <section className="section section-aqua"><div className="container checklist-section"><div><span className="demo-note"><span className="demo-dot" /> Evidence before assertion</span><h2>Research content checklist</h2></div><ul className="checklist-list"><li>Approved description of research capabilities</li><li>Named partnerships with publication permission</li><li>Source-checked programs and status</li><li>Scientific and regulatory review</li></ul></div></section>
  </>;
}
