/* ============================================================================
   ARQUIVO DE CONFIGURAÇÃO DA LOJA
   ----------------------------------------------------------------------------
   TODAS as informações do site (telefone, horários, endereço, depoimentos)
   estão aqui. Para atualizar o site, basta editar este arquivo — nenhum outro.
   ============================================================================ */

export const loja = {
  nome: "ConsertaBike",
  cidade: "Camaragibe",
  nomeCompleto: "ConsertaBike Camaragibe",
  slogan: "Não tem problema em bike que a gente não resolva.",
  chamada: "Venda · Manutenção · Acessórios",

  telefone: "(81) 99720-5061",
  whatsapp: "5581997205061", // apenas números, com DDI 55
  instagram: "consertabikecamaragibe.aldeia",
  instagramUrl: "https://instagram.com/consertabikecamaragibe.aldeia",

  endereco: {
    linha1: "Estr. de Aldeia, 11608 — Quadra A, Loja 01",
    linha2: "Aldeia dos Camarás, Camaragibe — PE",
    cep: "54783-010",
  },

  mapaLink: "https://www.google.com/maps/place/ConsertaBike+Camaragibe",

  // Embed do Google Maps. Para trocar por um pin exato:
  // Google Maps > Compartilhar > Incorporar um mapa > copie o src do iframe.
  mapaEmbed:
    "https://www.google.com/maps?q=Estrada%20de%20Aldeia%2C%2011608%2C%20Aldeia%20dos%20Camar%C3%A1s%2C%20Camaragibe%20-%20PE%2C%2054783-010&output=embed",

  /* --------------------------------------------------------------------------
     HORÁRIO DE FUNCIONAMENTO  ←←← AJUSTE FÁCIL AQUI
     O horário varia por dia. Edite a lista abaixo livremente:
     - `dia`: rótulo exibido
     - `horas`: texto do horário (use "Fechado" quando não abrir)
     - `resumo`: a frase curta que aparece no topo e no rodapé
     -------------------------------------------------------------------------- */
  horario: {
    resumo: "Seg a Sáb: 08h às 18h", // placeholder — troque pelo horário real
    dias: [
      { dia: "Segunda-feira", horas: "08h às 18h" },
      { dia: "Terça-feira", horas: "08h às 18h" },
      { dia: "Quarta-feira", horas: "08h às 18h" },
      { dia: "Quinta-feira", horas: "08h às 18h" },
      { dia: "Sexta-feira", horas: "08h às 18h" },
      { dia: "Sábado", horas: "08h às 18h" },
      { dia: "Domingo", horas: "Fechado" },
    ],
  },

  avaliacao: {
    nota: "5,0",
    fonte: "Google",
  },

  textoInstitucional: [
    "Somos apaixonados por bikes. Na ConsertaBike você encontra bikes novas, bikes seminovas revisadas, acessórios de todas as categorias e peças de reposição para qualquer modelo — do lazer ao alto desempenho.",
    "Mais do que produtos, entregamos serviço: nosso time de mecânicos é um dos mais especializados do Brasil. Fazemos manutenção completa, reparos e upgrade na sua bike para ela sair daqui melhor do que entrou.",
  ],
};

export const servicos = [
  {
    titulo: "Bikes Novas",
    texto:
      "Modelos das melhores marcas, prontos para pedalar. Você escolhe, a gente regula e entrega ajustada para o seu corpo.",
    icone: "bike",
  },
  {
    titulo: "Bikes Usadas",
    texto:
      "Seminovas revisadas peça por peça pela nossa oficina. O caminho mais inteligente para começar a pedalar gastando menos.",
    icone: "tag",
  },
  {
    titulo: "Manutenção e Reparos",
    texto:
      "Revisão completa, freios, câmbio, rodas, suspensão. Diagnóstico honesto e serviço feito por mecânicos especializados.",
    icone: "wrench",
  },
  {
    titulo: "Peças de Reposição",
    texto:
      "Estoque amplo de peças originais e compatíveis. Da corrente ao rolamento, resolvemos sem você ficar dias parado.",
    icone: "gear",
  },
  {
    titulo: "Acessórios",
    texto:
      "Capacetes, luzes, bombas, suportes, roupas e tudo que deixa seu pedal mais seguro e confortável.",
    icone: "helmet",
  },
  {
    titulo: "Upgrade de Bike",
    texto:
      "Quer mais leveza, mais marchas ou mais performance? Montamos o upgrade ideal dentro do seu orçamento.",
    icone: "bolt",
  },
];

export const marcas = [
  "SHIMANO",
  "ABSOLUTE",
  "SRAM",
  "COLLI",
  "CALOI",
  "POLISPORT",
];

export const depoimentos = [
  {
    texto: "Fui muito bem atendido.",
    autor: "Max Aqc",
    papel: "Avaliação no Google · 14 avaliações no perfil",
    iniciais: "MA",
  },
  {
    texto:
      "O lugar certo para comprar peças e acessórios para sua bicicleta, ótima localização e ótimo atendimento.",
    autor: "Itamar Meireles",
    papel: "Local Guide · Google",
    iniciais: "IM",
  },
];

/* Mensagem pré-preenchida ao abrir o WhatsApp */
export const linkWhatsapp = (
  mensagem = "Olá! Vim pelo site da ConsertaBike e gostaria de mais informações."
) => `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent(mensagem)}`;
