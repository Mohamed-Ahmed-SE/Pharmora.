import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: { default: "Pharmora | Pharmaceutical company demo", template: "%s | Pharmora Demo" },
  description: "A clearly labeled demonstration of a pharmaceutical corporate website and content platform.",
  applicationName: "Pharmora Demo",
  openGraph: {
    type: "website",
    siteName: "Pharmora Demo",
    title: "Pharmora | Pharmaceutical company demo",
    description: "A clearly labeled demonstration corporate website.",
  },
  twitter: { card: "summary_large_image", title: "Pharmora Demo", description: "Demonstration pharmaceutical corporate website." },
  robots: { index: process.env.NEXT_PUBLIC_INDEX_SITE === "true", follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
