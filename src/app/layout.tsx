import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro França | Data Analysis & Revenue Operations",
  description:
    "Portfolio de Pedro França — Data Analysis & Revenue Operations na StartSe. Dashboards em Power BI e Looker Studio, SQL, Python e automações.",
  keywords: [
    "pedro frança",
    "data analyst",
    "revenue operations",
    "power bi",
    "looker studio",
    "bigquery",
    "startse",
    "portfolio",
    "analytics",
  ],
  openGraph: {
    title: "Pedro França | Data Analysis & Revenue Operations",
    description:
      "Portfolio de dados com dashboards em Power BI e Looker Studio. Especialista em RevOps e Growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Background decorative elements */}
        <div className="bg-grid" />
        <div className="bg-gradient-blob bg-blob-1" />
        <div className="bg-gradient-blob bg-blob-2" />
        <div className="bg-gradient-blob bg-blob-3" />

        {children}
      </body>
    </html>
  );
}
