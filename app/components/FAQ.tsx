"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { faq } from "../content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <Reveal>
            <p className="section-eyebrow text-gold-dark mb-4">Dúvidas comuns</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-3xl md:text-[2.6rem] font-semibold leading-tight text-ink text-balance">
              Perguntas Frequentes
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 space-y-4">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 0.06}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? "border-gold bg-white shadow-md" : "border-ink/10 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-semibold text-ink">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen ? "rotate-45 border-gold bg-gold text-ink" : "border-ink/20 text-ink"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
