import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icone from "./ui/Icones";
import Botao from "./ui/Botao";
import Reveal from "./ui/Reveal";
import { servicos, linkWhatsapp } from "../data/loja";
import { suave, useParallaxAtivo } from "../hooks/useAnimacoes";

export default function Servicos() {
  const secao = useRef(null);
  const parallax = useParallaxAtivo();

  const { scrollYProgress } = useScroll({
    target: secao,
    offset: ["start end", "end start"],
  });

  const yBrilho = useTransform(scrollYProgress, [0, 1], parallax ? ["-20%", "40%"] : ["0%", "0%"]);

  return (
    <section
      id="servicos"
      ref={secao}
      className="relative overflow-hidden bg-tinta py-24 text-white sm:py-32"
    >
      {/* Brilho verde que acompanha o scroll */}
      <motion.div
        style={{ y: yBrilho }}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-lima-500/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Cabeçalho da seção */}
        <div className="mb-14 max-w-3xl sm:mb-20">
          <Reveal direcao="cima">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-lima-400">
              <span className="h-1.5 w-1.5 rounded-full bg-lima-500" />
              O que oferecemos
            </span>
          </Reveal>

          <Reveal direcao="cima" atraso={0.08}>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,4rem)] font-extrabold leading-[1] tracking-[-0.035em]">
              Tudo para a sua bike{" "}
              <span className="text-lima-500">em um só lugar.</span>
            </h2>
          </Reveal>

          <Reveal direcao="cima" atraso={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Da revisão simples ao upgrade completo: você entra com a bike e o
              problema, a gente devolve ela rodando redondo.
            </p>
          </Reveal>
        </div>

        {/* Cards — entram um a um conforme o scroll */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicos.map((servico, i) => {
            const Simbolo = Icone[servico.icone];
            return (
              <motion.article
                key={servico.titulo}
                variants={{
                  hidden: { opacity: 0, y: 46, scale: 0.97 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: suave },
                  },
                }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-lima-500/60 hover:bg-white/[0.07]"
              >
                {/* Luz que acende no hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lima-500/0 blur-3xl transition-all duration-500 group-hover:bg-lima-500/30"
                />

                <div className="relative flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lima-500 text-tinta transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Simbolo className="h-7 w-7" />
                  </span>
                  <span className="font-display text-sm font-bold tabular-nums text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-7 font-display text-2xl font-extrabold tracking-tight">
                  {servico.titulo}
                </h3>
                <p className="relative mt-3 text-[0.95rem] leading-relaxed text-white/55">
                  {servico.texto}
                </p>

                <span className="relative mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-lima-500 opacity-0 transition-all duration-400 group-hover:opacity-100">
                  Saiba mais
                  <Icone.seta className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1" />
                </span>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Faixa de chamada */}
        <Reveal direcao="cima" atraso={0.1} className="mt-14">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-lima-500 p-8 text-tinta sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                Não achou o que procurava?
              </h3>
              <p className="mt-2 max-w-md text-[0.98rem] font-medium text-tinta/70">
                Manda uma foto da sua bike no WhatsApp. A gente avalia e te diz
                exatamente o que precisa ser feito.
              </p>
            </div>
            <Botao
              href={linkWhatsapp("Olá! Queria uma avaliação da minha bike.")}
              variante="preto"
              tamanho="lg"
              className="shrink-0"
              icone={<Icone.whatsapp className="h-5 w-5 text-lima-400" />}
            >
              Pedir avaliação
            </Botao>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
