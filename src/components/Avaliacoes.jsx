import { motion } from "framer-motion";
import Icone from "./ui/Icones";
import Reveal from "./ui/Reveal";
import Botao from "./ui/Botao";
import { loja, depoimentos } from "../data/loja";
import { suave } from "../hooks/useAnimacoes";

export default function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden bg-neutro py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-lima-500/15 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* --------- NOTA EM DESTAQUE --------- */}
        <div>
          <Reveal direcao="cima">
            <span className="inline-flex items-center gap-2 rounded-full bg-lima-500/15 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-lima-700">
              <span className="h-1.5 w-1.5 rounded-full bg-lima-500" />
              Avaliações
            </span>
          </Reveal>

          <div className="mt-7 flex items-end gap-4">
            <motion.p
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: suave }}
              className="font-display text-[clamp(4.5rem,15vw,8.5rem)] font-extrabold leading-[0.8] tracking-[-0.05em] text-tinta"
            >
              {loja.avaliacao.nota}
            </motion.p>

            <div className="pb-3">
              <div className="flex gap-1 text-lima-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.3, rotate: -50 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.25 + i * 0.1,
                      type: "spring",
                      stiffness: 280,
                      damping: 14,
                    }}
                  >
                    <Icone.estrela className="h-6 w-6 drop-shadow-[0_2px_6px_rgba(141,199,30,.5)]" />
                  </motion.span>
                ))}
              </div>
              <p className="mt-2 font-display text-sm font-bold text-tinta/60">
                no {loja.avaliacao.fonte}
              </p>
            </div>
          </div>

          <Reveal direcao="cima" atraso={0.15}>
            <h2 className="mt-8 max-w-sm font-display text-[clamp(1.7rem,4.2vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-tinta">
              Quem já veio,{" "}
              <span className="text-lima-600">volta e indica.</span>
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-tinta/60">
              Atendimento direto, preço justo e serviço bem feito. É isso que os
              clientes escrevem sobre a gente.
            </p>
          </Reveal>

          <Reveal direcao="cima" atraso={0.25} className="mt-8">
            <Botao href={loja.mapaLink} variante="contorno" className="text-tinta">
              Ver no Google
              <Icone.seta className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Botao>
          </Reveal>
        </div>

        {/* --------- DEPOIMENTOS --------- */}
        <div className="space-y-5">
          {depoimentos.map((d, i) => (
            <motion.figure
              key={d.autor}
              initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, ease: suave, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[1.75rem] bg-white p-8 shadow-[0_30px_60px_-45px_rgba(11,12,10,.6)] sm:p-10"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-6 text-lima-500/20 transition-colors duration-500 group-hover:text-lima-500/35"
              >
                <Icone.aspas className="h-14 w-14" />
              </span>

              <div className="mb-5 flex gap-1 text-lima-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icone.estrela key={s} className="h-4 w-4" />
                ))}
              </div>

              <blockquote className="relative font-display text-xl font-bold leading-snug tracking-tight text-tinta sm:text-2xl">
                “{d.texto}”
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-tinta/10 pt-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-tinta font-display text-sm font-extrabold text-lima-500">
                  {d.iniciais}
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base font-bold text-tinta">
                    {d.autor}
                  </span>
                  <span className="block text-xs font-medium text-tinta/50">
                    {d.papel}
                  </span>
                </span>
              </figcaption>

              {/* Barrinha verde que cresce no hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-lima-500 transition-transform duration-500 group-hover:scale-x-100"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
