import { MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "@/lib/site";

export default function WhatsappFloat() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp dengan PT Senopati Mega Nusantara"
      className="group fixed bottom-6 right-6 z-[60] flex items-center gap-0 rounded-full bg-[#25d366] p-4 text-white shadow-[0_12px_36px_rgba(37,211,102,0.45)] transition-all duration-300 hover:shadow-[0_16px_44px_rgba(37,211,102,0.6)]"
    >
      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25d366]" aria-hidden />
      <MessageCircle className="relative h-6 w-6" />
      <span className="relative max-w-0 overflow-hidden text-sm font-bold transition-all duration-500 group-hover:ml-2.5 group-hover:max-w-[140px]">
        Chat WhatsApp
      </span>
    </a>
  );
}
