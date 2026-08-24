import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import BackButton from "@/components/BackButton";
import { MailIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Rentix: Request Gear or Book a Studio",
  },
  description:
    "Get in touch with Rentix. Request equipment rentals, ask questions, book a studio, or get a custom quote for your production.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Rentix: Request Gear or Book a Studio",
    description:
      "Request equipment rentals, ask questions, or get a custom quote for your production.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Rentix",
    description:
      "Request equipment rentals, ask questions, or get a custom quote.",
  },
};

const contactMethods = [
  {
    title: "Email",
    value: "alireda.elzein@gmail.com",
    icon: MailIcon,
  },
  {
    title: "Phone",
    value: "+961 81 904 565",
    icon: PhoneIcon,
  },
];

const contactJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Rentix",
    url: "https://rentix.co/contact",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col lg:flex-row">
        <div className="hidden relative w-full lg:block lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2">
          <video
            src="/vid/studio-preview.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-full lg:w-1/2 px-6 lg:px-14 py-12 lg:py-0 flex flex-col justify-center">
          <div className="max-w-[560px] mx-auto lg:mx-0 w-full">
            <Reveal>
              <div className="mb-8">
                <BackButton />
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight mb-5">
                Let&apos;s talk
                <br />
                about your project
              </h1>
              <p className="text-base text-gray-500 leading-relaxed mb-10">
                Have a question, need a custom rental, or just want to say
                hello? Reach us directly through any of the channels below.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-7">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-md flex items-center justify-center flex-shrink-0 text-ink">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[0.95rem] font-semibold mb-1">
                        {method.title}
                      </h4>
                      <p className="text-sm text-gray-500">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <WhatsAppFloat />

      {contactJsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
    </>
  );
}
