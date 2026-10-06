import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { MediaImage } from "@/components/media-image";
import { demoProducts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Products", "Browse clearly labeled demonstration pharmaceutical product entries.", "/products");
type ProductsPageProps = { searchParams: Promise<{ q?: string; area?: string; form?: string }> };

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const filters = await searchParams;
  const query = filters.q?.trim().toLowerCase() ?? "";
  const products = demoProducts.filter((product) => (!query || `${product.name} ${product.generic} ${product.area}`.toLowerCase().includes(query)) && (!filters.area || product.area === filters.area) && (!filters.form || product.form === filters.form));
  return <>
    <PageHero title="Product information, clearly structured." description="This sample catalogue illustrates a searchable product experience. Every entry is synthetic; no product, medicine, formulation, or registration is represented as real or approved." path="Products" image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=85" imageAlt="Illustrative pharmaceutical product presentation" />
    <section className="section section-white"><div className="container catalogue-layout"><aside className="catalogue-intro"><h2>Browse the examples</h2><p>Explore the sample catalogue by name, category, or dosage form.</p><span className="catalogue-count">{products.length} demonstration {products.length === 1 ? "entry" : "entries"}</span></aside><div className="catalogue-results"><form className="listing-toolbar" action="/products"><label className="sr-only" htmlFor="product-query">Search products</label><input id="product-query" name="q" type="search" placeholder="Search examples by name or area" defaultValue={filters.q} /><label className="sr-only" htmlFor="product-area">Therapeutic area</label><select id="product-area" name="area" defaultValue={filters.area ?? ""}><option value="">All areas</option>{[...new Set(demoProducts.map((product) => product.area))].map((area) => <option key={area}>{area}</option>)}</select><label className="sr-only" htmlFor="product-form">Dosage form</label><select id="product-form" name="form" defaultValue={filters.form ?? ""}><option value="">All forms</option>{[...new Set(demoProducts.map((product) => product.form))].map((form) => <option key={form}>{form}</option>)}</select><button className="button" type="submit">Apply filters</button></form>{products.length ? <div className="product-grid">{products.map((product) => <article className="product-card" key={product.slug}><div className="product-art"><MediaImage src={product.image} alt="Illustrative product imagery" sizes="(max-width: 760px) 100vw, 33vw" /><span className="product-stamp">Demo example</span></div><div className="product-info"><span className="product-type">{product.area} · Demo listing</span><h2>{product.name}</h2><p>{product.generic}</p><div className="product-meta"><span>{product.strength}</span><span>{product.form}</span></div><Link className="text-link" href={`/products/${product.slug}`}>View demo details <ArrowIcon direction="right" /></Link></div></article>)}</div> : <div className="empty-state"><h2>No matching examples</h2><p>Try another search or adjust your filters.</p></div>}</div></div></section>
  </>;
}
