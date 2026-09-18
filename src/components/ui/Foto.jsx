import { useState } from "react";
import { fotos, caminhoFoto } from "../../data/fotos";

/* ============================================================================
   FOTO
   ----------------------------------------------------------------------------
   Carrega uma foto do manifesto (src/data/fotos.js) pelo nome do slot:

     <Foto slot="fachada" className="h-full w-full object-cover" />

   Se o arquivo ainda não estiver em public/images/, mostra um espaço reservado
   discreto dizendo qual arquivo falta (`quandoFaltar="aviso"`) ou simplesmente
   não renderiza nada (`quandoFaltar="nada"`, usado em fotos de fundo).
   ============================================================================ */
export default function Foto({
  slot,
  className = "",
  quandoFaltar = "aviso",
  ...rest
}) {
  const [falhou, setFalhou] = useState(false);
  const info = fotos[slot];

  if (!info) return null;

  if (falhou) {
    if (quandoFaltar === "nada") return null;
    return <Reserva arquivo={info.arquivo} className={className} />;
  }

  return (
    <img
      src={caminhoFoto(slot)}
      onError={() => setFalhou(true)}
      alt={info.alt}
      loading="lazy"
      decoding="async"
      className={className}
      {...rest}
    />
  );
}

/** Espaço reservado mostrado só enquanto a foto não foi adicionada. */
function Reserva({ arquivo, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2.5 bg-tinta-700 p-6 text-center ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-lima-500/70"
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
      <p className="font-mono text-[0.7rem] leading-snug text-white/70">
        public/images/
        <br />
        <span className="font-bold text-lima-500">{arquivo}</span>
      </p>
    </div>
  );
}
