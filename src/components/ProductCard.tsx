import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative block rounded-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-transparent"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 100%, rgba(233,197,81,0.45) 0%, rgba(233,197,81,0) 60%)",
        }}
      />
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-ink text-white text-[0.7rem] font-semibold uppercase tracking-wider rounded-full">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
          {product.category}
        </p>
        <h3 className="text-[1.1rem] font-bold mb-3 tracking-tight">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-extrabold">${product.price}</span>
          <span className="text-sm text-gray-400">/ day</span>
        </div>
      </div>
    </Link>
  );
}
