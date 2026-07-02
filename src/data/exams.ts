import examUltrassom from "@/assets/exam-ultrassom.webp";
import examRessonancia from "@/assets/exam-ressonancia.webp";
import examRaiox from "@/assets/exam-raiox.webp";
import examTomografiaAsset from "@/assets/exam-tomografia.webp.asset.json";
import examMamografiaAsset from "@/assets/exam-mamografia.webp.asset.json";

const examTomografia = examTomografiaAsset.url;
const examMamografia = examMamografiaAsset.url;

export interface ExamData {
  slug: string;
  name: string;
  shortName: string;
  image: string;
  description: string;
  whatIs: string;
  purpose: string;
  indications: string;
  howItsDone: string;
  duration: string;
  preparation: string[];
}

export const examsData: ExamData[] = [
  {
    slug: "ultrassonografia",
    name: "Ultrassonografia",
    shortName: "Ultrassom",
    image: examUltrassom,
    description: "Exame não invasivo que utiliza ondas sonoras para produzir imagens em tempo real dos órgãos internos.",
    whatIs: "A ultrassonografia é um exame de diagnóstico por imagem que utiliza ondas sonoras de alta frequência para criar imagens dos órgãos e estruturas internas do corpo. É um método seguro, indolor e não utiliza radiação ionizante.",
    purpose: "Serve para avaliar órgãos abdominais, tireoide, mamas, sistema vascular, articulações e acompanhamento gestacional, entre outras aplicações.",
    indications: "É indicado quando há necessidade de investigar dores abdominais, nódulos, alterações em órgãos, acompanhamento de gestação, avaliação vascular e muitas outras condições clínicas.",
    howItsDone: "O paciente deita na maca e o médico aplica um gel sobre a pele na região a ser examinada. Um transdutor é deslizado sobre a área, emitindo ondas sonoras que geram imagens em um monitor.",
    duration: "15 a 30 minutos, dependendo do tipo de ultrassonografia.",
    preparation: [
      "Para ultrassom abdominal: jejum de 6 a 8 horas",
      "Para ultrassom pélvico: bexiga cheia (tomar 4 a 6 copos de água 1 hora antes)",
      "Trazer exames anteriores, se houver",
      "Usar roupas confortáveis"
    ],
  },
  {
    slug: "ressonancia-magnetica",
    name: "Ressonância Magnética",
    shortName: "Ressonância",
    image: examRessonancia,
    description: "Tecnologia avançada que produz imagens detalhadas do corpo utilizando campos magnéticos.",
    whatIs: "A ressonância magnética é um exame de alta tecnologia que utiliza campos magnéticos e ondas de radiofrequência para produzir imagens detalhadas dos órgãos e tecidos do corpo. Não utiliza radiação ionizante.",
    purpose: "Permite avaliar com precisão cérebro, coluna, articulações, abdome, pelve e vasos sanguíneos, sendo essencial para diagnóstico de diversas patologias.",
    indications: "Indicada para investigação de doenças neurológicas, lesões musculoesqueléticas, tumores, doenças cardíacas, alterações vasculares e acompanhamento de tratamentos.",
    howItsDone: "O paciente deita em uma mesa que desliza para dentro do equipamento. Durante o exame, é necessário permanecer imóvel. O equipamento emite sons durante o funcionamento e a comunicação com a equipe é mantida por interfone.",
    duration: "30 a 60 minutos, dependendo da região examinada.",
    preparation: [
      "Informar sobre próteses metálicas, marcapasso ou implantes",
      "Remover objetos metálicos (joias, relógios, cartões)",
      "Em alguns casos, é necessário jejum de 4 horas",
      "Usar roupas sem componentes metálicos",
      "Informar sobre claustrofobia"
    ],
  },
  {
    slug: "raio-x",
    name: "Raio-X",
    shortName: "Raio-X",
    image: examRaiox,
    description: "Exame rápido e eficaz para avaliação de estruturas ósseas e torácicas.",
    whatIs: "O raio-X é um exame de imagem que utiliza uma pequena dose de radiação para produzir imagens das estruturas internas do corpo, especialmente ossos e órgãos torácicos.",
    purpose: "É utilizado para diagnosticar fraturas, infecções pulmonares, alterações cardíacas, problemas dentários e outras condições que afetam ossos e órgãos.",
    indications: "Indicado em casos de trauma, dor óssea, tosse persistente, avaliação pré-operatória, acompanhamento de fraturas e investigação de diversas condições clínicas.",
    howItsDone: "O paciente é posicionado em frente ao equipamento e deve permanecer imóvel por alguns segundos enquanto a imagem é capturada. O procedimento é rápido e indolor.",
    duration: "5 a 15 minutos.",
    preparation: [
      "Não é necessário jejum",
      "Remover objetos metálicos da região a ser examinada",
      "Informar em caso de gravidez",
      "Usar roupas confortáveis sem componentes metálicos"
    ],
  },
  {
    slug: "tomografia",
    name: "Tomografia Computadorizada",
    shortName: "Tomografia",
    image: examTomografia,
    description: "Imagens detalhadas em cortes transversais para diagnósticos precisos.",
    whatIs: "A tomografia computadorizada é um exame que combina raios-X com tecnologia computadorizada para produzir imagens detalhadas em cortes transversais do corpo, permitindo visualização precisa de órgãos e estruturas.",
    purpose: "Permite diagnosticar tumores, hemorragias, fraturas complexas, doenças pulmonares, alterações abdominais e diversas outras condições com alta precisão.",
    indications: "Indicada para investigação de traumas, doenças vasculares, tumores, planejamento cirúrgico, avaliação de urgências e acompanhamento de tratamentos.",
    howItsDone: "O paciente deita em uma mesa que se move através de um anel. O equipamento gira ao redor do corpo capturando imagens em diferentes ângulos. Em alguns casos, pode ser necessário o uso de contraste.",
    duration: "10 a 30 minutos.",
    preparation: [
      "Jejum de 4 a 6 horas quando houver uso de contraste",
      "Informar sobre alergias, especialmente a iodo",
      "Trazer exames de creatinina recentes",
      "Informar sobre uso de medicamentos para diabetes",
      "Usar roupas confortáveis"
    ],
  },
  {
    slug: "mamografia",
    name: "Mamografia",
    shortName: "Mamografia",
    image: examMamografia,
    description: "Exame essencial para rastreamento e diagnóstico precoce do câncer de mama.",
    whatIs: "A mamografia é um exame de imagem específico para as mamas que utiliza raios-X de baixa dose para detectar alterações no tecido mamário, sendo fundamental para o diagnóstico precoce do câncer de mama.",
    purpose: "É o principal método de rastreamento do câncer de mama, podendo detectar tumores muito pequenos, antes mesmo de serem palpáveis.",
    indications: "Recomendada anualmente para mulheres a partir dos 40 anos, ou antes em casos de histórico familiar de câncer de mama. Também indicada para investigação de nódulos ou alterações mamárias.",
    howItsDone: "A mama é posicionada no equipamento e comprimida suavemente entre duas placas para obtenção das imagens. São realizadas pelo menos duas incidências de cada mama.",
    duration: "15 a 20 minutos.",
    preparation: [
      "Evitar usar desodorante, talco ou creme na região das axilas e mamas",
      "Preferir realizar o exame após o período menstrual",
      "Trazer exames anteriores para comparação",
      "Usar roupas de duas peças para facilitar"
    ],
  },
];

export const getExamBySlug = (slug: string) => examsData.find(e => e.slug === slug);
