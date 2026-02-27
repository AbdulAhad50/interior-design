import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://interior-design-kappa-six.vercel.app/"),

  title: {
    default: "Luxury Interior Design Studio | Modern Home & Office Designers",
    template: "%s | Your Brand Name",
  },

  description:
    "Award-winning interior design studio specializing in luxury home interiors, modern office spaces, and custom furniture design. Transform your space with our expert interior designers.",

  keywords: [
    "interior design",
    "luxury interior designer",
    "home interior design",
    "office interior design",
    "modern interior design",
    "custom furniture design",
    "interior design studio",
    "interior decorators near me",
  ],

  authors: [{ name: "Your Brand Name" }],
  creator: "Your Brand Name",
  publisher: "Your Brand Name",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://interior-design-kappa-six.vercel.app/",
    title: "Luxury Interior Design Studio | Modern Home & Office Designers",
    description:
      "Transform your home or office with our premium interior design services. Modern, elegant, and functional spaces designed by experts.",
    siteName: "Your Brand Name",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Design Project",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Design Studio",
    description:
      "Premium interior design services for homes & offices.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://interior-design-kappa-six.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
