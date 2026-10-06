import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { demoNews } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type NewsDetailProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: NewsDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const story = demoNews.find((entry) => entry.slug === slug);
  return story ? pageMetadata(`${story.title} · Demo`, story.summary, `/news/${slug}`) : { title: "News story not found", robots: { index: false } };
}

export function generateStaticParams() { return demoNews.map(({ slug }) => ({ slug })); }

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const story = demoNews.find((entry) => entry.slug === slug);
  if (!story) notFound();
  return <><PageHero title={story.title} description={story.date} path="News / Demo story" image={story.image} imageAlt="Illustrative laboratory scene" /><article className="section section-white"><div className="container article-layout"><aside className="article-aside"><span className="demo-note">Illustrative editorial content</span><time>{story.date}</time><span>News · Demo story</span></aside><div className="article-body"><h2>Example news article</h2><p className="article-lede">{story.summary}</p><p>This demonstration story contains no factual company announcement, commercial statement, scientific finding, or organizational claim. Replace it with approved and source-verified editorial content.</p><Link className="text-link" href="/news">Return to the newsroom <ArrowIcon direction="right" /></Link></div></div></article></>;
}
