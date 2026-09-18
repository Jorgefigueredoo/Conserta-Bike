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

/* ============================================================================
   MARCAS PARCEIRAS
   Composição: o número real de marcas abre a seção, a lista diz o papel de
   cada uma, e as faixas em movimento fecham. Sem cabeçalho centralizado.
   ============================================================================ */
export default function Marcas() {
  const nomes = marcas.map((m) => m.nome);

  return (
    <section className="relative overflow-hidden bg-lima-500 py-16 sm:py-20">
      <div className="textura-grao pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal direcao="cima">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
            {/* O número de marcas É a abertura da seção */}
            <h2 className="flex items-start gap-4 font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-tinta">
              <span className="font-display text-[clamp(3.4rem,7vw,5rem)] font-extrabold leading-[0.8] tracking-[-0.05em]">
                {marcas.length}
              </span>
              <span className="max-w-xs pt-1">
                marcas parceiras — e nenhuma escolhida por acaso.
              </span>
            </h2>

            <p className="max-w-sm text-[0.95rem] font-medium leading-relaxed text-tinta/70">
              São as marcas cujas peças a loja mantém na prateleira. É por isso
              que dá para resolver na hora em vez de mandar você esperar
              encomenda de fora.
            </p>
          </div>
        </Reveal>

        {/* Cada marca com o que a loja usa dela */}
        <Reveal direcao="cima" atraso={0.1}>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t-2 border-tinta/15 pt-8 sm:grid-cols-3 lg:grid-cols-6">
            {marcas.map((m) => (
              <div key={m.nome}>
                <dt className="font-display text-lg font-extrabold uppercase tracking-tight text-tinta">
                  {m.nome}
                </dt>
                <dd className="mt-1 text-[0.82rem] font-medium leading-snug text-tinta/60">
                  {m.papel}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Duas faixas cruzadas, correndo em sentidos opostos */}
      <div className="relative mt-12 select-none sm:mt-14">
        <div className="-ml-[6%] w-[112%] -rotate-2 bg-tinta text-lima-500 shadow-[0_20px_50px_-30px_rgba(0,0,0,.9)]">
          <Faixa itens={nomes} separadorClassName="text-lima-500/60" />
        </div>

        <div className="-ml-[6%] mt-4 w-[112%] rotate-2 bg-white text-tinta shadow-[0_20px_50px_-30px_rgba(0,0,0,.6)]">
          <Faixa itens={nomes} inverso separadorClassName="text-lima-500" />
        </div>
      </div>
    </section>
  );
}
