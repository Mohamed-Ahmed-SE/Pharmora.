import { PageHero } from "@/components/page-hero";
import { MediaImage } from "@/components/media-image";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Quality", "A placeholder framework for verified quality information.", "/quality");

export default function QualityPage() {
  return <>
    <PageHero title="Quality deserves evidence." description="This section is a structure for organization-approved information. It does not claim a particular manufacturing system, quality certificate, audit, or regulatory status." path="Quality" image="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85" imageAlt="Laboratory equipment in a quality-control environment" />
    <section className="section section-white"><div className="container quality-story"><div className="quality-story-image"><MediaImage src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=85" alt="Illustrative laboratory environment" /></div><div className="quality-story-copy prose"><h2>Quality assurance</h2><p>Describe the organization’s actual quality policies, ownership, and controls here, using approved source material. This copy is a placeholder and is not a description of an operating quality system.</p><h2>Quality control</h2><p>Document verified practices and scope only after review. No tests, laboratories, equipment, or standards compliance are claimed in this demonstration.</p><h2>Manufacturing and certificates</h2><p>Facility details and certificates must be sourced from the organization. No manufacturing facility or certification is represented on this page.</p></div></div></section>
    <section className="section section-aqua"><div className="container evidence-band"><div><span className="demo-note">Evidence required</span><h2>Replace with verified material</h2></div><ul className="checklist-list"><li>Quality system overview approved by the company</li><li>Manufacturing details cleared for public use</li><li>Current certificate documents and scope</li><li>Review date and document ownership</li></ul></div></section>
  </>;
}
