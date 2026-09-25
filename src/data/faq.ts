export interface FaqItem { question: string; answer: string }
export interface FaqCategory { category: string; items: FaqItem[] }

export const faqCategories: FaqCategory[] = [
  {
    "category": "Agendamento e atendimento",
    "items": [
      {
        "question": "Como posso agendar meu exame?",
        "answer": "O agendamento pode ser realizado presencialmente em nossa unidade ou de forma prática pelo telefone ou WhatsApp da Med Imagem. Nossa equipe está à disposição para orientar você e esclarecer qualquer dúvida antes do agendamento."
      },
      {
        "question": "Qual é o horário de atendimento da Med Imagem?",
        "answer": "Atendemos presencialmente de segunda a sexta-feira, das 7h às 18h. Em alguns sábados, também há atendimento, conforme a programação e os exames agendados. O atendimento por telefone funciona de segunda a sexta-feira, das 7h30 às 18h. Não há atendimento telefônico aos sábados. Para confirmar a disponibilidade aos sábados, entre em contato previamente com nossa equipe."
      },
      {
        "question": "Onde fica a Med Imagem?",
        "answer": "Estamos na Rua Ermelino Carneiro Sobrinho, 221, Bairro Fátima, em São Mateus/ES."
      }
    ]
  },
  {
    "category": "Antes do exame",
    "items": [
      {
        "question": "Meu exame precisa de algum preparo?",
        "answer": "Alguns exames exigem cuidados específicos antes da realização. Entre em contato com nossa equipe presencialmente ou pelo WhatsApp para confirmar se o seu exame necessita de preparo e receber todas as orientações corretamente."
      },
      {
        "question": "Devo levar exames anteriores e o pedido médico?",
        "answer": "Sim. É extremamente importante levar seus exames anteriores relacionados à região do exame, sempre que disponíveis, e o pedido médico. Eles auxiliam o médico na comparação das imagens, na avaliação de alterações e no acompanhamento da sua condição clínica."
      },
      {
        "question": "O que devo informar à equipe antes do exame?",
        "answer": "Informe qualquer condição de saúde ou procedimento importante para sua segurança, como possibilidade de gravidez, alergias, uso de medicamentos, cirurgias recentes ou anteriores, próteses, implantes, marcapasso, dispositivos eletrônicos ou presença de metais no corpo. Também informe se possui tatuagens, micropigmentação ou maquiagem permanente, especialmente na ressonância magnética. Em caso de dúvida, informe nossa equipe antes do exame."
      },
      {
        "question": "Estou grávida ou suspeito de gravidez. O que devo fazer?",
        "answer": "Informe essa condição à nossa equipe no agendamento e antes do exame. Alguns exames podem ser realizados durante a gestação, quando houver indicação médica clara e autorização do médico responsável, considerando o tipo de exame e o período da gestação. Nossa equipe orientará sobre os procedimentos e documentos necessários."
      },
      {
        "question": "É necessário acompanhante para realizar o exame?",
        "answer": "Não é necessário acompanhante. Menores de idade devem estar acompanhados por um adulto responsável, com documento de identificação. Pacientes com mobilidade reduzida ou que necessitem de auxílio também podem comparecer acompanhados. Em caso de dúvida sobre uma situação específica, entre em contato antes do exame."
      }
    ]
  },
  {
    "category": "Convênios e atendimento particular",
    "items": [
      {
        "question": "A Med Imagem atende convênios?",
        "answer": "Sim. A Med Imagem atende diversos convênios. Como a cobertura pode variar conforme o plano e o exame solicitado, recomendamos consultar nossa equipe antes do agendamento."
      },
      {
        "question": "Não encontrei meu convênio no site. O que devo fazer?",
        "answer": "Entre em contato conosco. Nossa equipe poderá verificar a disponibilidade de atendimento para o seu plano."
      },
      {
        "question": "Posso realizar exames de forma particular, sem pedido médico?",
        "answer": "Entre em contato com nossa equipe para verificar se o exame solicitado pode ser realizado de forma particular e quais são os documentos necessários."
      }
    ]
  },
  {
    "category": "Sobre os exames",
    "items": [
      {
        "question": "Quais exames são realizados pela Med Imagem?",
        "answer": "A Med Imagem realiza exames de diagnóstico por imagem, incluindo Ressonância Magnética, Tomografia Computadorizada, Ultrassonografia, Raio X - Digital e Mamografia Digital."
      },
      {
        "question": "A ressonância magnética utiliza radiação?",
        "answer": "Não. A ressonância magnética não utiliza radiação ionizante, como no Raio-X e na Tomografia. Ela usa campos magnéticos e ondas de radiofrequência para produzir imagens detalhadas. Existem cuidados de segurança relacionados ao campo magnético, especialmente para pacientes com marcapasso, implantes, próteses ou dispositivos metálicos/eletrônicos. Informe nossa equipe antes do exame."
      },
      {
        "question": "Tenho prótese, implante ou marcapasso. Posso fazer ressonância?",
        "answer": "É fundamental informar essa condição no agendamento. A Med Imagem não realiza ressonância magnética em pacientes com marcapasso. Para próteses, implantes ou outros dispositivos, informe qual dispositivo possui e, quando disponível, a marca, o modelo e a documentação, para verificarmos as condições de segurança. Na dúvida, informe sempre qualquer prótese, implante ou dispositivo antes do agendamento."
      },
      {
        "question": "Tenho claustrofobia. Posso realizar uma ressonância?",
        "answer": "Sim, em muitos casos é possível. É fundamental informar no agendamento, para que nossa equipe oriente previamente sobre o procedimento e os cuidados para tornar o exame mais confortável. Se você tem muita dificuldade em permanecer em espaços fechados, converse com nossa equipe antes do exame."
      },
      {
        "question": "A tomografia ou ressonância sempre utilizam contraste?",
        "answer": "Não. A necessidade do contraste depende do tipo de exame e da indicação médica. Quando houver utilização, nossa equipe fornecerá as orientações necessárias."
      }
    ]
  },
  {
    "category": "Resultados",
    "items": [
      {
        "question": "Como acesso o resultado do meu exame online?",
        "answer": "Após o exame, você receberá um protocolo com as informações de acesso: o site para consulta, seu login e senha, e a data/horário previstos para a liberação do laudo. As imagens ficam disponíveis no mesmo dia; o laudo, a partir da data e horário informados no protocolo. Em caso de dúvida, entre em contato com nossa equipe."
      },
      {
        "question": "Outra pessoa pode retirar meu resultado?",
        "answer": "Sim, desde que apresente o protocolo de atendimento ou uma cópia do documento de identificação do paciente, além do documento de identificação de quem fará a retirada. A retirada é registrada e protocolada pela Med Imagem, para maior segurança."
      },
      {
        "question": "Como solicitar a segunda via do meu exame?",
        "answer": "O laudo e as imagens ficam disponíveis no site da Med Imagem conforme o protocolo entregue após o exame. Caso precise de segunda via impressa do laudo ou das imagens, entre em contato para solicitar; a emissão de segunda via impressa está sujeita a uma taxa, conforme os procedimentos da Med Imagem."
      }
    ]
  }
];
