import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { MediaImage } from "@/components/media-image";
import { demoProducts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type ProductDetailProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const product = demoProducts.find((entry) => entry.slug === slug);
  return product ? pageMetadata(`${product.name} · Demo`, `Demonstration product profile for ${product.name}. Not a real medicine or approved product.`, `/products/${slug}`) : { title: "Product not found", robots: { index: false } };
}

export function generateStaticParams() { return demoProducts.map(({ slug }) => ({ slug })); }

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = demoProducts.find((entry) => entry.slug === slug);
  if (!product) notFound();
  return <><PageHero title={product.name} description="DEMO PRODUCT PROFILE · The name, ingredient, strength, dosage form, and package below are placeholders. This entry is not medical advice, a marketed medicine, or evidence of regulatory approval." path="Products / Product details" image={product.image} imageAlt="Illustrative product image" /><section className="section section-white"><div className="container product-detail-layout"><div className="product-detail-image"><MediaImage src={product.image} alt="Illustrative product image" sizes="(max-width: 760px) 100vw, 46vw" /><span className="product-stamp">Demo example</span></div><div className="product-spec"><div className="product-spec-heading"><span className="product-type">{product.area} · Demo listing</span><h2>Structured example information</h2></div><dl className="spec-list"><div><dt>Generic name</dt><dd>{product.generic}</dd></div><div><dt>Active ingredient</dt><dd>Not supplied — demo placeholder</dd></div><div><dt>Strength</dt><dd>{product.strength}</dd></div><div><dt>Dosage form</dt><dd>{product.form}</dd></div><div><dt>Packaging</dt><dd>Not supplied — demo placeholder</dd></div><div><dt>Therapeutic area</dt><dd>{product.area} — sample category</dd></div><div><dt>Registration information</dt><dd>Not supplied. No approval or registration is claimed.</dd></div><div><dt>Leaflet</dt><dd>No leaflet is available for this demonstration entry.</dd></div></dl><Link className="text-link" href="/products">Return to product examples <ArrowIcon direction="right" /></Link></div></div></section></>;
}
