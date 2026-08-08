"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "./Icons";

export default function BackButton({ light = false }: { light?: boolean }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back"
      className={`mb-8 inline-flex items-center gap-2.5 text-sm font-semibold transition-colors duration-300 cursor-pointer ${
        light ? "text-white/90 hover:text-white" : "text-ink/70 hover:text-ink"
      }`}
    >
      <ArrowLeftIcon className="w-5 h-5" />
      Back
    </button>
  );
}
