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
    logradouro: "Estr. de Aldeia",
    numero: "11608",
    complemento: "Quadra A, Loja 01",
    bairro: "Aldeia dos Camarás",
    cidade: "Camaragibe",
    uf: "PE",
    cep: "54783-010",
    linha1: "Estr. de Aldeia, 11608 — Quadra A, Loja 01",
    linha2: "Aldeia dos Camarás, Camaragibe — PE",
  },

  /* Coordenadas exatas da loja (não é busca por nome) — usadas no mapa,
     na rota e como assinatura da seção de localização. */
  coordenadas: {
    lat: -7.9454582,
    lng: -35.0228957,
    // mesmo ponto em graus/minutos/segundos, exibido no site
    gms: '7°56′43.6"S  35°01′22.4"O',
  },

  mapaLink:
    "https://www.google.com/maps/place/ConsertaBike+Camaragibe+-+Vendas,+Manuten%C3%A7%C3%A3o+e+Acess%C3%B3rios+de+Bicicletas/@-7.9454582,-35.0228957,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab11b9595093c3:0x55573ce2502acc88!8m2!3d-7.9454582!4d-35.0228957",

  // "Como chegar": abre a rota já apontada para as coordenadas exatas
  mapaRotaLink:
    "https://www.google.com/maps/dir/?api=1&destination=-7.9454582%2C-35.0228957",

  mapaEmbed:
    "https://www.google.com/maps?q=-7.9454582,-35.0228957&z=17&hl=pt-BR&output=embed",

  /* --------------------------------------------------------------------------
     HORÁRIO DE FUNCIONAMENTO  ←←← AJUSTE FÁCIL AQUI
     O horário varia por dia. Edite a lista abaixo livremente:
     - `dia`: rótulo exibido
     - `horas`: texto do horário (use "Fechado" quando não abrir)
     - `resumo`: a frase curta que aparece no topo e no rodapé
     -------------------------------------------------------------------------- */
  horario: {
    resumo: "Seg a Sáb: 08h às 18h", // placeholder — troque pelo horário real

    /* A lista começa na SEGUNDA e termina no DOMINGO — não mude essa ordem,
       o aviso de "aberto agora" depende dela.
       - `curto`: sigla usada na faixa compacta (Seg, Ter…)
       - `horas`: texto exibido
       - `abre` / `fecha`: hora em número (24h) para calcular se está aberto
       - `fechado: true`: dia sem expediente (aí `abre`/`fecha` são ignorados) */
    dias: [
      { dia: "Segunda-feira", curto: "Seg", horas: "08h às 18h", abre: 8, fecha: 18 },
      { dia: "Terça-feira", curto: "Ter", horas: "08h às 18h", abre: 8, fecha: 18 },
      { dia: "Quarta-feira", curto: "Qua", horas: "08h às 18h", abre: 8, fecha: 18 },
      { dia: "Quinta-feira", curto: "Qui", horas: "08h às 18h", abre: 8, fecha: 18 },
      { dia: "Sexta-feira", curto: "Sex", horas: "08h às 18h", abre: 8, fecha: 18 },
      { dia: "Sábado", curto: "Sáb", horas: "08h às 18h", abre: 8, fecha: 18 },
      { dia: "Domingo", curto: "Dom", horas: "Fechado", fechado: true },
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

/* ============================================================================
   SERVIÇOS
   ----------------------------------------------------------------------------
   `itens`  : palavras concretas que aparecem como etiquetas no card.
   `detalhe`: UMA informação concreta e verificável (prazo, preço a partir de,
              garantia). Está VAZIO de propósito — só o dono da loja sabe esses
              números, e o card simplesmente não mostra a faixa enquanto estiver
              vazio. Exemplos do formato esperado:

                detalhe: "Diagnóstico na hora, sem agendar"
                detalhe: "Revisão simples a partir de R$ XX"
                detalhe: "Peça fora de estoque chega em X dias"
                detalhe: "30 dias de garantia no serviço"
   ============================================================================ */
export const servicos = [
  {
    titulo: "Bikes Novas",
    texto:
      "As linhas Caloi e Colli que a gente trabalha, do lazer ao mountain bike. Você escolhe na loja, experimenta e sai pedalando.",
    itens: ["Caloi", "Colli", "Lazer e MTB"],
    detalhe: "",
  },
  {
    titulo: "Bikes Usadas",
    texto:
      "Seminovas revisadas peça por peça pela nossa própria oficina antes de ir para a vitrine. Custa menos e sai rodando igual.",
    itens: ["Revisada", "Pronta para uso", "Menor custo"],
    detalhe: "",
  },
  {
    titulo: "Manutenção e Reparos",
    texto:
      "Câmbio Shimano ou Sram travando, freio a disco raspando, roda fora de centro, suspensão dura: é o que a oficina resolve.",
    itens: ["Câmbio", "Freio a disco", "Centragem", "Suspensão"],
    detalhe: "",
  },
  {
    titulo: "Peças de Reposição",
    texto:
      "Corrente, cassete, pastilha, rolamento, cabo, raio, pneu e câmara. Peça original ou compatível, na prateleira da loja.",
    itens: ["Corrente", "Cassete", "Pastilha", "Rolamento"],
    detalhe: "",
  },
  {
    titulo: "Acessórios",
    texto:
      "Capacete, luz, bomba, caramanhola, suporte e os protetores Polisport. Acessório de todas as categorias, como a gente promete.",
    itens: ["Capacete", "Luz", "Bomba", "Polisport"],
    detalhe: "",
  },
  {
    titulo: "Upgrade de Bike",
    texto:
      "Trocar o grupo para Shimano ou Sram, subir o número de marchas, aliviar peso com peças Absolute. Montado dentro do seu orçamento.",
    itens: ["Grupo Shimano", "Sram", "Absolute", "Mais marchas"],
    detalhe: "",
  },
];

/* ============================================================================
   MARCAS PARCEIRAS
   `papel` diz o que a loja usa de cada marca — é o que transforma uma lista
   de logos em informação. A faixa animada mostra só o `nome`.
   ============================================================================ */
export const marcas = [
  { nome: "SHIMANO", papel: "Transmissão e freios" },
  { nome: "ABSOLUTE", papel: "Componentes e peças" },
  { nome: "SRAM", papel: "Transmissão e freios" },
  { nome: "COLLI", papel: "Bicicletas" },
  { nome: "CALOI", papel: "Bicicletas" },
  { nome: "POLISPORT", papel: "Acessórios e proteção" },
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

/* ============================================================================
   ESTÁ ABERTO AGORA?
   ----------------------------------------------------------------------------
   Lê o horário acima e diz a situação da loja neste instante, no relógio de
   quem está visitando. Nada de servidor: é só a tabela de `horario.dias`.
   ============================================================================ */
export function situacaoAgora(agora = new Date()) {
  const dias = loja.horario.dias;

  // getDay(): 0 = domingo. A lista começa na segunda, então deslocamos.
  const indiceHoje = (agora.getDay() + 6) % 7;
  const hoje = dias[indiceHoje];
  const horaDecimal = agora.getHours() + agora.getMinutes() / 60;

  const proximoDiaAberto = () => {
    for (let i = 1; i <= 7; i++) {
      const d = dias[(indiceHoje + i) % 7];
      if (!d.fechado) return d;
    }
    return null;
  };

  if (hoje.fechado) {
    return { aberto: false, hoje, motivo: "fechado-hoje", proximo: proximoDiaAberto() };
  }

  if (horaDecimal < hoje.abre) {
    return { aberto: false, hoje, motivo: "ainda-nao-abriu", proximo: hoje };
  }

  if (horaDecimal >= hoje.fecha) {
    return { aberto: false, hoje, motivo: "ja-fechou", proximo: proximoDiaAberto() };
  }

  const minutosParaFechar = Math.round((hoje.fecha - horaDecimal) * 60);
  return { aberto: true, hoje, minutosParaFechar, proximo: null };
}

/** Frase curta para o selo de situação ("Aberto agora", "Abre Seg, 08h"…). */
export function fraseSituacao(s = situacaoAgora()) {
  if (s.aberto) {
    return s.minutosParaFechar <= 60
      ? `Aberto — fecha em ${s.minutosParaFechar} min`
      : "Aberto agora";
  }
  if (s.motivo === "ainda-nao-abriu") {
    return `Abre hoje às ${String(s.hoje.abre).padStart(2, "0")}h`;
  }
  return s.proximo
    ? `Fechado — abre ${s.proximo.curto}, ${String(s.proximo.abre).padStart(2, "0")}h`
    : "Fechado";
}
