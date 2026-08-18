import type { Metadata } from "next";
import { person, site } from "@/content/cv";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${person.name} — ${person.title}`,
  description: `${person.name} — ${person.title} i ${person.location}.`,
  openGraph: {
    title: `${person.name} — ${person.title}`,
    description: `${person.title} i ${person.location}.`,
    url: site.url,
    type: "profile",
    locale: "da_DK",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
