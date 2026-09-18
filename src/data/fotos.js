/* ============================================================================
   MANIFESTO DE FOTOS
   ----------------------------------------------------------------------------
   O site usa UMA foto: a fachada da loja. Todo o resto é tipografia e dado
   real — nada de banco de imagens.

   Para trocar a foto: substitua public/images/fachada.jpg (mesmo nome).
   Se o arquivo faltar, aparece um espaço reservado e o site não quebra.

   Para acrescentar outra foto no futuro, basta declarar um slot aqui e usar
   <Foto slot="nomeDoSlot" /> no componente.
   ============================================================================ */

export const PASTA_FOTOS = "/images/";

export const fotos = {
  fachada: {
    arquivo: "fachada.jpg",
    alt: "Fachada da loja ConsertaBike Camaragibe, na Estrada de Aldeia",
    onde: "Seção A Loja — foto principal com parallax",
  },
};

/** Caminho público de um slot. */
export const caminhoFoto = (slot) =>
  fotos[slot] ? `${PASTA_FOTOS}${fotos[slot].arquivo}` : null;
