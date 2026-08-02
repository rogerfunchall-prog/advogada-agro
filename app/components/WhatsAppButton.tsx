"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "../content";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink("Olá, gostaria de uma consulta sobre regularização fundiária")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 32 32" className="h-7 w-7 relative" fill="currentColor">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.657 4.522 1.797 6.383L4 29l7.828-1.746A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.988 16.845c-.294.828-1.457 1.516-2.386 1.71-.634.13-1.463.234-4.253-.914-3.567-1.468-5.86-5.088-6.038-5.325-.177-.237-1.44-1.918-1.44-3.658s.913-2.594 1.238-2.95c.325-.355.71-.443.947-.443.237 0 .474.002.68.012.219.01.512-.083.8.61.294.71.998 2.45 1.086 2.628.089.178.148.386.03.622-.118.237-.178.386-.355.593-.178.208-.373.464-.533.622-.178.178-.363.37-.156.727.207.355.92 1.518 1.976 2.46 1.358 1.21 2.502 1.585 2.858 1.763.355.178.563.148.77-.089.207-.237.888-1.036 1.126-1.392.237-.355.474-.296.799-.178.325.118 2.06.972 2.414 1.148.355.178.591.267.68.415.089.148.089.858-.207 1.687Z" />
      </svg>
    </motion.a>
  );
}
