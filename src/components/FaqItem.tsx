"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink cursor-pointer bg-transparent border-none"
      >
        {question}
        <span className="text-2xl font-light flex-shrink-0 transition-transform duration-300">
          {open ? "\u2212" : "+"}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm text-gray-500 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
