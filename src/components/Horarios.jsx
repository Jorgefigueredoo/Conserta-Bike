import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icone from "./ui/Icones";
import Botao from "./ui/Botao";
import { BikeIcon } from "./ui/Logo";
import { loja, marcas, linkWhatsapp, situacaoAgora, fraseSituacao } from "../data/loja";
import { suave, useParallaxAtivo } from "../hooks/useAnimacoes";

/* ============================================================================
   A SEMANA NA OFICINA
   ----------------------------------------------------------------------------
   Composição em ficha técnica: a tabela dia a dia de `loja.horario.dias` é o
   centro da seção, com um selo que calcula, no relógio do visitante, se a loja
   está aberta neste momento. Nenhum outro bloco do site tem esse formato.
   ============================================================================ */

/** Recalcula a situação da loja a cada minuto. */
function useSituacao() {
  const [situacao, setSituacao] = useState(() => situacaoAgora());

  useEffect(() => {
    const id = setInterval(() => setSituacao(situacaoAgora()), 60_000);
    return () => clearInterval(id);
  }, []);

  return situacao;
}

export default function Horarios() {
  const secao = useRef(null);
  const parallax = useParallaxAtivo();
  const situacao = useSituacao();

  const { scrollYProgress } = useScroll({
    target: secao,
    offset: ["start end", "end start"],
  });

  const yBike = useTransform(scrollYProgress, [0, 1], parallax ? [40, -60] : [0, 0]);

  const indiceHoje = loja.horario.dias.indexOf(situacao.hoje);

  return (
    <section
      id="horarios"
      ref={secao}
      className="relative overflow-hidden bg-tinta py-20 text-white sm:py-28"
    >
      <motion.div
        style={{ y: yBike }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 w-[46vw] max-w-[520px] text-white/[0.04]"
      >
        <BikeIcon className="h-full w-full" strokeWidth={2.4} />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---------- ABERTURA: o estado da loja agora, não um rótulo ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: suave }}
          className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <SeloSituacao situacao={situacao} />
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2rem,5.2vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
              A semana inteira{" "}
              <span className="text-lima-500">na Estrada de Aldeia.</span>
            </h2>
          </div>

          <p className="max-w-xs font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-white/40 sm:text-right">
            {loja.endereco.logradouro}, {loja.endereco.numero}
            <br />
            {loja.endereco.complemento}
            <br />
            CEP {loja.endereco.cep}
          </p>
        </motion.div>

        {/* ---------- FICHA: dia a dia ---------- */}
        <div className="grid gap-8 pt-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <motion.ul
            initial="oculto"
            whileInView="visivel"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={{ visivel: { transition: { staggerChildren: 0.06 } } }}
            className="divide-y divide-white/10"
          >
            {loja.horario.dias.map((d, i) => {
              const ehHoje = i === indiceHoje;
              return (
                <motion.li
                  key={d.dia}
                  variants={{
                    oculto: { opacity: 0, x: -18 },
                    visivel: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: suave },
                    },
                  }}
                  className={`flex items-baseline gap-4 py-3.5 ${
                    ehHoje ? "text-white" : "text-white/55"
                  }`}
                >
                  <span className="w-4 shrink-0 font-mono text-[0.68rem] text-lima-500">
                    {ehHoje ? "▸" : ""}
                  </span>

                  <span
                    className={`shrink-0 ${
                      ehHoje ? "font-display font-bold" : "font-medium"
                    }`}
                  >
                    {d.dia}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px grow border-b border-dashed border-white/15"
                  />

                  <span
                    className={`shrink-0 font-display tabular-nums ${
                      d.fechado
                        ? "font-medium text-white/30"
                        : ehHoje
                          ? "font-extrabold text-lima-500"
                          : "font-bold text-white/80"
                    }`}
                  >
                    {d.horas}
                  </span>

                  {ehHoje && (
                    <span className="hidden shrink-0 rounded-full bg-lima-500 px-2.5 py-0.5 font-display text-[0.65rem] font-extrabold uppercase tracking-wider text-tinta sm:inline">
                      Hoje
                    </span>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>

          {/* ---------- COLUNA DE APOIO: o que se resolve em cada visita ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.85, ease: suave, delay: 0.15 }}
            className="flex flex-col justify-between gap-8 rounded-[1.75rem] bg-white/[0.05] p-7 sm:p-8"
          >
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-lima-500">
                Sem hora marcada
              </p>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-white/70">
                Não trabalhamos com agendamento: dentro desse horário, é só
                chegar com a bike. Se preferir adiantar, manda a foto do
                problema no WhatsApp antes de sair de casa.
              </p>

              <dl className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm">
                <Linha rotulo="Bairro" valor={loja.endereco.bairro} />
                <Linha rotulo="Cidade" valor={`${loja.endereco.cidade} — ${loja.endereco.uf}`} />
                <Linha rotulo="Marcas em estoque" valor={`${marcas.length} parceiras`} />
                <Linha rotulo="Telefone" valor={loja.telefone} />
              </dl>
            </div>

            <Botao
              href={linkWhatsapp(
                "Olá! Queria saber se vocês estão abertos agora para eu levar minha bike."
              )}
              variante="verde"
              className="w-full"
              icone={<Icone.whatsapp className="h-5 w-5" />}
            >
              Confirmar no WhatsApp
            </Botao>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------- */

function SeloSituacao({ situacao }) {
  const aberto = situacao.aberto;

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4 font-display text-sm font-bold ${
        aberto ? "bg-lima-500 text-tinta" : "bg-white/10 text-white/80"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        {aberto && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tinta/50" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            aberto ? "bg-tinta" : "bg-white/40"
          }`}
        />
      </span>
      {fraseSituacao(situacao)}
    </span>
  );
}

function Linha({ rotulo, valor }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="shrink-0 text-white/40">{rotulo}</dt>
      <dd className="text-right font-display font-bold text-white/85">{valor}</dd>
    </div>
  );
}
