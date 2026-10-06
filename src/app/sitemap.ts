import type { MetadataRoute } from "next";
import { demoAreas, demoJobs, demoNews, demoProducts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const staticPaths = ["", "/about", "/products", "/therapeutic-areas", "/quality", "/research", "/news", "/careers", "/contact"];
  const detailPaths = [
    ...demoProducts.map(({ slug }) => `/products/${slug}`),
    ...demoAreas.map(({ slug }) => `/therapeutic-areas/${slug}`),
    ...demoNews.map(({ slug }) => `/news/${slug}`),
    ...demoJobs.map(({ slug }) => `/careers/${slug}`),
  ];
  return [...staticPaths, ...detailPaths].map((path) => ({ url: new URL(path, baseUrl).toString() }));
}
