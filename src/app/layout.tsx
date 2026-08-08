import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rentix.co"),
  title: {
    default: "Rentix: Premium Studio Gear Rentals for Creators",
    template: "%s | Rentix",
  },
  description:
    "Rent professional cameras, lighting, microphones, and studio equipment. Flexible plans, fast delivery, and top-tier gear for photographers and filmmakers.",
  icons: {
    icon: "/imgs/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': 160,
    'max-image-preview': "large",
    'max-video-preview': 30,
  },
  openGraph: {
    type: "website",
    siteName: "Rentix",
    images: ["/assets/imgs/rentix-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/imgs/rentix-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
