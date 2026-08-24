import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const rentals = ["Cameras", "Lighting", "Audio", "Accessories"];

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-14 mb-[60px] max-sm:text-center">
          <div className="flex flex-col items-start max-sm:items-center">
            <div className="text-2xl font-extrabold tracking-tight mb-4 text-accent">
              <Image
                src="/imgs/rentix-logo.svg"
                alt="Rentix Logo"
                width={32}
                height={32}
                unoptimized
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[300px]">
              Premium studio gear rentals for photographers, filmmakers, and
              content creators. Professional equipment, flexible plans, instant
              availability.
            </p>
          </div>
          <div className="flex flex-col items-start max-sm:items-center">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
              Company
            </h4>
            <Link
              href="/about"
              className="text-sm text-gray-400 py-1.5 hover:text-white transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-400 py-1.5 hover:text-white transition-all duration-300"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col items-start max-sm:items-center">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
              Rentals
            </h4>
            {rentals.map((rental) => (
              <Link
                key={rental}
                href="/products"
                className="text-sm text-gray-400 py-1.5 hover:text-white transition-all duration-300"
              >
                {rental}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start max-sm:items-center">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
              Support
            </h4>
            <Link
              href="/contact#faq"
              className="text-sm text-gray-400 py-1.5 hover:text-white transition-all duration-300"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 py-1.5 hover:text-white transition-all duration-300"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 py-1.5 hover:text-white transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 py-1.5 hover:text-white transition-all duration-300"
            >
              Rental Policy
            </Link>
          </div>
        </Reveal>

        <div className="pt-10 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2026 Rentix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
