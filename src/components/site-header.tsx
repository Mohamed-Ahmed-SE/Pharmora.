import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

const links = [
  ["About", "/about"], ["Products", "/products"], ["Therapeutic areas", "/therapeutic-areas"],
  ["Quality", "/quality"], ["R&D", "/research"], ["News", "/news"], ["Careers", "/careers"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-ribbon"><div className="container">A considered demonstration of pharmaceutical information design</div></div>
      <div className="container header-row">
        <Link className="brand" href="/" aria-label="Pharmora demo home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>Pharmora<span className="brand-note">Corporate demo</span></span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="header-action" href="/contact">Contact us <ArrowIcon direction="up-right" /></Link>
        <details className="mobile-nav">
          <summary className="mobile-menu" aria-label="Toggle navigation">Menu</summary>
          <nav className="mobile-nav-panel" aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
