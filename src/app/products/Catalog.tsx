"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import { SearchIcon } from "@/components/Icons";

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = products
      .map((p) => p.category)
      .filter((c, i, arr) => arr.indexOf(c) === i)
      .sort();
    return cats;
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return products.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [query, category]);

  const filterBtnClass = (c: string) =>
    `px-5 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
      category === c
        ? "bg-accent text-[#6b5500] border-accent"
        : "bg-paper text-gray-600 border-gray-200 hover:border-gray-400 hover:text-ink"
    }`;

  return (
    <>
      <PageHero
        title={
          <>
            Browse our full catalog,
            <br />
            all available for rent
          </>
        }
        subtitle=""
      />
      <section className="pb-[120px] pt-10 max-md:pb-20 max-md:pt-6">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-10">
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 mb-5 transition-all duration-300 focus-within:border-gray-400">
              <SearchIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search gear..."
                className="flex-1 bg-transparent outline-none text-base text-ink placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setCategory("All")} className={filterBtnClass("All")}>
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={filterBtnClass(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center py-20 text-gray-400 text-[1.05rem]">
              No products found matching your search.
            </p>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={category + query}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
              >
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
    </>
  );
}
