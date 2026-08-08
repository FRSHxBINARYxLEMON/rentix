"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

interface CounterProps {
  value: string;
  className?: string;
}

export default function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/([\d,.]+)/);
    if (!match) return;

    const target = parseFloat(match[1].replace(/,/g, ""));
    const suffix = value.replace(match[1], "").trim();
    const hasDecimal = match[1].includes(".");

    const controls = animate(0, target, {
      duration: 2,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: (v) => {
        setDisplay(
          hasDecimal
            ? v.toFixed(1) + suffix
            : Math.floor(v).toLocaleString() + suffix
        );
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}
