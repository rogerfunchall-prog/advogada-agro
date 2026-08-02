# Advogada Agro — Magrin Advogados

Landing page / página de vendas para a Dra. Monique (Magrin Advogados), especializada em **Direito Agrário e Fundiário** para o agronegócio.

Construída com **Next.js 15 + React 19 + TypeScript + Tailwind CSS + Framer Motion**, com layout, animações e estrutura de seções inspiradas no template [Orgarium](https://thememxpro.com/php-template/orgarium/), adaptado com a identidade visual e o conteúdo reais da cliente.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Antes de publicar — checklist

- [ ] Substituir `WHATSAPP_NUMBER` em `app/content.ts` pelo número real (formato `55DDDNUMERO`, somente dígitos).
- [ ] Substituir `CONTACT_EMAIL` em `app/content.ts` pelo e-mail real de contato.
- [ ] Confirmar o link do Instagram (`INSTAGRAM_URL`) em `app/content.ts`.
- [ ] Revisar textos institucionais (OAB, endereço do escritório) — não constavam nos arquivos fornecidos.

## Deploy

Projeto pronto para deploy na [Vercel](https://vercel.com) — basta importar o repositório, sem configuração adicional necessária.

## Estrutura

- `app/content.ts` — todo o conteúdo textual do site (fácil de editar sem mexer nos componentes).
- `app/components/` — seções da página (Hero, Serviços, FAQ, etc).
- `public/images/` — logo e imagens da cliente + fotografias de banco de imagens livre (Unsplash) autohospedadas.
