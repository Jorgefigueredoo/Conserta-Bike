import { marcas } from "../data/loja";
import Reveal from "./ui/Reveal";
import { BikeIcon } from "./ui/Logo";

/* Uma faixa de marquee. `inverso` faz a faixa correr no sentido contrário. */
function Faixa({ itens, inverso = false, className = "", separadorClassName = "" }) {
  // A lista é duplicada para o loop ficar contínuo, sem "pulo".
  const lista = [...itens, ...itens];

  return (
    <div className={`flex overflow-hidden py-5 ${className}`}>
      <div
        className={`flex w-max shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16 ${
          inverso ? "animate-marquee-rev" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
      >
        {lista.map((marca, i) => (
          <span key={`${marca}-${i}`} className="flex items-center gap-10 sm:gap-16">
            <span className="font-display text-2xl font-extrabold uppercase tracking-[0.1em] sm:text-4xl">
              {marca}
            </span>
            <BikeIcon
              className={`h-5 w-5 shrink-0 sm:h-7 sm:w-7 ${separadorClassName}`}
              strokeWidth={5}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marcas() {
  return (
    <section className="relative overflow-hidden bg-lima-500 py-20 sm:py-24">
      <div className="textura-grao pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal direcao="cima">
          <span className="inline-flex items-center gap-2 rounded-full bg-tinta px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-lima-400">
            <span className="h-1.5 w-1.5 rounded-full bg-lima-500" />
            Marcas parceiras
          </span>
        </Reveal>

        <Reveal direcao="cima" atraso={0.08}>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(1.9rem,5vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-tinta">
            Trabalhamos com quem o ciclista confia.
          </h2>
        </Reveal>
      </div>

      {/* Duas faixas cruzadas, correndo em sentidos opostos */}
      <div className="relative mt-14 select-none">
        <div className="-ml-[6%] w-[112%] -rotate-2 bg-tinta text-lima-500 shadow-[0_20px_50px_-30px_rgba(0,0,0,.9)]">
          <Faixa itens={marcas} separadorClassName="text-lima-500/60" />
        </div>

        <div className="-ml-[6%] mt-4 w-[112%] rotate-2 bg-white text-tinta shadow-[0_20px_50px_-30px_rgba(0,0,0,.6)]">
          <Faixa itens={marcas} inverso separadorClassName="text-lima-500" />
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <Reveal direcao="cima" atraso={0.1}>
          <p className="mx-auto max-w-xl text-center text-[0.98rem] font-medium leading-relaxed text-tinta/70">
            Peças originais e compatíveis em estoque — porque bike parada
            esperando peça não faz sentido para ninguém.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
