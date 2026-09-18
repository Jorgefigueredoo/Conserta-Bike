import { motion } from "framer-motion";

/**
 * Botão/CTA do site. Variantes: "preto", "verde", "contorno", "branco".
 * Renderiza como <a> quando recebe href.
 */
export default function Botao({
  children,
  href,
  variante = "preto",
  tamanho = "md",
  icone = null,
  className = "",
  ...rest
}) {
  const variantes = {
    preto:
      "bg-tinta text-white hover:bg-tinta-700 shadow-[0_12px_30px_-12px_rgba(11,12,10,.9)]",
    verde:
      "bg-lima-500 text-tinta hover:bg-lima-400 shadow-[0_12px_30px_-12px_rgba(141,199,30,.95)]",
    branco:
      "bg-white text-tinta hover:bg-lima-50 shadow-[0_12px_30px_-12px_rgba(0,0,0,.35)]",
    contorno:
      "bg-transparent text-current ring-2 ring-current/30 hover:ring-current/70 hover:bg-current/5",
  };

  const tamanhos = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3.5 text-[0.95rem]",
    lg: "px-8 py-4.5 text-base sm:text-lg",
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold tracking-tight transition-colors duration-300 ${variantes[variante]} ${tamanhos[tamanho]} ${className}`}
      {...rest}
    >
      {icone}
      {children}
    </Tag>
  );
}
