import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "./ui/Logo";
import Botao from "./ui/Botao";
import Icone from "./ui/Icones";
import { linkWhatsapp } from "../data/loja";
import { suave } from "../hooks/useAnimacoes";

const links = [
  { rotulo: "A Loja", href: "#sobre" },
  { rotulo: "Serviços", href: "#servicos" },
  { rotulo: "Avaliações", href: "#avaliacoes" },
  { rotulo: "Localização", href: "#localizacao" },
];

export default function Cabecalho() {
  const { scrollY } = useScroll();
  const [solido, setSolido] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setSolido(v > 80));

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: suave, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            solido
              ? "bg-white/85 shadow-[0_10px_40px_-18px_rgba(0,0,0,.45)] backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <a href="#topo" aria-label="ConsertaBike Camaragibe — início">
            <Logo
              iconClassName="h-10 w-10"
              textClassName={solido ? "text-tinta" : "text-tinta"}
              className="select-none"
            />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-4 py-2 font-display text-sm font-medium text-tinta/70 transition-colors hover:text-tinta"
              >
                <span className="relative z-10">{l.rotulo}</span>
                <span className="absolute inset-x-4 bottom-1.5 h-[2px] origin-left scale-x-0 bg-lima-500 transition-transform duration-300 hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <Botao
                href={linkWhatsapp()}
                variante="verde"
                tamanho="sm"
                icone={<Icone.whatsapp className="h-4 w-4" />}
              >
                WhatsApp
              </Botao>
            </span>

            <button
              onClick={() => setMenuAberto((v) => !v)}
              aria-label="Abrir menu"
              aria-expanded={menuAberto}
              className="grid h-10 w-10 place-items-center rounded-full bg-tinta text-white md:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <motion.span
                  animate={menuAberto ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute inset-x-0 top-0 block h-[2px] rounded bg-current"
                />
                <motion.span
                  animate={menuAberto ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute inset-x-0 top-1.5 block h-[2px] rounded bg-current"
                />
                <motion.span
                  animate={menuAberto ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="absolute inset-x-0 top-3 block h-[2px] rounded bg-current"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: suave }}
            className="fixed inset-x-3 top-[4.6rem] z-50 rounded-3xl bg-tinta p-3 text-white shadow-2xl md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuAberto(false)}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i + 0.08 }}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg font-semibold transition-colors hover:bg-white/10"
              >
                {l.rotulo}
                <Icone.seta className="h-4 w-4 text-lima-500" />
              </motion.a>
            ))}
            <Botao
              href={linkWhatsapp()}
              variante="verde"
              className="mt-2 w-full"
              icone={<Icone.whatsapp className="h-5 w-5" />}
            >
              Falar no WhatsApp
            </Botao>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
