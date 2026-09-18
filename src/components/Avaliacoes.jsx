import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icone from "./ui/Icones";
import Botao from "./ui/Botao";
import { loja, depoimentos } from "../data/loja";
import { suave, useParallaxAtivo } from "../hooks/useAnimacoes";

/* ============================================================================
   AVALIAÇÕES
   Composição: seção em tela cheia, com a própria nota vazada em tamanho
   gigante como pano de fundo em parallax. O 5,0 é a entrada da seção —
   não existe rótulo antes do título.
   ============================================================================ */
export default function Avaliacoes() {
  const secao = useRef(null);
  const parallax = useParallaxAtivo();

  const { scrollYProgress } = useScroll({
    target: secao,
    offset: ["start end", "end start"],
  });

  const yFundo = useTransform(scrollYProgress, [0, 1], parallax ? [-70, 70] : [0, 0]);

  return (
    <section
      id="avaliacoes"
      ref={secao}
      className="relative isolate overflow-hidden bg-tinta py-24 text-white sm:py-32"
    >
      {/* Fundo tipográfico: a própria nota, gigante e vazada, em parallax.
          A centralização fica no wrapper — o `y` do Framer sobrescreveria
          qualquer translate vindo de classe. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <motion.span
          style={{ y: yFundo, "--cor-contorno": "rgba(255,255,255,.13)" }}
          className="texto-contorno-grosso font-display text-[46vw] font-extrabold leading-none tracking-[-0.06em]"
        >
          {loja.avaliacao.nota}
        </motion.span>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-lima-500/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---------- A NOTA É A ABERTURA ---------- */}
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-18% 0px" }}
            transition={{ duration: 1.05, ease: suave }}
            className="font-display text-[clamp(6rem,22vw,14rem)] font-extrabold leading-[0.78] tracking-[-0.06em] text-lima-500"
          >
            {loja.avaliacao.nota}
          </motion.p>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex gap-1 text-lima-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.3, rotate: -50 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + i * 0.09,
                    type: "spring",
                    stiffness: 280,
                    damping: 14,
                  }}
                >
                  <Icone.estrela className="h-5 w-5" />
                </motion.span>
              ))}
            </div>
            <p className="font-display text-sm font-bold text-white/60">
              no {loja.avaliacao.fonte}
            </p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.85, ease: suave, delay: 0.15 }}
            className="mt-10 max-w-2xl font-display text-[clamp(1.9rem,5vw,3.2rem)] font-extrabold leading-[1.04] tracking-[-0.035em]"
          >
            Quem já veio,{" "}
            <span className="text-lima-500">volta e indica.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/35"
          >
            Avaliações públicas no perfil do Google da loja
          </motion.p>
        </div>

        {/* ---------- DEPOIMENTOS EM ALTURAS DIFERENTES ---------- */}
        <div className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
          {depoimentos.map((d, i) => (
            <motion.figure
              key={d.autor}
              initial={{ opacity: 0, y: 64, rotate: i % 2 === 0 ? -1.6 : 1.6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, ease: suave, delay: i * 0.14 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-md sm:p-10 ${
                i % 2 === 1 ? "lg:mt-16" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-6 text-lima-500/25 transition-colors duration-500 group-hover:text-lima-500/45"
              >
                <Icone.aspas className="h-14 w-14" />
              </span>

              <blockquote className="relative font-display text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                “{d.texto}”
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lima-500 font-display text-sm font-extrabold text-tinta">
                  {d.iniciais}
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base font-bold">
                    {d.autor}
                  </span>
                  <span className="block text-xs font-medium text-white/45">
                    {d.papel}
                  </span>
                </span>
              </figcaption>

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-lima-500 transition-transform duration-500 group-hover:scale-x-100"
              />
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: suave }}
          className="mt-14 flex justify-center"
        >
          <Botao href={loja.mapaLink} variante="contorno" className="text-white">
            Ver as avaliações no Google
            <Icone.seta className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Botao>
        </motion.div>
      </div>
    </section>
  );
}
