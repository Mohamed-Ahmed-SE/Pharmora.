import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-topline"><span>Pharmora · Corporate demo</span><span>Illustrative content throughout</span></div>
        <div className="footer-grid">
          <div className="footer-intro">
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true">P</span>
              <span>Pharmora<span className="brand-note">Corporate demo</span></span>
            </Link>
            <p>A demonstration corporate website. Brand, portfolio, and all editorial material are placeholders pending verified company content.</p>
            <span className="demo-note"><span className="demo-dot" /> Demonstration environment</span>
          </div>
          <div><h3>Company</h3><div className="footer-links"><Link href="/about">About</Link><Link href="/quality">Quality</Link><Link href="/research">Research & development</Link><Link href="/careers">Careers</Link></div></div>
          <div><h3>Explore</h3><div className="footer-links"><Link href="/products">Product catalogue</Link><Link href="/therapeutic-areas">Therapeutic areas</Link><Link href="/news">Newsroom</Link><Link href="/contact">Contact</Link></div></div>
          <div><h3>Contact</h3><div className="footer-links"><span>Company details not configured</span><span>Contact information is illustrative</span><Link href="/contact">Send an enquiry <ArrowIcon direction="up-right" /></Link></div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Pharmora Demo · Placeholder brand, not a real pharmaceutical company.</span><span>Content requires verification and approval before production use.</span></div>
      </div>
    </footer>
  );
}
