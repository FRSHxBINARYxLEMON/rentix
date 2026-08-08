"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { BagIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const { count } = useCart();

  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparentStart = isHome || pathname === "/contact";
  const solid = !transparentStart || scrolled;

  const brandColor = solid
    ? "text-ink"
    : pathname === "/contact"
      ? "text-accent-bright"
      : "text-white";

  const linkClasses = (active: boolean) =>
    `relative text-[1.1rem] font-medium transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:w-0 hover:after:w-full ${
      active ? "after:w-full" : ""
    } md:text-sm ${
      solid
        ? "text-ink md:text-ink/80 md:hover:text-ink"
        : "text-ink md:text-white/80 md:hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        solid
          ? "bg-white py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group relative flex items-center gap-2.5 z-10">
          <svg
            viewBox="0 0 331.78751 331.78751"
            aria-hidden
            className={`h-9 w-auto fill-current transition-colors duration-300 ${brandColor} group-hover:text-accent-bright`}
          >
            <g transform="translate(60.854168,17.462503)">
              <path d="M 1.1827171,52.002541 38.332642,96.105417 H 117.0344 c 13.85658,0 25.01199,11.155403 25.01199,25.011983 0,13.85658 -11.15541,25.01199 -25.01199,25.01199 H 79.179211 l 81.810559,98.73057 h 47.90668 l -60.71761,-72.58913 c 21.6842,-9.93027 36.67657,-31.7913 36.67657,-57.28295 0,-34.893845 -28.09076,-62.985339 -62.98461,-62.985339 z m 0.249524,57.315979 v 65.79911 l 59.7040839,69.74233 h 60.643465 z" />
            </g>
          </svg>
          <span
            className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${brandColor} group-hover:text-accent-bright`}
          >
            Rentix
          </span>
        </Link>

        <div
          className={`fixed top-0 right-0 h-screen w-[80%] max-w-[360px] bg-paper flex flex-col justify-center gap-6 px-10 shadow-[-10px_0_40px_rgba(0,0,0,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]
            md:static md:h-auto md:w-auto md:max-w-none md:bg-transparent md:flex-row md:items-center md:gap-9 md:px-0 md:justify-end md:shadow-none md:translate-x-0
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          ><Link
            href="/products"
            onClick={() => setMobileOpen(false)}
            className={linkClasses(pathname === "/products")}
          >
            Products
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className={linkClasses(pathname === "/about")}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className={linkClasses(pathname === "/contact")}
          >
            Contact
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            onClick={() => setMobileOpen(false)}
            className={`relative flex items-center justify-center w-[42px] h-[42px] rounded-full transition-all duration-300 ${
              solid
                ? "bg-black/5 text-ink/80 hover:bg-accent hover:text-ink"
                : "bg-white/10 text-white/80 hover:bg-accent hover:text-ink"
            }`}
          >
            <BagIcon className="w-[22px] h-[22px]" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-accent text-ink text-[0.65rem] font-bold rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          className="md:hidden flex flex-col justify-center gap-1.5 w-[42px] h-[42px] p-2.5 z-10 cursor-pointer"
        >
          <span
            className={`block h-0.5 rounded transition-all duration-300 ${
              mobileOpen
                ? "bg-ink translate-y-[8px] rotate-45"
                : solid
                  ? "bg-ink"
                  : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 rounded transition-all duration-300 ${
              mobileOpen ? "bg-ink opacity-0" : solid ? "bg-ink" : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 rounded transition-all duration-300 ${
              mobileOpen
                ? "bg-ink -translate-y-[8px] -rotate-45"
                : solid
                  ? "bg-ink"
                  : "bg-white"
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
