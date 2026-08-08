import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import FaqItem from "@/components/FaqItem";
import SectionHeader from "@/components/SectionHeader";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import {
  CameraIcon,
  LightbulbIcon,
  MicIcon,
  VideoIcon,
  LayoutIcon,
  BoxIcon,
  SearchIcon,
  CalendarIcon,
  StarIcon,
} from "@/components/Icons";
import { products } from "@/data/products";

export const metadata: Metadata = {
  description:
    "Rent professional cameras, lighting, microphones, and studio equipment. Flexible plans, fast delivery, and top-tier gear for photographers and filmmakers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rentix: Premium Studio Gear Rentals",
    description:
      "Rent professional cameras, lighting, microphones, and studio equipment. Flexible plans, fast delivery.",
    url: "/",
  },
  twitter: {
    title: "Rentix: Premium Studio Gear Rentals",
    description:
      "Rent professional cameras, lighting, microphones, and studio equipment.",
  },
};

const brands = [
  { name: "SONY", src: "/imgs/brands/sony.svg" },
  { name: "CANON", src: "/imgs/brands/canon.svg" },
  { name: "NIKON", src: "/imgs/brands/nikon.svg" },
  { name: "GOPRO", src: "/imgs/brands/gopro.webp" },
  { name: "DJI", src: "/imgs/brands/dji.svg" },
  { name: "SHURE", src: "/imgs/brands/shure.svg" },
  { name: "RODE", src: "/imgs/brands/rode.png" },
  { name: "APUTURE", src: "/imgs/brands/aputure.webp" },
  { name: "NANLITE", src: "/imgs/brands/nanlite.webp" },
  { name: "GODOX", src: "/imgs/brands/godox.webp" },
];

interface Service {
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
  glow?: boolean;
}

const services: Service[] = [
  {
    title: "Cameras & Lenses",
    desc: "DSLRs, mirrorless, cinema cameras and a full range of lenses for every focal length and style.",
    icon: CameraIcon,
  },
  {
    title: "Lighting Kits",
    desc: "LED panels, softboxes, ring lights, strobes, and full lighting rigs for any setup or mood.",
    icon: LightbulbIcon,
    glow: true,
  },
  {
    title: "Audio & Mics",
    desc: "Shotgun mics, lavaliers, wireless systems, and audio recorders for broadcast-quality sound.",
    icon: MicIcon,
  },
  {
    title: "Video Production",
    desc: "Gimbals, tripods, sliders, monitors, and full video production kits ready to go.",
    icon: VideoIcon,
  },
  {
    title: "Studio Spaces",
    desc: "Backdrops, cyclorama walls, prop furniture, and fully equipped studios by the hour or day.",
    icon: LayoutIcon,
  },
  {
    title: "Accessories",
    desc: "Batteries, memory cards, bags, mounts, clamps, all the essentials that complete your kit.",
    icon: BoxIcon,
  },
];

const steps = [
  {
    title: "Browse & Choose",
    desc: "Explore our catalog of professional gear and pick exactly what you need for your shoot.",
    icon: SearchIcon,
  },
  {
    title: "Book Your Dates",
    desc: "Select your rental period, daily, weekly, or custom. We'll confirm availability instantly.",
    icon: CalendarIcon,
  },
  {
    title: "Shoot & Return",
    desc: "Pick up or get it delivered. Create your best work, then send it back when you're done.",
    icon: CameraIcon,
  },
];

const collections = [
  {
    title: "Lighting Gadgets",
    category: "Lighting",
  },
  {
    title: "Audio Gadgets",
    category: "Audio",
  },
];

const faqs = [
  {
    question: "How does delivery work?",
    answer:
      "We offer free delivery within 25 miles of our studio. For longer distances, a flat shipping fee applies. Same-day delivery available for orders placed before 12 PM.",
  },
  {
    question: "What if gear gets damaged?",
    answer:
      "All rentals include optional damage protection. If you opt in, you're covered for accidental damage up to the full replacement value of the equipment.",
  },
  {
    question: "Can I extend my rental?",
    answer:
      "Absolutely. Contact us before your return date and we'll extend your rental at the same daily rate, no hidden fees, no hassle.",
  },
];

function BrandLogo({ name, src }: { name: string; src?: string }) {
  if (src) {
    return (
      <div className="h-16 w-44 flex items-center justify-center flex-shrink-0">
        <img
          src={src}
          alt={name}
          className="max-h-full max-w-full object-contain opacity-35 grayscale transition-all duration-300 hover:opacity-100"
        />
      </div>
    );
  }
  return (
    <svg
      className="h-7 w-auto opacity-35 transition-opacity duration-300 hover:opacity-100 flex-shrink-0"
      viewBox="0 0 200 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="100"
        y="28"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill="#000"
      >
        {name}
      </text>
    </svg>
  );
}

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rentix",
    url: "https://rentix.co",
    logo: "https://rentix.co/imgs/rentix-logo.svg",
    description:
      "Premium studio gear rentals for photographers, filmmakers, and content creators.",
    sameAs: [
      "https://www.instagram.com/rentix",
      "https://twitter.com/rentix",
      "https://www.youtube.com/rentix",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-234-5678",
      contactType: "customer service",
      email: "hello@rentix.co",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rentix",
    image: "https://rentix.co/imgs/rentix-logo.svg",
    url: "https://rentix.co",
    telephone: "+1-555-234-5678",
    email: "hello@rentix.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Creator Lane, Suite 400",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90012",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.041,
      longitude: -118.24,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rentix.co/",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Rentix Studio Gear Overview",
    description:
      "A look inside Rentix, professional studio gear rentals for creators.",
    thumbnailUrl: "https://rentix.co/assets/imgs/rentix-og.jpg",
    contentUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-creator-setting-up-a-video-shooting-in-a-studio-49586-large.mp4",
    uploadDate: "2026-01-01T00:00:00+00:00",
    duration: "PT30S",
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Rent Studio Gear from Rentix",
    description:
      "Rent professional photography and videography equipment in 3 simple steps.",
    step: [
      {
        "@type": "HowToStep",
        name: "Browse & Choose",
        text: "Explore our catalog of professional gear and pick exactly what you need for your shoot.",
      },
      {
        "@type": "HowToStep",
        name: "Book Your Dates",
        text: "Select your rental period, daily, weekly, or custom. We will confirm availability instantly.",
      },
      {
        "@type": "HowToStep",
        name: "Shoot & Return",
        text: "Pick up or get it delivered. Create your best work, then send it back when you are done.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rentix",
    url: "https://rentix.co",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-start overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80"
              className="w-full h-full object-cover"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-creator-setting-up-a-video-shooting-in-a-studio-49586-large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60 z-10" />
          </div>

          <div className="relative z-20 w-full text-center text-white px-6">
            <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full mb-7">
              <div className="flex -space-x-2.5">
                {["JK", "SP", "MT"].map((initials) => (
                  <span
                    key={initials}
                    className="w-8 h-8 rounded-full bg-white/20 border border-white/30 text-[0.65rem] font-semibold text-white flex items-center justify-center"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center text-accent">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <StarIcon key={star} />
                  ))}
                  <span className="text-xs font-semibold text-white/90 ml-0.5">
                    4.8
                  </span>
                </div>
                <span className="text-xs font-medium text-white/90">
                  Trusted by many
                </span>
              </div>
            </div>
            <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tighter">
              All the needed gears
              <br />
              available for your <span className="text-white">perfect shoot</span>
            </h1>
            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-9 py-4 bg-accent text-[#6b5500] rounded-full font-bold text-[0.95rem] transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
              >
                <svg
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M255.995,169.648c19.802,0,35.844-16.174,35.844-36.146c0-19.981-16.042-36.172-35.844-36.172 c-19.797,0-35.848,16.191-35.848,36.172C220.147,153.475,236.198,169.648,255.995,169.648z"/>
                  <path d="M143.528,233.512h123.858h101.068c7.938,0.009,15.193-3.265,20.348-8.499 c5.19-5.198,8.402-12.462,8.402-20.392V70.734c0-7.912-3.212-15.193-8.402-20.392c-5.155-5.216-12.41-8.507-20.348-8.507H337.34 c-2.511,0.009-4.848-1.488-5.925-3.912l-9.312-20.856C317.487,6.722,307.242,0,295.869,0h-79.752 c-11.374,0-21.617,6.722-26.243,17.066l-9.316,20.856c-1.076,2.424-3.409,3.921-5.92,3.912h-31.109 c-7.92,0-15.198,3.291-20.357,8.507c-5.173,5.199-8.385,12.48-8.385,20.392v133.888c0,7.93,3.212,15.194,8.385,20.392 C128.331,230.247,135.608,233.521,143.528,233.512z M349.856,74.146H369.6v19.745h-19.744V74.146z M209.956,87.161 c11.736-11.859,28.063-19.246,46.04-19.228c17.964-0.018,34.299,7.369,46.035,19.228c11.758,11.858,19.044,28.278,19.036,46.342 c0.009,18.047-7.277,34.483-19.036,46.316c-11.736,11.868-28.072,19.254-46.035,19.254c-17.968,0-34.304-7.378-46.04-19.254 c-11.758-11.833-19.044-28.269-19.036-46.316C190.911,115.439,198.197,99.02,209.956,87.161z"/>
                  <polygon points="296.329,286.96 326.199,286.96 326.199,253.247 185.796,253.247 185.796,286.96 215.666,286.96 105.142,485.867 129.788,500.263 237.533,324.646 241.725,512 270.27,512 274.462,324.646 382.212,500.263 406.858,485.867"/>
                </svg>
                Browse Gears
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 bg-white/5 text-white border border-white/20 rounded-full font-semibold text-[0.95rem] backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/40"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 text-xs font-medium tracking-[2px] uppercase">
            Scroll
            <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-scroll-down" />
          </div>
        </section>

        {/* BRANDS MARQUEE */}
        <Reveal className="border-b border-gray-100 py-[120px]">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-8">
              Best brands for your gear
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-[120px] bg-gradient-to-r from-white to-transparent z-[2]" />
            <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-[120px] bg-gradient-to-l from-white to-transparent z-[2]" />
            <div className="flex items-center gap-[60px] w-max animate-marquee">
              {[...brands, ...brands].map((brand, i) => (
                <BrandLogo key={i} name={brand.name} src={brand.src} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* SERVICES */}
        <section className="py-[120px] max-md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <Reveal>
              <SectionHeader
                title="Everything you need to shoot"
                subtitle="From cameras to complete studio setups, we've got every angle covered."
              />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={(i % 5) * 0.08}>
                  <div className="relative flex flex-col rounded-lg p-10 max-md:text-center">
                    <div className="relative z-10 w-14 h-14 flex items-center justify-center mb-6 max-md:mx-auto">
                      {service.glow && (
                        <div
                          aria-hidden
                          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(233,197,81,0.3)_0%,rgba(233,197,81,0.15)_35%,transparent_65%)]"
                        />
                      )}
                      <service.icon
                        className={`relative z-10 w-6 h-6 ${
                          service.glow ? "text-accent" : ""
                        }`}
                      />
                    </div>
                    <h3 className="relative z-10 text-xl font-bold mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="relative z-10 text-sm text-gray-500 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED COLLECTIONS */}
        <section className="py-[120px] max-md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            {collections.map((collection) => {
              const items = products.filter(
                (p) => p.category === collection.category
              );
              return (
                <div key={collection.category} className="mb-20 last:mb-0">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <h2 className="text-[1.5rem] font-extrabold tracking-tight">
                      {collection.title}
                    </h2>
                    <Link
                      href="/products"
                      className="inline-flex items-center bg-ink text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-ink/80 hover:-translate-y-0.5"
                    >
                      Browse All
                    </Link>
                  </div>
                  <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-px-6 -mx-6 px-6 pb-2">
                    {items.map((product) => (
                      <div
                        key={product.id}
                        className="w-[280px] flex-shrink-0 snap-start"
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-[120px] max-md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <Reveal>
              <SectionHeader title="Rent in 3 simple steps" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative max-w-[900px] mx-auto">
                <div
                  aria-hidden
                  className="absolute left-0 right-0 top-[22px] md:top-[30px] h-1 rounded-full bg-gray-100"
                />
                <div
                  aria-hidden
                  className="absolute left-0 right-0 top-[22px] md:top-[30px] h-1 rounded-full bg-accent-bright story-progress"
                />
                <div className="flex items-start">
                  {steps.map((step, i) => (
                    <div
                      key={step.title}
                      className="flex-1 text-center px-2 md:px-7"
                    >
                      <div
                        className={`relative z-10 mx-auto mb-6 md:mb-8 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-200 bg-gray-50 text-ink story-circle-${
                          i + 1
                        }`}
                      >
                        <step.icon
                          className={`w-6 h-6 md:w-7 md:h-7 story-icon-${
                            i + 1
                          }`}
                        />
                      </div>
                      <h3 className="text-[1.05rem] md:text-[1.15rem] font-bold mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-[120px] max-md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <Reveal>
              <SectionHeader title="Frequently asked questions" />
            </Reveal>
            <div className="max-w-[720px] mx-auto">
              {faqs.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 0.08}>
                  <FaqItem question={faq.question} answer={faq.answer} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />

      {homeJsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
    </>
  );
}
