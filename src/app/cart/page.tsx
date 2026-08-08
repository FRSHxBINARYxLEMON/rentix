"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useCart } from "@/context/CartContext";
import { BagIcon, TrashIcon, WhatsappIcon } from "@/components/Icons";

export default function CartPage() {
  const { items, count, total, removeItem } = useCart();

  const orderMessage = `Hi Rentix! I'd like to place a rental order:%0A${items
    .map(
      (item, i) =>
        `${i + 1}. ${item.product.name} — $${item.product.price}/day`
    )
    .join("%0A")}%0ATotal: $${total}/day`;

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-[130px] max-md:pt-[120px] pb-[120px] max-md:pb-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-[3px] uppercase mb-4 text-gray-400">
                Your selection
              </span>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">
                Your Bag
              </h1>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-6">
                  <BagIcon className="w-9 h-9" />
                </div>
                <h2 className="text-xl font-bold mb-2">Your bag is empty</h2>
                <p className="text-gray-500 mb-8">
                  Add some gear and it will show up here.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-accent hover:text-ink"
                >
                  Browse Gear
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
                <div className="flex flex-col gap-5">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-5 bg-white border border-gray-100 rounded-lg p-4"
                    >
                      <Link
                        href={`/products/${item.product.id}`}
                        className="relative w-24 h-24 md:w-28 md:h-28 rounded-md overflow-hidden bg-gray-100 flex-shrink-0"
                      >
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/products/${item.product.id}`}
                          className="block font-semibold leading-snug hover:text-accent-hover transition-colors duration-300"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                          {item.product.category}
                        </p>
                        <p className="text-sm font-semibold mt-2 text-ink">
                          ${item.product.price}
                          <span className="font-normal text-gray-400">
                            {" "}
                            / day
                          </span>
                        </p>
                      </div>
                      <div className="w-24 text-right flex-shrink-0">
                        <p className="font-extrabold">
                          ${item.product.price}
                          <span className="text-xs font-normal text-gray-400">
                            {" "}
                            / day
                          </span>
                        </p>
                        <button
                          type="button"
                          aria-label={`Remove ${item.product.name}`}
                          onClick={() => removeItem(item.product.id)}
                          className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-colors duration-300 mt-1"
                        >
                          <TrashIcon className="w-3.5 h-3.5" />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <aside className="bg-white border border-gray-100 rounded-lg p-7 sticky top-24">
                  <h2 className="text-lg font-bold mb-5">Order Summary</h2>
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>
                      Items ({count})
                    </span>
                    <span>${total}/day</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 mb-6">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-extrabold">${total}/day</span>
                  </div>
                  <a
                    href={`https://wa.me/1234567890?text=${orderMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-whatsapp text-white w-full px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-whatsapp-hover hover:-translate-y-0.5"
                  >
                    <WhatsappIcon className="w-5 h-5" />
                    Place Order on WhatsApp
                  </a>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    No account needed. We&apos;ll confirm availability on
                    WhatsApp.
                  </p>
                </aside>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
