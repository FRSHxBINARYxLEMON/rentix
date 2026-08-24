import { WhatsappIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/96181904565"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-[30px] right-[30px] w-16 h-16 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] z-[9999] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)]"
    >
      <WhatsappIcon />
    </a>
  );
}
