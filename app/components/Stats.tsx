import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { value: 10, suffix: "+", label: "Áreas de atuação no agronegócio" },
  { value: 5, suffix: "", label: "Etapas na condução de cada caso" },
  { value: 4, suffix: "", label: "Perfis de cliente atendidos" },
  { value: 100, suffix: "%", label: "Dedicação ao direito agrário e fundiário" },
];

export default function Stats() {
  return (
    <section className="relative bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
              <div className="font-heading text-4xl md:text-5xl font-bold text-gold">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-white/60 leading-snug">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
