import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-seven-xi-49.vercel.app"),

  title: {
    default: "Mohamed Tidiane Diallo | Développeur Full Stack",
    template: "%s | Mohamed Tidiane Diallo",
  },

  description:
    "Portfolio de Mohamed Tidiane Diallo, développeur Full Stack spécialisé en React, Next.js, TypeScript, Node.js et Tailwind CSS. Découvrez mes projets, mes compétences et contactez-moi.",

  keywords: [
    "Mohamed Tidiane Diallo",
    "Développeur Full Stack",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "JavaScript",
    "Développeur Web",
    "Ontario",
    "Canada",
  ],

  authors: [
    {
      name: "Mohamed Tidiane Diallo",
    },
  ],

  creator: "Mohamed Tidiane Diallo",

  publisher: "Mohamed Tidiane Diallo",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://portfolio-seven-xi-49.vercel.app",
    title: "Mohamed Tidiane Diallo | Développeur Full Stack",
    description:
      "Découvrez le portfolio de Mohamed Tidiane Diallo, développeur Full Stack spécialisé en React, Next.js, TypeScript et Node.js.",

    siteName: "Portfolio Mohamed Tidiane Diallo",

    images: [
      {
        url: "/images/profile/profile.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Tidiane Diallo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohamed Tidiane Diallo | Développeur Full Stack",
    description:
      "Portfolio professionnel de Mohamed Tidiane Diallo.",

    images: ["/images/profile/profile.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}