import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: { type: "website", title, description, url: pathname, siteName: "Pharmora Demo" },
    twitter: { card: "summary", title, description },
  };
}
