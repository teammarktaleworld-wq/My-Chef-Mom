import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constant";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white"
    >
      <MessageCircle size={30} />
    </a>
  );
}