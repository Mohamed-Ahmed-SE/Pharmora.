import Link from "next/link";
import { MediaImage } from "@/components/media-image";

type PageHeroProps = { title: string; description: string; path?: string; image?: string; imageAlt?: string };

export function PageHero({ title, description, path, image, imageAlt = "Illustrative pharmaceutical research setting" }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          {path && <p className="breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span>{path}</p>}
          <span className="demo-note"><span className="demo-dot" /> Demonstration content</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {image && <div className="page-hero-visual"><MediaImage src={image} alt={imageAlt} sizes="(max-width: 760px) 100vw, 46vw" /></div>}
      </div>
    </section>
  );
}
