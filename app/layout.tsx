import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "./content";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      name: "Magrin Advogados",
      description: site.metaDescription,
      areaServed: "BR",
      priceRange: "$$",
      knowsAbout: [
        "Direito Agrário",
        "Direito Fundiário",
        "Regularização Fundiária Rural",
        "Usucapião Rural",
        "Direito Ambiental Rural",
        "Agronegócio",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Minha propriedade sem matrícula atualizada pode ser vendida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não com segurança jurídica plena. É recomendável regularizar antes de qualquer negociação, para evitar questionamentos futuros sobre a titularidade.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo leva um processo de usucapião rural?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Varia conforme a via (administrativa ou judicial) e a complexidade da documentação, podendo levar de meses a poucos anos.",
          },
        },
        {
          "@type": "Question",
          name: "Terra sem documentação regularizada pode acessar crédito rural?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Geralmente não. A maioria das linhas de crédito exige comprovação de titularidade regular do imóvel.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${poppins.variable} font-body bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
