import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AddToCartButton from "@/components/AddToCartButton";
import JsonLd from "@/components/JsonLd";
import { CheckIcon, WhatsappIcon } from "@/components/Icons";
import { getProduct, getSimilar, products } from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: `${product.name} available for rent. ${product.description}`.slice(
      0,
      158
    ),
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title: `${product.name} | Rentix`,
      description: product.description.slice(0, 150),
      url: `/products/${product.id}`,
      images: [product.image],
    },
    twitter: {
      title: `${product.name} | Rentix`,
      description: product.description.slice(0, 150),
      images: [product.image],
    },
  };
}

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) notFound();

  const similar = getSimilar(product);
  const waMessage = `Hi, I'm interested in renting the ${product.name}`;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.description,
    category: product.category,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="py-[140px] max-md:py-[120px] max-md:pt-[130px]">
          <div className="max-w-[1280px] mx-auto px-6">
            <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-[60px] max-md:gap-8 items-start">
              <div className="relative rounded-lg overflow-hidden bg-gray-100">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                </div>
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-ink text-white text-[0.7rem] font-semibold uppercase tracking-wider rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="pt-4">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h1 className="text-[2.2rem] font-extrabold tracking-tight leading-snug mb-4">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-1.5 mb-7">
                  <span className="text-[1.6rem] font-extrabold">
                    ${product.price}
                  </span>
                  <span className="text-[0.95rem] text-gray-400">/ day</span>
                </div>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
                <ul className="mb-9">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2 py-3 border-b border-gray-100 text-sm text-gray-700"
                    >
                      <CheckIcon className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/96181904565?text=${encodeURIComponent(waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-whatsapp text-white w-full px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-whatsapp-hover hover:-translate-y-0.5"
                  >
                    <WhatsappIcon className="w-5 h-5" />
                    Order on WhatsApp
                  </a>
                  <AddToCartButton product={product} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {similar.length > 0 && (
          <section className="pb-[120px] max-md:pb-20">
            <div className="max-w-[1280px] mx-auto px-6">
              <Reveal>
                <SectionHeader label="Similar Gear" title="You might also like" />
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                {similar.map((item, i) => (
                  <Reveal key={item.id} delay={i * 0.08}>
                    <ProductCard product={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="text-center pb-20">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-ink transition-all duration-300"
          >
            Back to catalog
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <JsonLd data={productJsonLd} />
    </>
  );
}
