import Image from "next/image";
import Reveal from "./Reveal";
import { socialPosts, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../content";

export default function Social() {
  return (
    <section className="relative bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="section-eyebrow text-gold-dark mb-4">Nas redes</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading max-w-xl text-3xl md:text-[2.6rem] font-semibold leading-tight text-ink text-balance">
              Conteúdo direto do campo para o direito
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-label text-sm font-semibold text-ink hover:text-gold-dark transition-colors"
            >
              Siga {INSTAGRAM_HANDLE} no Instagram →
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {socialPosts.map((post, i) => (
            <Reveal key={post.image} delay={i * 0.1}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_15px_40px_rgba(17,17,17,0.12)]"
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-6 text-sm font-medium leading-snug text-white">
                    {post.caption}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
