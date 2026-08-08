"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { BagIcon, CheckIcon } from "./Icons";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inBag = items.some((i) => i.product.id === product.id);

  return (
    <button
      type="button"
      onClick={() => {
        if (inBag) return;
        addItem(product);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
      className={`inline-flex items-center justify-center gap-2.5 text-white w-full px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 ${
        inBag || added
          ? "bg-whatsapp cursor-default"
          : "bg-ink hover:bg-accent hover:text-ink"
      }`}
    >
      {inBag || added ? (
        <CheckIcon className="w-5 h-5" />
      ) : (
        <BagIcon className="w-5 h-5" />
      )}
      {inBag ? "In Your Bag" : added ? "Added to Bag" : "Add to Bag"}
    </button>
  );
}
