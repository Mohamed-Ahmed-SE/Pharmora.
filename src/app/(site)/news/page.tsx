import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { MediaImage } from "@/components/media-image";
import { demoNews } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("News", "Clearly labeled sample newsroom entries for a pharmaceutical company demo.", "/news");

export default function NewsPage() {
  const [leadStory, ...stories] = demoNews;
  return <>
    <PageHero title="The newsroom." description="Every story below is placeholder copy created to demonstrate this layout. These are not company announcements or reports of real events." path="News" image="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85" imageAlt="Illustrative laboratory scene" />
    <section className="section section-white"><div className="container newsroom-layout"><div className="news-section-heading"><h2>Notes from the newsroom</h2><p>Sample editorial cards are clearly labeled and carry no company announcements or factual claims.</p></div><div className="news-feature"><div className="news-feature-image"><MediaImage src={leadStory.image} alt="Illustrative laboratory scene" sizes="(max-width: 760px) 100vw, 60vw" /></div><article className="news-feature-copy"><span className="product-type">Illustrative editorial content</span><time>{leadStory.date}</time><h3>{leadStory.title}</h3><p>{leadStory.summary}</p><Link className="text-link" href={`/news/${leadStory.slug}`}>Read demo story <ArrowIcon direction="right" /></Link></article></div><div className="news-grid">{stories.map((story) => <article className="news-card" key={story.slug}><div className="news-image"><MediaImage src={story.image} alt="Illustrative laboratory scene" sizes="(max-width: 760px) 100vw, 33vw" /></div><div className="news-copy"><time>{story.date}</time><h2>{story.title}</h2><p>{story.summary}</p><Link href={`/news/${story.slug}`}>Read demo story <ArrowIcon direction="right" /></Link></div></article>)}</div></div></section>
  </>;
}
