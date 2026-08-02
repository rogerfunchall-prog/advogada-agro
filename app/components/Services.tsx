"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { serviceCatalog } from "../content";

export default function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="servicos" className="relative bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="section-eyebrow text-lime-dark mb-4">Catálogo completo</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-heading max-w-xl text-3xl md:text-[2.6rem] font-semibold leading-tight text-forest-deep text-balance">
                Áreas de atuação em advocacia agro
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Dez frentes de atuação dedicadas integralmente ao produtor rural,
              cooperativas e empresas do agronegócio.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {serviceCatalog.map((cat, i) => (
              <Reveal key={cat.number} delay={i * 0.04}>
                <button
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center justify-between gap-4 rounded-2xl border px-6 py-4 text-left transition-all ${
                    active === i
                      ? "border-lime bg-forest text-cream shadow-lg"
                      : "border-forest/10 bg-white text-forest-deep hover:border-lime/50"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`font-heading text-lg font-semibold ${
                        active === i ? "text-lime" : "text-forest/30"
                      }`}
                    >
                      {cat.number}
                    </span>
                    <span className="font-label text-sm font-semibold">{cat.title}</span>
                  </span>
                  <span className={`text-lg transition-transform ${active === i ? "rotate-90 text-lime" : "text-forest/30"}`}>
                    →
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="lg:sticky lg:top-28 lg:self-start">
            <div className="min-h-[420px] rounded-3xl border border-forest/10 bg-forest-deep p-8 md:p-10 shadow-[0_20px_60px_rgba(11,31,22,0.15)]">
              <AnimatePresence mode="wait">
                {active !== null && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="font-heading text-6xl font-semibold text-lime/20">
                      {serviceCatalog[active].number}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl font-semibold text-cream">
                      {serviceCatalog[active].title}
                    </h3>
                    <ul className="mt-6 space-y-3.5">
                      {serviceCatalog[active].items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-cream/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
