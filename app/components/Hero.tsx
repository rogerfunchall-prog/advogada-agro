"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero, whatsappLink, CONTACT_EMAIL } from "../content";
import RevealWords from "./RevealWords";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-banner.png"
          alt="Dra. Magrin Advogados no campo ao entardecer"
          fill
          priority
          className="object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-soft/90 via-ink/60 to-ink-soft/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-soft/65 via-transparent to-ink-soft/30" />
      </div>

      {/* decorative brand blobs */}
      <motion.div
        className="pointer-events-none absolute -top-16 right-[6%] h-64 w-64 rounded-blob bg-brand/25 blur-md"
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 left-[4%] h-36 w-36 rounded-blob border-2 border-brand/40"
        animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-brand mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand" />
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white text-balance max-w-4xl">
            <RevealWords text={hero.title} delay={0.15} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed"
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
              className="group inline-flex items-center gap-2 rounded-pill bg-white px-7 py-4 font-label text-sm font-bold uppercase tracking-wide text-ink shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-colors hover:bg-brand"
            >
              {hero.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-pill border border-white/50 px-7 py-4 font-label text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-brand hover:text-brand"
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
              className="rounded-2xl bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="font-heading text-3xl font-semibold text-ink">
                {b.label}
                <span className="text-brand-dark">.</span>
              </div>
              <div className="mt-1 text-xs text-ink/60 leading-snug">{b.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-label">Role</span>
        <span className="h-8 w-px bg-white/40" />
      </motion.div>
    </section>
  );
}
