interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      {label && (
        <span
          className={`inline-block text-xs font-bold tracking-[3px] uppercase mb-4 ${
            dark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[1.05rem] max-w-[560px] mx-auto mt-4 leading-relaxed ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
