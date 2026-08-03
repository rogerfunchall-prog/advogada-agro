import Image from "next/image";
import { nav, serviceCatalog, site, INSTAGRAM_HANDLE, INSTAGRAM_URL, CONTACT_EMAIL, whatsappLink } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-magrin.png"
                alt="Magrin Advogados"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-heading text-lg font-semibold text-white">
                {site.brand}
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {site.metaDescription}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-label text-sm font-semibold text-gold"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          <div>
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-gold">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-gold">
              Áreas de atuação
            </h4>
            <ul className="mt-5 space-y-3">
              {serviceCatalog.slice(0, 5).map((s) => (
                <li key={s.number} className="text-sm text-white/60">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-gold">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink("Olá, gostaria de uma consulta sobre regularização fundiária")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-white/35 md:flex-row">
          <p>© {year} {site.brand}. Todos os direitos reservados.</p>
          <p>Direito Agrário &amp; Fundiário para o Agronegócio</p>
        </div>
      </div>
    </footer>
  );
}
