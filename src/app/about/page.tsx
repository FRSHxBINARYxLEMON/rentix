import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FaqItem from "@/components/FaqItem";
import PageHero from "@/components/PageHero";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "About Rentix: Our Mission to Make Pro Gear Accessible",
  },
  description:
    "Learn about Rentix, our story, mission, and the team behind the platform making professional studio gear accessible to every creator.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Rentix: Our Mission",
    description:
      "Our story, mission, and the team behind the platform making professional studio gear accessible to every creator.",
    url: "/about",
  },
  twitter: {
    title: "About Rentix: Our Mission",
    description: "Our story, mission, and the team behind Rentix.",
  },
};

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

const aboutJsonLd = [
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
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://rentix.co/about",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Rentix",
    url: "https://rentix.co/about",
    mainEntity: {
      "@type": "Organization",
      name: "Rentix",
      url: "https://rentix.co",
    },
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title={
            <>
              Making pro gear
              <br />
              accessible to everyone
            </>
          }
          subtitle="We believe every creator deserves access to world-class equipment, without the world-class price tag."
          image={{
            src: "https://images.unsplash.com/photo-1486257293255-8810a92c541f?w=1600&q=80&auto=format&fit=crop",
            alt: "Camera gear",
          }}
        />

        {/* STORY */}
        <section className="py-[120px] max-md:py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-[640px] mx-auto">
              <Reveal>
                <h2 className="text-[2.2rem] font-medium tracking-tight mb-5">
                  Started with a problem we lived
                </h2>
                <p className="text-base text-gray-500 leading-relaxed mb-4">
                  In 2022, we were a small team of filmmakers constantly{" "}
                  <span className="bg-accent/30 text-ink px-1 -mx-1 rounded-sm">
                    struggling to afford the right gear
                  </span>{" "}
                  for every project. We&apos;d max out credit cards renting from
                  traditional shops that charged by the hour and offered zero
                  flexibility.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-4">
                  So we built Rentix, a platform where creators can rent
                  professional-grade cameras, lighting, audio gear, and studio
                  spaces at fair prices, with zero hassle. We handle the
                  maintenance, calibration, and logistics so you can focus on
                  what matters: creating.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-12">
                  Today, we serve over 2,000 creators across the country and
                  maintain a growing catalog of 500+ pieces of equipment from
                  the brands you trust.
                </p>

                <div className="mb-4">
                  {faqs.map((faq, i) => (
                    <Reveal key={faq.question} delay={i * 0.08}>
                      <FaqItem question={faq.question} answer={faq.answer} />
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[120px] max-md:py-20 text-center">
          <div className="max-w-[1280px] mx-auto px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-lg py-20 px-10">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/vid/studio-preview.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-ink/60" />
                <div className="relative z-10">
                  <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-tight text-white mb-5">
                    Want to join the Rentix community?
                  </h2>
                  <p className="text-[1.05rem] text-gray-200 max-w-[500px] mx-auto mb-10 leading-relaxed">
                    Whether you&apos;re a seasoned pro or just starting out, we&apos;d
                    love to help you get the gear you need.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-9 py-4 bg-accent text-[#6b5500] rounded-full font-bold text-[0.95rem] transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />

      {aboutJsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
    </>
  );
}
