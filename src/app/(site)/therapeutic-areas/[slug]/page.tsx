import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { MediaImage } from "@/components/media-image";
import { demoAreas, demoProducts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return demoAreas.map(({ slug }) => ({ slug })); }

type AreaDetailProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: AreaDetailProps) {
  const { slug } = await params;
  const area = demoAreas.find((entry) => entry.slug === slug);
  return area ? pageMetadata(`${area.title} · Demo`, `Demonstration category page for ${area.title}.`, `/therapeutic-areas/${slug}`) : { title: "Area not found", robots: { index: false } };
}

export default async function TherapeuticAreaDetail({ params }: AreaDetailProps) {
  const { slug } = await params;
  const area = demoAreas.find((entry) => entry.slug === slug);
  if (!area) notFound();
  const products = demoProducts.filter((product) => product.area === area.title);
  return <>
    <PageHero title={area.title} description="Illustrative navigation category only. No claim about clinical focus, medicines, indications, or market availability is made." path={`Therapeutic areas / ${area.title}`} image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85" imageAlt="Illustrative scientist examining laboratory samples" />
    <section className="section section-white"><div className="container area-detail-content"><div className="area-detail-heading"><span className="demo-note"><span className="demo-dot" /> Illustrative category</span><h2>Related catalogue examples</h2><p>Demonstration records, not verified product offerings.</p></div>{products.length ? <div className="product-grid">{products.map((product) => <article className="product-card" key={product.slug}><div className="product-art"><MediaImage src={product.image} alt="Illustrative product imagery" sizes="(max-width: 760px) 100vw, 33vw" /><span className="product-stamp">Demo example</span></div><div className="product-info"><span className="product-type">{product.area} · Demo listing</span><h3>{product.name} · Demo</h3><p>{product.generic}</p><Link className="text-link" href={`/products/${product.slug}`}>View example <ArrowIcon direction="right" /></Link></div></article>)}</div> : <div className="empty-state"><p>No demonstration product is assigned to this category.</p></div>}</div></section>
  </>;
}
