import newsOutubroRosa2026Img from "@/assets/news-outubro-rosa-2026.webp";
import newsOutubraRosaImg from "@/assets/news-outubro-rosa.png";
import newsCicloSaberImg from "@/assets/news-ciclo-saber.png";
import newsJpr2025Img from "@/assets/news-jpr-2025.png";

export interface NewsHighlightItem {
  label: string;
  value: string;
  italic?: boolean;
}

export interface NewsHighlight {
  title: string;
  items: NewsHighlightItem[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  /** Data de exibição, ex: "8 de setembro de 2026" */
  date: string;
  /** Data em formato ISO para SEO/schema, ex: "2026-09-08" */
  dateISO: string;
  category: string;
  image: string;
  /** Parágrafos do corpo. Aceita HTML controlado (<strong>, <em>, <u>). */
  content: string[];
  /** Bloco de destaque opcional (ex: informações do evento). */
  highlight?: NewsHighlight;
  credit?: string | null;
  seoTitle?: string;
  seoDescription?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "outubro-rosa-2026",
    title: "Outubro Rosa São Mateus lança campanha 2026",
    excerpt:
      "Com o conceito “Você faz parte dessa história”, o movimento chega ao quarto ano reunindo empresas, instituições, profissionais e comunidade em uma grande rede de cuidado. O Dia D será em 10 de outubro, no SESC São Mateus.",
    date: "8 de setembro de 2026",
    dateISO: "2026-09-08",
    category: "Saúde",
    image: newsOutubroRosa2026Img,
    content: [
      "O Outubro Rosa São Mateus lançou oficialmente sua campanha 2026 durante uma coletiva de imprensa que reuniu parceiros, profissionais de comunicação, embaixadoras e representantes de instituições que integram o movimento. Neste ano, a campanha traz como conceito <strong>“Você faz parte dessa história”</strong> e celebra uma trajetória construída coletivamente ao longo de quatro anos de mobilização pela prevenção e pelo cuidado.",
      "Mais do que apresentar a programação deste ano, o encontro foi também um momento de olhar para a trajetória do Outubro Rosa São Mateus e reconhecer todas as pessoas e organizações que ajudaram a transformar a iniciativa em uma mobilização que hoje envolve diferentes setores da cidade.",
      "Durante a coletiva, imagens e registros das edições anteriores mostraram ações, bastidores, participação da comunidade e momentos que marcaram a história da campanha. A imprensa também recebeu um agradecimento especial pelo papel desempenhado na ampliação das informações sobre prevenção e na aproximação da campanha com a população.",
      "A proposta para 2026 é continuar ampliando não apenas o número de participantes, mas principalmente o <strong>alcance da informação, a conscientização e o envolvimento da sociedade</strong>.",
      "Ao longo dos meses de setembro e outubro, diferentes ações de mobilização serão realizadas com a participação de empresas, instituições, profissionais, parceiros e comunidade.",
      "O principal encontro da programação já tem data marcada: o <strong>Dia D do Outubro Rosa São Mateus 2026 será realizado no dia 10 de outubro, no SESC</strong>, reunindo em um mesmo espaço ações voltadas à prevenção, informação, cuidado e acolhimento.",
      "A campanha também destacou a importância da rede de parceiros que, mais uma vez, se une para tornar as ações possíveis. São empresas e instituições que contribuem de diferentes maneiras, oferecendo estrutura, serviços, recursos, mobilização, comunicação e trabalho em favor de uma causa comum.",
      "Outro momento especial do lançamento foi a apresentação das <strong>Embaixadoras do Outubro Rosa São Mateus 2026</strong>. Mulheres que passam a integrar a mobilização ajudando a ampliar a voz da campanha, aproximar a mensagem de diferentes públicos e fortalecer a rede de cuidado que vem sendo construída na cidade.",
      "A mensagem apresentada no lançamento traduz justamente esse espírito coletivo: cada pessoa pode encontrar uma maneira de participar. Seja oferecendo um serviço, mobilizando uma equipe, apoiando uma ação, compartilhando uma informação ou incentivando outra mulher a cuidar da própria saúde.",
      "Depois de quatro anos, o Outubro Rosa São Mateus reforça que a campanha já não é construída por uma única empresa ou instituição. <strong>É uma história construída pela cidade.</strong>",
      "E, em 2026, o convite se renova: <strong>Você faz parte dessa história.</strong>",
    ],
    highlight: {
      title: "Dia D — Outubro Rosa São Mateus 2026",
      items: [
        { label: "Data", value: "10 de outubro de 2026" },
        { label: "Local", value: "SESC São Mateus" },
        { label: "Campanha", value: "Outubro Rosa São Mateus 2026" },
        { label: "Conceito", value: "Você faz parte dessa história.", italic: true },
      ],
    },
    credit: null,
    seoTitle: "Outubro Rosa São Mateus 2026 – Med Imagem",
    seoDescription:
      "Campanha Outubro Rosa São Mateus 2026 com o conceito “Você faz parte dessa história”. Dia D em 10 de outubro, no SESC São Mateus. Prevenção do câncer de mama.",
  },
  {
    slug: "outubro-rosa-2025",
    title: "Outubro Rosa Edição 2025 – Esse laço nunca fez tanto sentido!",
    excerpt:
      "Med Imagem, Clínica Salles e CEDIM se unem novamente para oferecer mamografias gratuitas a mulheres da região de São Mateus. Em 2024, mais de 10 mil mulheres foram atendidas e 1.001 exames realizados. O Dia D acontece em 4 de outubro no SESC São Mateus.",
    date: "24 de setembro de 2025",
    dateISO: "2025-09-24",
    category: "Saúde",
    image: newsOutubraRosaImg,
    content: [
      "A Med Imagem, junto com a Clínica Salles e o CEDIM (Centro de Diagnóstico de Imagem), se unem mais uma vez para levar saúde e prevenção às mulheres do Norte Capixaba. O Outubro Rosa Edição 2025 traz uma ação de impacto: mamografias gratuitas para mulheres da região.",
      "A campanha tem crescido ano a ano. Em 2023, foram 4.200 mulheres atendidas e 732 mamografias realizadas. Em 2024, o número saltou para mais de 10 mil mulheres e 1.001 exames — um crescimento que reflete o compromisso das clínicas parceiras com a saúde feminina.",
      "O Dia D desta edição acontece em 4 de outubro de 2025, das 8h às 12h, no SESC São Mateus. Mulheres que se enquadram nos critérios de rastreamento podem comparecer e realizar o exame gratuitamente.",
      "A Med Imagem reafirma seu compromisso com a saúde da mulher e convida a comunidade a participar, divulgar e apoiar essa iniciativa. Esse laço nunca fez tanto sentido!",
    ],
    credit: "Foto: Welington Prado – Tc Digital",
    seoDescription:
      "Outubro Rosa 2025: Med Imagem, Clínica Salles e CEDIM oferecem mamografias gratuitas em São Mateus. Dia D em 4 de outubro no SESC.",
  },
  {
    slug: "ciclo-do-saber-2025",
    title: "Ciclo do Saber – Saúde Mental no Trabalho",
    excerpt:
      "A Med Imagem apoiou o evento realizado pelo Senac no SESC São Mateus sobre saúde mental no ambiente de trabalho. A programação abordou prevenção, intervenção e o papel da liderança frente ao bem-estar dos colaboradores.",
    date: "21 de agosto de 2025",
    dateISO: "2025-08-21",
    category: "Evento",
    image: newsCicloSaberImg,
    content: [
      "Em 13 de agosto de 2025, o SESC São Mateus sediou mais uma edição do Ciclo do Saber, iniciativa do Senac voltada ao desenvolvimento humano e profissional. O tema desta edição foi “Saúde Mental no Trabalho: Prevenção, Intervenção e o Papel da Liderança”.",
      "O evento contou com o apoio da Med Imagem, do CEDIM e da Clínica Salles — instituições que compartilham o compromisso com a saúde integral da população de São Mateus e região.",
      "A palestra abordou estratégias práticas para identificar sinais de adoecimento mental no ambiente corporativo, além de ressaltar a importância da liderança consciente e do cuidado preventivo com os colaboradores.",
      "A Med Imagem acredita que saúde vai além dos exames de imagem. Participar de eventos como o Ciclo do Saber reforça nosso propósito de contribuir com o bem-estar das pessoas em todas as dimensões da saúde.",
    ],
    credit: null,
    seoDescription:
      "Med Imagem apoia o Ciclo do Saber do Senac sobre saúde mental no trabalho, realizado no SESC São Mateus.",
  },
  {
    slug: "jpr-2025",
    title: "Med Imagem marca presença na JPR 2025",
    excerpt:
      "A Med Imagem representou o Norte Capixaba na 55ª Jornada Paulista de Radiologia, maior evento de diagnóstico por imagem da América Latina, realizado no Transamerica Expo Center em São Paulo.",
    date: "5 de maio de 2025",
    dateISO: "2025-05-05",
    category: "Evento",
    image: newsJpr2025Img,
    content: [
      "A 55ª Jornada Paulista de Radiologia (JPR 2025) reuniu os maiores nomes do diagnóstico por imagem da América Latina no Transamerica Expo Center, em São Paulo. E a Med Imagem estava lá.",
      "Representando a clínica e o Norte Capixaba, o diretor Wilson Tavares e o técnico Marcelo Soares Colombi participaram do evento, referência nacional em atualizações científicas, novas tecnologias e boas práticas em radiologia e diagnóstico por imagem.",
      "A participação na JPR faz parte do compromisso da Med Imagem com a educação continuada e a busca permanente por inovação. Estar presente nos maiores eventos da área é essencial para trazer ao Norte Capixaba o que há de mais atual em tecnologia e conhecimento médico.",
      "A Med Imagem segue investindo na capacitação de sua equipe e na atualização constante de seus processos, sempre com um objetivo: oferecer diagnósticos cada vez mais precisos e seguros para os nossos pacientes.",
    ],
    credit: null,
    seoDescription:
      "Med Imagem participa da 55ª Jornada Paulista de Radiologia (JPR 2025) em São Paulo, representando o Norte Capixaba.",
  },
];

export const getArticleBySlug = (slug: string) =>
  newsArticles.find((a) => a.slug === slug);
