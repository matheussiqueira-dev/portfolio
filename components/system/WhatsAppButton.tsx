import { FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "@/core/config";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp com Matheus Siqueira"
      className="fixed bottom-6 right-6 z-[1000] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition hover:scale-105"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
