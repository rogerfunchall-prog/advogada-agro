import Image from "next/image";
import Reveal from "./Reveal";
import { finalCta, whatsappLink, CONTACT_EMAIL } from "../content";

export default function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/document-signing.jpg"
          alt="Assinatura de contrato rural"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/90" />
      </div>

      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="section-eyebrow text-lime mb-5">Fale agora</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold leading-tight text-cream text-balance">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-cream/75 leading-relaxed">{finalCta.description}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(finalCta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill bg-lime px-8 py-4 font-label text-sm font-bold uppercase tracking-wide text-forest-deep shadow-[0_10px_30px_rgba(141,198,63,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-lime-light"
            >
              Falar no WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-pill border border-cream/40 px-8 py-4 font-label text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:border-lime hover:text-lime"
            >
              Solicitar consulta por e-mail
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
