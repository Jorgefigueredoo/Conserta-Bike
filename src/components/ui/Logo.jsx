/* ============================================================================
   LOGO — reconstruída em SVG vetorial a partir da identidade da loja.
   Vantagem: nítida em qualquer tamanho, leve e já serve de favicon.
   Se um dia quiser usar o arquivo original, troque <BikeIcon /> por uma <img>.
   ============================================================================ */

export function BikeIcon({ className = "", strokeWidth = 4.6 }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* rodas */}
      <circle cx="15.5" cy="43.5" r="12.4" />
      <circle cx="48.5" cy="43.5" r="12.4" />
      {/* quadro */}
      <path d="M15.5 43.5H30" />
      <path d="M30 43.5 25.6 26.4" />
      <path d="M15.5 43.5 25.6 26.4" />
      <path d="M26.3 28.8 41.4 23.6" />
      <path d="M30 43.5 43.2 20.6" />
      <path d="M43.2 20.6 48.5 43.5" />
      {/* selim e guidão */}
      <path d="M20.6 24.6h9.4" />
      <path d="M40.6 19.4 48.4 16.6" />
    </svg>
  );
}

/** Marca completa: ícone + assinatura tipográfica. */
export default function Logo({
  className = "",
  iconClassName = "",
  textClassName = "",
  mostrarTexto = true,
  mostrarSubtitulo = false,
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid aspect-square place-items-center rounded-2xl bg-lima-500 text-tinta shadow-[0_6px_20px_-6px_rgba(141,199,30,.8)] ${iconClassName}`}
      >
        <BikeIcon className="h-[62%] w-[62%]" />
      </span>

      {mostrarTexto && (
        <span className="leading-none">
          <span
            className={`font-display text-[1.45rem] tracking-tight ${textClassName}`}
          >
            <span className="font-medium">conserta</span>
            <span className="font-extrabold">bike</span>
            <span className="align-super text-[0.5em] font-normal opacity-60">
              ®
            </span>
          </span>
          {mostrarSubtitulo && (
            <span className="mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.22em] opacity-70">
              Camaragibe
            </span>
          )}
        </span>
      )}
    </div>
  );
}
