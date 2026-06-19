import type { Metadata, Viewport } from "next";
import { Archivo, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pedrofranca.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pedro França | Business Intelligence · RevOps · Martech",
  description:
    "Onde dados viram decisão. Pedro França — Business Intelligence, Revenue Operations e Martech na StartSe. Dashboards, automações e agentes de IA.",
  keywords: [
    "pedro frança",
    "business intelligence",
    "revenue operations",
    "martech",
    "power bi",
    "bigquery",
    "sql",
    "python",
    "automação",
    "agentes de ia",
    "startse",
  ],
  authors: [{ name: "Pedro França" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pedro França | Business Intelligence · RevOps · Martech",
    description:
      "Onde dados viram decisão. Dashboards, automações e agentes de IA na StartSe.",
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Pedro França",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro França | Business Intelligence · RevOps · Martech",
    description: "Onde dados viram decisão.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
