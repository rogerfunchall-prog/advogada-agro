import Reveal from "./Reveal";
import { whyRegularize } from "../content";

export default function WhyRegularize() {
  return (
    <section className="relative bg-cream-light py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="section-eyebrow text-gold-dark mb-4">Entenda o risco</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-heading max-w-2xl text-3xl md:text-[2.6rem] font-semibold leading-tight text-ink text-balance">
            {whyRegularize.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            {whyRegularize.description}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {whyRegularize.items.map((item, i) => (
            <Reveal key={item.number} delay={0.1 + i * 0.1}>
              <div className="group relative h-full rounded-3xl border border-ink/10 bg-white p-8 shadow-[0_10px_40px_rgba(17,17,17,0.05)] transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(17,17,17,0.12)]">
                <span className="font-heading text-5xl font-semibold text-ink/10 transition-colors group-hover:text-gold/50">
                  {item.number}
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <span className="absolute bottom-0 left-8 h-1 w-0 bg-gold transition-all duration-300 group-hover:w-12 rounded-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
