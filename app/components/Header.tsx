"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { nav, whatsappLink, CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* top info bar */}
      <div
        className={`hidden md:block overflow-hidden bg-ink transition-all duration-300 ${
          scrolled ? "h-0" : "h-9"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-xs text-white/70 md:px-8">
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold transition-colors">
              {CONTACT_EMAIL}
            </a>
            <span className="hidden lg:inline">Direito Agrário &amp; Fundiário para o Agronegócio</span>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      {/* main header */}
      <header
        className={`bg-cream-light transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(17,17,17,0.08)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
          <a href="#inicio" className="flex items-center gap-2.5">
            <Image
              src="/images/logo-magrin.png"
              alt="Magrin Advogados"
              width={44}
              height={44}
              className="rounded-full"
              priority
            />
            <span className="font-heading font-semibold text-ink text-lg tracking-tight hidden sm:block">
              Magrin <span className="italic font-normal">Advogados</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 font-label text-[13px] font-semibold uppercase tracking-wide text-ink">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 hover:text-gold-dark transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink("Olá, gostaria de uma consulta sobre regularização fundiária")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-pill bg-ink px-6 py-3 font-label text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-gold hover:text-ink"
          >
            Falar no WhatsApp
          </a>

          <button
            aria-label="Abrir menu"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-cream-light"
            >
              <div className="flex flex-col gap-1 px-5 pb-5 pt-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2.5 font-label font-semibold text-ink border-b border-ink/10"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={whatsappLink("Olá, gostaria de uma consulta sobre regularização fundiária")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-center rounded-pill bg-ink px-5 py-3 text-sm font-label font-bold text-white"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
