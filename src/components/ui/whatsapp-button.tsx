"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/919157187484", "_blank")
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium">
        WhatsApp Us
      </span>
    </button>
  )
}