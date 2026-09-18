import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icone from "./ui/Icones";
import Botao from "./ui/Botao";
import Reveal from "./ui/Reveal";
import { servicos, marcas, linkWhatsapp } from "../data/loja";
import { suave, useParallaxAtivo } from "../hooks/useAnimacoes";

/* ============================================================================
   O QUE OFERECEMOS
   Composição: trilho horizontal com encaixe (snap), em vez de grade de cards.
   Cards tipográficos — o conteúdo concreto (peças, marcas, sistemas) é que faz
   o peso visual, sem foto de banco de imagem.
   ============================================================================ */

export default function Servicos() {
  const secao = useRef(null);
  const trilho = useRef(null);
  const parallax = useParallaxAtivo();
  const [progresso, setProgresso] = useState(0);

  const { scrollYProgress } = useScroll({
    target: secao,
    offset: ["start end", "end start"],
  });

  // O título corre um pouco na horizontal enquanto a seção passa.
  const xTitulo = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? ["0%", "-6%"] : ["0%", "0%"]
  );

  const aoRolar = () => {
    const el = trilho.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgresso(max > 0 ? el.scrollLeft / max : 0);
  };

  const deslizar = (direcao) => {
    const el = trilho.current;
    if (!el) return;
    el.scrollBy({ left: direcao * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section
      id="servicos"
      ref={secao}
      className="relative overflow-hidden bg-neutro py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---------- ABERTURA: as marcas reais no lugar de um rótulo ---------- */}
        <Reveal direcao="cima">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-tinta/40">
            <span className="text-lima-600">03</span>
            <span aria-hidden="true">/</span>
            {marcas.map((m) => m.nome).join(" · ")}
          </p>
        </Reveal>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          {/* As linhas sobem em cascata: variantes no pai (whileInView num
              motion filho aninhado não dispara). */}
          <motion.h2
            style={{ x: xTitulo }}
            initial="oculto"
            whileInView="visivel"
            viewport={{ once: true, margin: "-12% 0px" }}
            variants={{ visivel: { transition: { staggerChildren: 0.09 } } }}
            className="max-w-3xl font-display text-[clamp(2.3rem,6.4vw,4.4rem)] font-extrabold leading-[0.97] tracking-[-0.04em] text-tinta"
          >
            <Linha>Seis frentes,</Linha>
            <Linha>
              <span className="text-lima-600">uma oficina só.</span>
            </Linha>
          </motion.h2>

          {/* Setas de navegação do trilho (só onde há mouse) */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <SetaTrilho direcao={-1} aoClicar={deslizar} rotulo="Ver anteriores" />
            <SetaTrilho direcao={1} aoClicar={deslizar} rotulo="Ver próximos" />
          </div>
        </div>

        <Reveal direcao="cima" atraso={0.14}>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-tinta/60">
            Da revisão simples ao upgrade completo: você entra com a bike e o
            problema, a gente devolve ela rodando redondo.
          </p>
        </Reveal>
      </div>

      {/* Sangra até a borda direita, mas o 1º card alinha com o título.
          O padding vai em style porque usa max()/calc() com a largura do
          container (72rem = max-w-6xl). */}
      <div
        ref={trilho}
        onScroll={aoRolar}
        style={{
          paddingLeft: "max(1.25rem, calc((100% - 72rem) / 2 + 2rem))",
          paddingRight: "1.25rem",
          // sem isto o snap alinha o 1º card à borda e anula o padding
          scrollPaddingLeft: "max(1.25rem, calc((100% - 72rem) / 2 + 2rem))",
        }}
        className="sem-barra-rolagem mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 sm:gap-7"
      >
        {servicos.map((servico, i) => (
          <CartaoServico key={servico.titulo} servico={servico} indice={i} />
        ))}

        {/* Último bloco do trilho: a chamada, no mesmo ritmo dos cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.8, ease: suave }}
          className="flex w-[78vw] max-w-[360px] shrink-0 snap-start flex-col justify-between gap-8 rounded-[2rem] bg-tinta p-8 text-white sm:w-[360px]"
        >
          <div>
            <h3 className="font-display text-3xl font-extrabold leading-[1.02] tracking-tight">
              Seu problema não está na lista?
            </h3>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-white/60">
              Manda uma foto da sua bike no WhatsApp. A gente avalia e te diz
              exatamente o que precisa ser feito.
            </p>
          </div>

          <Botao
            href={linkWhatsapp("Olá! Queria uma avaliação da minha bike.")}
            variante="verde"
            icone={<Icone.whatsapp className="h-5 w-5" />}
          >
            Pedir avaliação
          </Botao>
        </motion.div>

        {/* respiro no fim do trilho */}
        <span className="w-1 shrink-0 sm:w-4" aria-hidden="true" />
      </div>

      {/* ---------- BARRA DE PROGRESSO DO TRILHO ---------- */}
      <div className="mx-auto mt-6 flex max-w-6xl items-center gap-4 px-5 sm:px-8">
        <div className="h-[3px] w-full max-w-[9rem] overflow-hidden rounded-full bg-tinta/10 sm:max-w-xs">
          <div
            className="h-full rounded-full bg-lima-500 transition-[width] duration-200"
            style={{ width: `${18 + progresso * 82}%` }}
          />
        </div>
        <p className="shrink-0 whitespace-nowrap font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-tinta/35 lg:hidden">
          Arraste para o lado
        </p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------- */

function CartaoServico({ servico, indice }) {
  // Molduras alternadas: nenhuma delas é quadrado ou círculo perfeito.
  const recorte = indice % 2 === 0 ? "recorte-folha" : "recorte-folha-alt";
  const giro = indice % 3 === 0 ? "-rotate-1" : indice % 3 === 1 ? "rotate-1" : "rotate-0";

  return (
    <motion.article
      initial={{ opacity: 0, y: 52 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, ease: suave, delay: Math.min(indice, 3) * 0.07 }}
      className={`group relative flex w-[78vw] max-w-[360px] shrink-0 snap-start flex-col justify-between overflow-hidden border-2 border-tinta/10 bg-white p-8 transition-all duration-700 ease-out sm:w-[360px] ${recorte} ${giro} hover:rotate-0 hover:border-tinta`}
    >
      {/* Numeral gigante vazado ao fundo */}
      <span
        aria-hidden="true"
        className="texto-contorno pointer-events-none absolute right-5 top-1 font-display text-[5rem] font-extrabold leading-none [--cor-contorno:rgba(11,12,10,.18)] [transition:--cor-contorno_.7s_ease] group-hover:[--cor-contorno:#8dc71e]"
      >
        {String(indice + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <h3 className="max-w-[10ch] font-display text-[1.9rem] font-extrabold leading-[1.02] tracking-tight text-tinta">
          {servico.titulo}
        </h3>

        <p className="mt-5 text-[0.98rem] leading-relaxed text-tinta/65">
          {servico.texto}
        </p>
      </div>

      <div className="relative mt-8">
        {/* Palavras concretas: peças, sistemas e marcas reais */}
        <ul className="flex flex-wrap gap-1.5">
          {servico.itens.map((item) => (
            <li
              key={item}
              className="rounded-full bg-tinta/[0.06] px-3 py-1.5 font-display text-[0.78rem] font-bold text-tinta/70 transition-colors duration-500 group-hover:bg-lima-500/20 group-hover:text-tinta"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Só aparece quando o dono preencher `detalhe` em src/data/loja.js */}
        {servico.detalhe && (
          <p className="mt-5 flex items-center gap-2 border-t border-tinta/10 pt-4 font-display text-sm font-bold text-lima-700">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lima-500" />
            {servico.detalhe}
          </p>
        )}
      </div>
    </motion.article>
  );
}

function SetaTrilho({ direcao, aoClicar, rotulo }) {
  return (
    <button
      type="button"
      onClick={() => aoClicar(direcao)}
      aria-label={rotulo}
      className="grid h-12 w-12 place-items-center rounded-full border-2 border-tinta/15 text-tinta transition-colors hover:border-tinta hover:bg-tinta hover:text-lima-500"
    >
      <Icone.seta className={`h-5 w-5 ${direcao < 0 ? "rotate-180" : ""}`} />
    </button>
  );
}

/** Uma linha do título que sobe de baixo ao entrar na tela. */
function Linha({ children }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        variants={{
          oculto: { y: "110%" },
          visivel: { y: "0%", transition: { duration: 0.85, ease: suave } },
        }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
