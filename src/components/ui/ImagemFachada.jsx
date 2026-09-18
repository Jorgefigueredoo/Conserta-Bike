import { useState } from "react";

/* ============================================================================
   FOTO DA FACHADA
   ----------------------------------------------------------------------------
   Coloque o arquivo da foto em:  public/images/fachada.jpg
   (o caminho abaixo é relativo à pasta `public`, não precisa importar nada)

   Enquanto o arquivo não existir, aparece um espaço reservado elegante —
   o site nunca "quebra".
   ============================================================================ */
export const CAMINHO_FACHADA = "/images/fachada.jpg";

export default function ImagemFachada({ className = "", ...rest }) {
  const [falhou, setFalhou] = useState(false);

  if (falhou) {
    return <Reserva className={className} />;
  }

  return (
    <img
      src={CAMINHO_FACHADA}
      onError={() => setFalhou(true)}
      alt="Fachada da loja ConsertaBike Camaragibe, na Estrada de Aldeia"
      loading="lazy"
      decoding="async"
      className={className}
      {...rest}
    />
  );
}

/** Espaço reservado mostrado apenas se a foto ainda não foi adicionada. */
function Reserva({ className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-linear-to-br from-lima-500 via-lima-400 to-lima-600 p-8 text-center ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 text-tinta/60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <circle cx="8.5" cy="10" r="1.6" />
        <path d="m3.5 17 4.8-4.4a1.8 1.8 0 0 1 2.5.06L16 17.6M14.2 14.6l1.9-1.7a1.8 1.8 0 0 1 2.4 0l2 1.8" />
      </svg>
      <p className="font-display text-sm font-bold text-tinta">
        Foto da fachada
      </p>
      <p className="max-w-[16rem] text-xs font-medium leading-relaxed text-tinta/70">
        Salve a imagem como <code className="font-mono">fachada.jpg</code> dentro
        da pasta <code className="font-mono">public/images/</code> e ela aparece
        aqui automaticamente.
      </p>
    </div>
  );
}
