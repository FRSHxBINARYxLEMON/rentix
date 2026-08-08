"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeroProps {
  title: ReactNode;
  subtitle: string;
  image?: { src: string; alt: string };
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="pt-[160px] pb-2 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-tight leading-tight mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="text-[1.1rem] text-gray-500 max-w-[560px] mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      {image && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative aspect-[16/9] max-w-[980px] mx-auto mt-14 rounded-lg overflow-hidden"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 980px"
            className="object-cover"
          />
        </motion.div>
      )}
    </section>
  );
}
