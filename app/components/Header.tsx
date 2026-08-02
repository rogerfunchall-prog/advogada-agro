"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { nav, whatsappLink } from "../content";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_4px_24px_rgba(11,31,22,0.08)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/images/logo-magrin.png"
            alt="Magrin Advogados"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="font-heading font-semibold text-forest text-lg tracking-tight hidden sm:block">
            Magrin <span className="italic font-normal">Advogados</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 font-label text-[13px] font-semibold uppercase tracking-wide text-forest-dark">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 hover:text-lime-dark transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-lime after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Olá, gostaria de uma consulta sobre regularização fundiária")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-pill bg-forest px-5 py-2.5 text-sm font-label font-bold text-cream shadow-md hover:bg-lime-dark hover:-translate-y-0.5 transition-all"
        >
          Falar no WhatsApp
        </a>

        <button
          aria-label="Abrir menu"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-forest transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-cream/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-1 px-5 pb-5 pt-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-label font-semibold text-forest-dark border-b border-forest/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink("Olá, gostaria de uma consulta sobre regularização fundiária")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center rounded-pill bg-forest px-5 py-3 text-sm font-label font-bold text-cream"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
