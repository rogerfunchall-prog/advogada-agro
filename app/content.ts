// Conteúdo real extraído dos arquivos fornecidos pelo cliente
// (pagina-direito-agrario-fundiario.md e servicos-advocacia-agro.docx)

// TODO(cliente): substituir pelo número de WhatsApp real, formato 55DDDNUMERO (somente dígitos)
export const WHATSAPP_NUMBER = "5500000000000";
export const INSTAGRAM_HANDLE = "@DraAdvAgro";
export const INSTAGRAM_URL = "https://instagram.com/draadvagro";
// TODO(cliente): substituir pelo e-mail real de contato
export const CONTACT_EMAIL = "contato@magrinadvogados.com.br";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const site = {
  brand: "Magrin Advogados",
  tagline: "Direito Agrário & Fundiário",
  metaTitle: "Advogada Direito Agrário e Fundiário | Dra. Monique",
  metaDescription:
    "Advocacia especializada em direito agrário e regularização fundiária rural. Segurança jurídica para produtores e propriedades no agronegócio.",
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Advocacia especializada em agronegócio",
  title: "Direito Agrário e Fundiário para o Agronegócio",
  description:
    "Ter a propriedade rural devidamente regularizada é a base de qualquer operação agrícola segura — sem isso, o produtor fica exposto a disputas de posse, dificuldade de acesso a crédito e restrições em negociações futuras.",
  ctaPrimary: "Falar no WhatsApp",
  ctaSecondary: "Solicitar consulta por e-mail",
  badges: [
    { label: "10", sub: "áreas de atuação no agronegócio" },
    { label: "100%", sub: "dedicação a produtores e cooperativas rurais" },
  ],
};

export const intro = {
  title: "Assessoria jurídica especializada em direito agrário",
  description:
    "Presto assessoria jurídica especializada em direito agrário e fundiário, ajudando produtores, cooperativas e empresas do agronegócio a manter suas propriedades e operações em plena conformidade legal.",
};

export const marqueeItems = [
  "REGULARIZAÇÃO FUNDIÁRIA",
  "USUCAPIÃO RURAL",
  "CONTRATOS DO AGRONEGÓCIO",
  "DIREITO AMBIENTAL RURAL",
  "SUCESSÃO PATRIMONIAL RURAL",
  "CRÉDITO E FINANCIAMENTO RURAL",
  "CONTENCIOSO AGRO",
];

export const whyRegularize = {
  title: "O que é Direito Agrário e Fundiário?",
  description:
    "É a área do direito que trata da regularização, posse e uso da terra rural, incluindo a documentação necessária para comprovar a titularidade e viabilizar operações como financiamento, arrendamento e venda.",
  items: [
    {
      number: "01",
      title: "Acesso a crédito comprometido",
      description:
        "Sem regularização, o imóvel rural pode ficar impedido de acessar linhas de crédito rural essenciais para a operação.",
    },
    {
      number: "02",
      title: "Disputas judiciais",
      description:
        "Propriedades sem documentação atualizada podem ser alvo de disputas judiciais de posse e demarcação a qualquer momento.",
    },
    {
      number: "03",
      title: "Restrições na exportação",
      description:
        "Processos de exportação exigem rastreabilidade da origem da produção, o que fica comprometido sem regularização fundiária.",
    },
  ],
};

export const coreServices = [
  {
    title: "Regularização Fundiária",
    description:
      "Levantamento documental e regularização de imóveis rurais sem matrícula atualizada ou com pendências no registro de imóveis.",
  },
  {
    title: "Usucapião Rural",
    description:
      "Reconhecimento judicial da propriedade para produtores que ocupam e produzem em terra há anos sem título formal.",
  },
  {
    title: "Contratos de Arrendamento e Parceria Rural",
    description:
      "Elaboração e revisão de contratos que protegem tanto o proprietário quanto o produtor arrendatário.",
  },
  {
    title: "Disputas Possessórias e Demarcatórias",
    description:
      "Defesa em conflitos de divisa, invasão ou disputa de posse entre vizinhos e terceiros.",
  },
];

// Catálogo completo — servicos-advocacia-agro.docx
export const serviceCatalog = [
  {
    number: "01",
    title: "Direito Agrário e Fundiário",
    items: [
      "Regularização fundiária de imóveis rurais",
      "Usucapião rural",
      "Contratos de arrendamento e parceria rural",
      "Georreferenciamento (assessoria jurídica correlata)",
      "Disputas possessórias e demarcatórias",
    ],
  },
  {
    number: "02",
    title: "Direito Ambiental Rural",
    items: [
      "Regularização de Cadastro Ambiental Rural (CAR)",
      "Defesa em autuações ambientais (multas do IBAMA/CETESB)",
      "Licenciamento ambiental — assessoria jurídica",
      "Recuperação de Áreas de Preservação Permanente (APP) e Reserva Legal",
      "Compensação ambiental e Termo de Ajustamento de Conduta (TAC)",
    ],
  },
  {
    number: "03",
    title: "Contratos do Agronegócio",
    items: [
      "Contratos de compra e venda de safra (CPR — Cédula de Produto Rural)",
      "Contratos de armazenagem",
      "Contratos de fornecimento de insumos",
      "Contratos de exportação agrícola",
      "Barter (troca de insumos por produção)",
    ],
  },
  {
    number: "04",
    title: "Direito Tributário Rural",
    items: [
      "Planejamento tributário para produtores rurais",
      "ITR (Imposto Territorial Rural) — revisão e defesa",
      "Funrural — discussão e recuperação de créditos",
      "Regimes especiais de tributação para o agro",
    ],
  },
  {
    number: "05",
    title: "Sucessão e Planejamento Patrimonial Rural",
    items: [
      "Holding rural (estruturação societária)",
      "Inventário de imóveis e bens rurais",
      "Planejamento sucessório familiar no agronegócio",
      "Doação com reserva de usufruto de propriedades rurais",
    ],
  },
  {
    number: "06",
    title: "Direito Trabalhista Rural",
    items: [
      "Consultoria preventiva em relações de trabalho rural",
      "Defesa em reclamações trabalhistas rurais",
      "Adequação a normas de segurança do trabalho no campo (NR 31)",
    ],
  },
  {
    number: "07",
    title: "Crédito e Financiamento Rural",
    items: [
      "Assessoria em contratos de crédito rural (Pronaf, Pronamp, custeio)",
      "Renegociação de dívidas rurais",
      "Execuções de Cédula de Crédito Rural (CCR)",
      "Recuperação judicial de produtores rurais",
    ],
  },
  {
    number: "08",
    title: "Contencioso Agro",
    items: [
      "Ações judiciais envolvendo contratos agrícolas",
      "Disputas societárias entre produtores/cooperativas",
      "Litígios envolvendo cooperativas agrícolas",
      "Arbitragem em conflitos do agronegócio",
    ],
  },
  {
    number: "09",
    title: "Compliance e Regulatório",
    items: [
      "Adequação a normas sanitárias e fitossanitárias (MAPA)",
      "Registro de agrotóxicos e insumos — assessoria jurídica",
      "Rastreabilidade e certificação (exportação)",
      "LGPD aplicada a dados de propriedades e produtores",
    ],
  },
  {
    number: "10",
    title: "Consultoria Preventiva",
    items: [
      "Due diligence jurídica para aquisição de terras",
      "Auditoria de contratos em vigor",
      "Assessoria contínua para produtores e cooperativas",
    ],
  },
];

export const audience = {
  title: "Quem precisa desse tipo de assessoria?",
  items: [
    "Produtores rurais com documentação de terra desatualizada",
    "Empresas do agronegócio em processo de aquisição de novas áreas",
    "Famílias em processo de partilha de imóveis rurais",
    "Cooperativas com pendências fundiárias em suas áreas de atuação",
  ],
};

export const process = {
  title: "Como funciona a assessoria",
  steps: [
    {
      number: "01",
      title: "Análise documental",
      description:
        "Levantamento da matrícula, cadeia dominial e situação registral do imóvel.",
    },
    {
      number: "02",
      title: "Diagnóstico jurídico",
      description: "Identificação de pendências e riscos.",
    },
    {
      number: "03",
      title: "Plano de regularização",
      description: "Estratégia jurídica sob medida para o caso.",
    },
    {
      number: "04",
      title: "Execução",
      description:
        "Condução do processo junto a cartórios, órgãos públicos ou Judiciário.",
    },
    {
      number: "05",
      title: "Entrega da documentação regularizada",
      description:
        "Documentação final entregue com plena segurança jurídica.",
    },
  ],
};

export const faq = [
  {
    question: "Minha propriedade sem matrícula atualizada pode ser vendida?",
    answer:
      "Não com segurança jurídica plena. É recomendável regularizar antes de qualquer negociação, para evitar questionamentos futuros sobre a titularidade.",
  },
  {
    question: "Quanto tempo leva um processo de usucapião rural?",
    answer:
      "Varia conforme a via (administrativa ou judicial) e a complexidade da documentação, podendo levar de meses a poucos anos.",
  },
  {
    question: "Terra sem documentação regularizada pode acessar crédito rural?",
    answer:
      "Geralmente não. A maioria das linhas de crédito exige comprovação de titularidade regular do imóvel.",
  },
];

export const finalCta = {
  title: "Fale com uma advogada especializada em agronegócio",
  description:
    "Envie os dados da sua propriedade e receba uma avaliação inicial sobre a situação fundiária do seu imóvel.",
  whatsappMessage:
    "Olá, gostaria de uma consulta sobre regularização fundiária",
};

export const socialPosts = [
  {
    image: "/images/social-post-2.png",
    caption: "O contrato que todo produtor assina sem ler e que pode custar caro",
  },
  {
    image: "/images/social-post-3.png",
    caption: "5 direitos do produtor rural que ninguém te conta",
  },
  {
    image: "/images/social-post-1.png",
    caption: "Sua terra pode estar em disputa e você nem sabe",
  },
];
