export interface FaqItem {
  question: string;
  answer: string;
}

export const faqList: FaqItem[] = [
  {
    question: "Como posso agendar uma consulta com a Dra. Juliana Rodrigues?",
    answer:
      "Você pode agendar sua consulta pelo WhatsApp ou pelo formulário de contato deste site. O atendimento pode ser presencial em Manaus/AM ou on-line para todo o Brasil.",
  },
  {
    question: "Em quais áreas a Dra. Juliana Rodrigues atua?",
    answer:
      "Direito do Trabalho e Direito do Consumidor. No trabalhista: justa causa, rescisão indireta, reintegração, assédio moral, horas extras, insalubridade e verbas rescisórias. No consumidor: descontos indevidos (ex.: consignado/INSS), cobranças abusivas, negativa e demora de plano de saúde, atraso/cancelamento de voo, produto com defeito/garantia e problemas em compras on-line.",
  },
  {
    question: "Quais documentos devo levar na primeira consulta?",
    answer:
      "Em geral, RG, CPF e tudo que tiver relação direta com o caso: contratos, holerites, CTPS, e-mails, mensagens de WhatsApp, comprovantes de pagamento, faturas, prints, protocolos e respostas da empresa. Quando o atendimento for on-line, basta enviar os arquivos digitalizados pelo WhatsApp antes da reunião.",
  },
  {
    question: "O que é rescisão indireta e quando ela cabe?",
    answer:
      "É o direito do trabalhador de encerrar o contrato por culpa do empregador, com os mesmos efeitos de uma demissão sem justa causa. Cabe em situações como atraso reiterado de salário, descumprimento do contrato, assédio moral ou sexual, exigência de tarefas alheias à função e descontos indevidos.",
  },
  {
    question: "Fui demitido por justa causa. Posso reverter?",
    answer:
      "Sim, é possível discutir a justa causa quando ela é aplicada sem proporcionalidade, sem prova robusta ou sem observar a gradação das punições (advertência e suspensão antes da demissão). Reconhecida a nulidade, o trabalhador recebe as verbas como se a dispensa fosse sem justa causa.",
  },
  {
    question: "Plano de saúde negou ou demorou para autorizar exame. O que fazer?",
    answer:
      "A negativa abusiva e a demora injustificada podem gerar direito à autorização imediata por liminar e à indenização por danos morais, especialmente em casos de urgência. Guarde o pedido médico, a solicitação ao plano e qualquer protocolo ou resposta — esses documentos são a base do processo.",
  },
  {
    question: "Foram feitos descontos no meu salário ou benefício do INSS sem autorização. Como reaver?",
    answer:
      "Descontos não autorizados (empréstimos consignados, mensalidades de associações, seguros) são ilegais. É possível pedir o cancelamento, a devolução em dobro dos valores cobrados indevidamente (art. 42 do CDC) e indenização por danos morais quando houver impacto financeiro relevante.",
  },
  {
    question: "Tive voo atrasado, cancelado ou sofri overbooking. Tenho direito a quê?",
    answer:
      "A companhia aérea é obrigada a oferecer assistência material (alimentação, comunicação e hospedagem, conforme o tempo de espera) e a reacomodar o passageiro. Em atrasos longos, cancelamentos sem reacomodação adequada e overbooking, costuma haver direito a indenização por danos morais e materiais.",
  },
  {
    question: "O atendimento on-line tem a mesma validade do presencial?",
    answer:
      "Sim. A consulta on-line por vídeo ou WhatsApp tem o mesmo valor jurídico do atendimento presencial. A procuração pode ser assinada digitalmente (com certificado ICP-Brasil ou plataformas reconhecidas) e os documentos enviados de forma eletrônica.",
  },
];
