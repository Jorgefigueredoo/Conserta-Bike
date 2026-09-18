import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal, { TituloRevelado } from "./ui/Reveal";
import Foto from "./ui/Foto";
import Icone from "./ui/Icones";
import Botao from "./ui/Botao";
import { loja, marcas, linkWhatsapp } from "../data/loja";
import { suave, useParallaxAtivo } from "../hooks/useAnimacoes";

export default function Sobre() {
  const secao = useRef(null);
  const parallax = useParallaxAtivo();

  const { scrollYProgress } = useScroll({
    target: secao,
    offset: ["start end", "end start"],
  });

  // A foto se move mais devagar que a moldura: efeito clássico de parallax.
  const yFoto = useTransform(scrollYProgress, [0, 1], parallax ? ["-12%", "12%"] : ["0%", "0%"]);
  const escalaFoto = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.06, 1.18]);
  const yEtiqueta = useTransform(scrollYProgress, [0, 1], parallax ? [60, -60] : [0, 0]);
  const xPalavra = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? ["-56%", "-44%"] : ["-50%", "-50%"]
  );

  return (
    <section
      id="sobre"
      ref={secao}
      className="relative overflow-hidden bg-neutro py-24 sm:py-32"
    >
      {/* Palavra gigante ao fundo, típica de scrollytelling */}
      <motion.p
        style={{ x: xPalavra }}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-6 whitespace-nowrap font-display text-[12.5vw] font-extrabold leading-none tracking-[-0.05em] text-tinta/[0.04] sm:text-[8.4vw]"
      >
        PAIXÃO POR BIKES
      </motion.p>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* ---------------- FOTO DA FACHADA ---------------- */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(14% 14% 14% 14% round 2rem)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
            viewport={{ once: true, margin: "-18% 0px" }}
            transition={{ duration: 1.15, ease: suave }}
            className="relative aspect-4/5 overflow-hidden rounded-[2rem] bg-tinta shadow-[0_40px_80px_-40px_rgba(11,12,10,.6)] sm:aspect-4/3 lg:aspect-4/5"
          >
            <motion.div style={{ y: yFoto, scale: escalaFoto }} className="h-full w-full">
              <Foto slot="fachada" className="h-full w-full object-cover" />
            </motion.div>

            {/* Degradê para o texto do canto respirar */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-tinta/85 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-lima-400">
                  Nossa casa
                </p>
                <p className="mt-1 font-display text-xl font-bold leading-tight text-white">
                  Aldeia dos Camarás
                </p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lima-500 text-tinta">
                <Icone.pin className="h-5 w-5" />
              </span>
            </div>
          </motion.div>

          {/* Etiqueta flutuante com parallax próprio (fora da moldura para não ser cortada) */}
          <motion.div
            style={{ y: yEtiqueta }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-18% 0px" }}
            transition={{ duration: 0.7, ease: suave, delay: 0.5 }}
            className="absolute -right-2 top-8 z-10 hidden rounded-2xl bg-white p-4 shadow-[0_24px_50px_-24px_rgba(11,12,10,.55)] sm:block lg:-right-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-tinta text-lima-500">
                <Icone.wrench className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-extrabold text-tinta">
                  Oficina especializada
                </p>
                <p className="text-xs font-medium text-tinta/60">
                  Diagnóstico honesto
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------------- TEXTO ---------------- */}
        {/* Entrada da seção: rótulo girado na lateral, no lugar da antiga pílula */}
        <div className="relative lg:pl-14">
          <Reveal
            direcao="baixo"
            className="absolute -left-1 top-1 hidden lg:block"
          >
            <span className="rotulo-vertical font-mono text-[0.7rem] uppercase tracking-[0.3em] text-tinta/35">
              01 — {loja.endereco.logradouro}, {loja.endereco.numero}
            </span>
          </Reveal>

          <span className="mb-5 block font-mono text-[0.7rem] uppercase tracking-[0.22em] text-tinta/35 lg:hidden">
            01 — {loja.endereco.logradouro}, {loja.endereco.numero}
          </span>

          <TituloRevelado
            texto="Somos apaixonados por bikes."
            destaque={[2, 3]}
            className="font-display text-[clamp(2.1rem,5.4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-tinta"
          />

          <div className="mt-7 space-y-5">
            {loja.textoInstitucional.map((paragrafo, i) => (
              <Reveal key={i} direcao="cima" atraso={0.12 + i * 0.12}>
                <p className="text-[1.05rem] leading-relaxed text-tinta/70">
                  {paragrafo}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Dados de bairro, não métrica de painel: onde fica e com o que
              a loja realmente trabalha, marca por marca. */}
          <Reveal direcao="cima" atraso={0.28}>
            <dl className="mt-9 space-y-5 border-t border-tinta/10 pt-8">
              <div>
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-tinta/40">
                  No bairro
                </dt>
                <dd className="mt-1.5 font-display text-lg font-bold leading-snug tracking-tight text-tinta">
                  {loja.endereco.bairro}, em {loja.endereco.cidade} — na{" "}
                  {loja.endereco.logradouro}, número {loja.endereco.numero}.
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-tinta/40">
                  Trabalhamos com
                </dt>
                <dd className="mt-1.5 flex flex-wrap gap-x-1.5 gap-y-2">
                  {marcas.map((m, i) => (
                    <span key={m.nome} className="font-display text-lg font-bold tracking-tight text-tinta">
                      {m.nome.charAt(0) + m.nome.slice(1).toLowerCase()}
                      {i < marcas.length - 1 && (
                        <span className="text-lima-600">,</span>
                      )}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal direcao="cima" atraso={0.34}>
            <p className="mt-9 border-l-4 border-lima-500 pl-5 font-display text-xl font-bold leading-snug tracking-tight text-tinta sm:text-2xl">
              “Não tem problema em bike que não resolvamos.”
            </p>
          </Reveal>

          <Reveal direcao="cima" atraso={0.4} className="mt-9">
            <Botao
              href={linkWhatsapp("Olá! Quero falar com a oficina da ConsertaBike.")}
              variante="preto"
              icone={<Icone.whatsapp className="h-5 w-5 text-lima-400" />}
            >
              Falar com a oficina
            </Botao>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
