import { marqueeItems } from "../content";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden bg-ink py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-label text-sm font-bold uppercase tracking-[0.2em] text-white/90"
          >
            {item}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
