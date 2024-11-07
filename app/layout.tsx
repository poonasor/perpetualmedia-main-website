import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from '@/components/google-analytics';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "perpetualmedia ltd. | app/web development and blockchain",
  description: "perpetualmedia ltd. is a canadian company specializing in next generation app/web development and blockchain web3 development.",
  authors: [{ name: "perpetualmedia ltd." }],
  openGraph: {
    title: "perpetualmedia ltd. | app/web development and blockchain",
    description: "perpetualmedia ltd. is a canadian company specializing in next generation app/web development and blockchain web3 development.",
    type: "website",
    url: "https://perpetualmedia.ca",
    images: [
      {
        url: "https://perpetualmedia.ca/assets/images/og_image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "perpetualmedia ltd. | app/web development and blockchain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "perpetualmedia ltd. | app/web development and blockchain",
    description: "perpetualmedia ltd. is a canadian company specializing in next generation app/web development and blockchain web3 development.",
    images: ["https://perpetualmedia.ca/assets/images/og_image.jpg"], // Same image as OG
  },
//  manifest: "/manifest.json", // You'll need to create this
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
