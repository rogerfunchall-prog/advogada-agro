"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero, whatsappLink, CONTACT_EMAIL } from "../content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-wheat-field.jpg"
          alt="Campo de trigo dourado ao entardecer"
          fill
          priority
          className="object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/70 to-forest-deep/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/60 via-transparent to-forest-deep/30" />
      </div>

      {/* decorative floating shapes */}
      <motion.div
        className="pointer-events-none absolute -top-10 right-[8%] h-40 w-40 rounded-blob bg-lime/20 blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-20 left-[6%] h-28 w-28 rounded-blob border border-lime/30"
        animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-lime mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-lime" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] text-cream text-balance"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base md:text-lg text-cream/85 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsappLink("Olá, gostaria de uma consulta sobre regularização fundiária")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-pill bg-lime px-7 py-4 font-label text-sm font-bold uppercase tracking-wide text-forest-deep shadow-[0_10px_30px_rgba(141,198,63,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-lime-light"
            >
              {hero.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-pill border border-cream/40 px-7 py-4 font-label text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:border-lime hover:text-lime"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid max-w-xl grid-cols-2 gap-4"
        >
          {hero.badges.map((b) => (
            <div
              key={b.sub}
              className="rounded-2xl border border-cream/15 bg-cream/10 p-5 backdrop-blur-md"
            >
              <div className="font-heading text-3xl font-semibold text-lime">{b.label}</div>
              <div className="mt-1 text-xs text-cream/80 leading-snug">{b.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-label">Role</span>
        <span className="h-8 w-px bg-cream/40" />
      </motion.div>
    </section>
  );
}
