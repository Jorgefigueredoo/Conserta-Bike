import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo, { BikeIcon } from "./ui/Logo";
import Botao from "./ui/Botao";
import Icone from "./ui/Icones";
import { loja, linkWhatsapp } from "../data/loja";
import { suave, useParallaxAtivo } from "../hooks/useAnimacoes";

export default function Hero() {
  const secao = useRef(null);
  const parallax = useParallaxAtivo();

  // Progresso do scroll DENTRO do hero: 0 = topo, 1 = hero saiu da tela.
  const { scrollYProgress } = useScroll({
    target: secao,
    offset: ["start start", "end start"],
  });

  // Camadas em velocidades diferentes = sensação de profundidade.
  const yConteudo = useTransform(scrollYProgress, [0, 1], ["0%", parallax ? "34%" : "0%"]);
  const opacidade = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const escala = useTransform(scrollYProgress, [0, 1], [1, parallax ? 0.92 : 1]);

  const yBikeFundo = useTransform(scrollYProgress, [0, 1], ["0%", parallax ? "-38%" : "0%"]);
  const xBikeFundo = useTransform(scrollYProgress, [0, 1], ["0%", parallax ? "18%" : "0%"]);
  const rotBikeFundo = useTransform(scrollYProgress, [0, 1], [0, parallax ? 16 : 0]);

  const yBorrao = useTransform(scrollYProgress, [0, 1], ["0%", parallax ? "22%" : "0%"]);

  return (
    <section
      id="topo"
      ref={secao}
      className="textura-grao relative flex min-h-[100svh] items-center overflow-hidden bg-lima-500 pt-28 pb-32 sm:pt-32 sm:pb-24"
    >
      {/* ---------- CAMADAS DE FUNDO (parallax) ---------- */}
      <motion.div
        style={{ y: yBorrao }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-0 h-[38rem] w-[38rem] rounded-full bg-lima-300/50 blur-[110px]" />
        <div className="absolute -right-32 bottom-[-8rem] h-[34rem] w-[34rem] rounded-full bg-lima-700/30 blur-[120px]" />
      </motion.div>

      {/* Malha de linhas finíssimas - textura de oficina */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0b0c0a 1px, transparent 1px), linear-gradient(to bottom, #0b0c0a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, #000 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, #000 20%, transparent 78%)",
        }}
      />

      {/* Bike gigante fantasma ao fundo */}
      <motion.div
        style={{ y: yBikeFundo, x: xBikeFundo, rotate: rotBikeFundo }}
        className="pointer-events-none absolute -right-[18%] top-[12%] w-[95vw] max-w-[1150px] text-tinta/[0.07] sm:-right-[8%] sm:top-[6%]"
        aria-hidden="true"
      >
        <BikeIcon className="h-full w-full" strokeWidth={2.2} />
      </motion.div>

      {/* ---------- CONTEÚDO ---------- */}
      <motion.div
        style={{ y: yConteudo, opacity: opacidade, scale: escala }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: suave, delay: 0.1 }}
          className="mb-6 inline-flex"
        >
          <div className="flex items-center gap-3 rounded-full bg-tinta px-3 py-2 pr-5 text-white">
            <Logo mostrarTexto={false} iconClassName="h-9 w-9 shadow-none" />
            <div className="leading-tight">
              <p className="font-display text-sm font-bold tracking-tight">
                {loja.nomeCompleto}
              </p>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-lima-400">
                {loja.chamada}
              </p>
            </div>
          </div>
        </motion.div>

        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,8.2vw,5.6rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-tinta">
          {["Sua bike", "merece", "oficina de", "verdade."].map((linha, i) => (
            <span key={linha} className="block overflow-hidden">
              <motion.span
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.95, ease: suave, delay: 0.25 + i * 0.09 }}
                className={`block ${
                  i === 3 ? "text-white drop-shadow-[0_3px_0_rgba(11,12,10,0.25)]" : ""
                }`}
              >
                {linha}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: suave, delay: 0.7 }}
          className="mt-6 max-w-xl text-[1.02rem] font-medium leading-relaxed text-tinta/80 sm:text-xl"
        >
          {loja.slogan} Venda, manutenção e acessórios em Aldeia dos Camarás,
          com um dos times de mecânicos mais especializados do Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: suave, delay: 0.82 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Botao
            href={linkWhatsapp()}
            variante="preto"
            tamanho="lg"
            icone={<Icone.whatsapp className="h-5 w-5 text-lima-400" />}
          >
            Fale no WhatsApp
          </Botao>
          <Botao
            href={loja.mapaLink}
            variante="branco"
            tamanho="lg"
            icone={<Icone.pin className="h-5 w-5 text-lima-600" />}
          >
            Ver Localização
          </Botao>
        </motion.div>

        {/* Prova social logo no primeiro olhar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5 text-tinta">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.4, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.05 + i * 0.08, type: "spring", stiffness: 300 }}
                >
                  <Icone.estrela className="h-5 w-5" />
                </motion.span>
              ))}
            </div>
            <p className="font-display text-sm font-bold tracking-tight text-tinta">
              {loja.avaliacao.nota}{" "}
              <span className="font-medium text-tinta/60">
                no {loja.avaliacao.fonte}
              </span>
            </p>
          </div>

          <div className="hidden h-6 w-px bg-tinta/20 sm:block" />

          <p className="flex items-center gap-2 text-sm font-medium text-tinta/70">
            <Icone.relogio className="h-4 w-4" />
            {loja.horario.resumo}
          </p>
        </motion.div>
      </motion.div>

      {/* ---------- INDICADOR DE SCROLL ---------- */}
      <motion.div
        style={{ opacity: opacidade }}
        className="absolute inset-x-0 bottom-7 z-10 flex justify-center"
      >
        <motion.a
          href="#sobre"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-tinta/60 transition-colors hover:text-tinta"
          aria-label="Rolar para a próxima seção"
        >
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em]">
            Role
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-tinta/25">
            <Icone.seta className="h-4 w-4 rotate-90" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
