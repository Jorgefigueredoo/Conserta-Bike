import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Icone from "./Icones";
import { linkWhatsapp } from "../../data/loja";
import { suave } from "../../hooks/useAnimacoes";

/** Botão de WhatsApp que aparece depois que o visitante passa do hero. */
export default function BotaoFlutuante() {
  const { scrollY } = useScroll();
  const [visivel, setVisivel] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setVisivel(v > 600));

  return (
    <AnimatePresence>
      {visivel && (
        <motion.a
          href={linkWhatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 24 }}
          transition={{ duration: 0.45, ease: suave }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-lima-500 p-4 text-tinta shadow-[0_16px_40px_-12px_rgba(141,199,30,.9)] sm:bottom-7 sm:right-7"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-lima-500 opacity-25"
          />
          <Icone.whatsapp className="relative h-7 w-7" />
          <span className="relative max-w-0 overflow-hidden whitespace-nowrap font-display text-[0.95rem] font-bold transition-all duration-500 group-hover:max-w-[12rem] group-hover:pl-2.5">
            Falar no WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
