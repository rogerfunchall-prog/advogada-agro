import Image from "next/image";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { intro, coreServices } from "../content";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-forest-deep py-24 md:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-blob bg-lime/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-blob bg-forest-light/30 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-blob shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/aerial-farmland.jpg"
                  alt="Vista aérea de propriedade rural regularizada"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-lime px-6 py-5 shadow-xl sm:-right-8">
                <div className="font-heading text-3xl font-bold text-forest-deep">
                  <CountUp value={10} suffix="+" />
                </div>
                <div className="text-xs font-label font-semibold uppercase tracking-wide text-forest-deep/80">
                  áreas de atuação
                  <br /> no agronegócio
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="section-eyebrow text-lime mb-4">Quem cuida do seu caso</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-heading text-3xl md:text-[2.6rem] font-semibold leading-tight text-cream text-balance">
                {intro.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-cream/75 leading-relaxed">{intro.description}</p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {coreServices.map((s, i) => (
                <Reveal key={s.title} delay={0.15 + i * 0.06}>
                  <div className="h-full rounded-2xl border border-cream/10 bg-cream/[0.04] p-5 transition-colors hover:border-lime/40 hover:bg-cream/[0.07]">
                    <h3 className="font-heading text-base font-semibold text-lime">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/65">
                      {s.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
