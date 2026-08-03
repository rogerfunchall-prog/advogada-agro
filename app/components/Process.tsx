import Reveal from "./Reveal";
import { process } from "../content";

export default function Process() {
  return (
    <section id="como-funciona" className="relative bg-cream-light py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="section-eyebrow text-gold-dark mb-4 text-center">Passo a passo</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl md:text-[2.6rem] font-semibold leading-tight text-ink text-balance">
            {process.title}
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-ink/10 md:left-1/2" />
          <div className="space-y-10 md:space-y-0">
            {process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center md:gap-0 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  } md:mb-4`}
                >
                  <div className="md:w-1/2 md:px-10">
                    <div
                      className={`rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_30px_rgba(17,17,17,0.05)] ${
                        i % 2 === 1 ? "md:text-right" : ""
                      }`}
                    >
                      <span className="font-heading text-3xl font-semibold text-gold-dark">
                        {step.number}
                      </span>
                      <h3 className="mt-2 font-heading text-lg font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <span className="absolute left-6 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-cream-light md:left-1/2" />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
