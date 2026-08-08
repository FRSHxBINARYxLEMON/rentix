import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Catalog from "./Catalog";

export const metadata: Metadata = {
  title: {
    absolute: "Products | Rentix",
  },
  description:
    "Browse our full catalog of professional cameras, lighting, audio gear, stabilizers, and accessories available for rent.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Rentix",
    description:
      "Browse our full catalog of professional cameras, lighting, audio gear, stabilizers, and accessories.",
    url: "/products",
  },
  twitter: {
    title: "Products | Rentix",
    description:
      "Browse our full catalog of professional cameras, lighting, audio gear, stabilizers, and accessories.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Catalog />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
