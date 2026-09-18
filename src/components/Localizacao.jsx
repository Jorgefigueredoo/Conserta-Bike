import Reveal from "./ui/Reveal";
import Botao from "./ui/Botao";
import Icone from "./ui/Icones";
import { loja, linkWhatsapp } from "../data/loja";

export default function Localizacao() {
  const { endereco, horario } = loja;

  return (
    <section id="localizacao" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <Reveal direcao="cima">
            <span className="inline-flex items-center gap-2 rounded-full bg-lima-500/15 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-lima-700">
              <span className="h-1.5 w-1.5 rounded-full bg-lima-500" />
              Onde estamos
            </span>
          </Reveal>

          <Reveal direcao="cima" atraso={0.08}>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,5.6vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-tinta">
              Na Estrada de Aldeia,{" "}
              <span className="text-lima-600">fácil de chegar.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          {/* ---------------- INFORMAÇÕES ---------------- */}
          <Reveal direcao="direita" className="flex">
            <div className="flex w-full flex-col justify-between gap-8 rounded-[1.75rem] bg-tinta p-8 text-white sm:p-10">
              <div>
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lima-500 text-tinta">
                    <Icone.pin className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-lima-400">
                      Endereço
                    </p>
                    <address className="mt-2 not-italic text-lg font-medium leading-snug text-white/85">
                      {endereco.linha1}
                      <br />
                      {endereco.linha2}
                      <br />
                      <span className="text-white/50">CEP {endereco.cep}</span>
                    </address>
                  </div>
                </div>

                {/* HORÁRIOS — editáveis em src/data/loja.js */}
                <div className="mt-9 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-3">
                    <Icone.relogio className="h-5 w-5 text-lima-500" />
                    <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-lima-400">
                      Horário de funcionamento
                    </p>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {horario.dias.map((d) => {
                      const fechado = /fechad/i.test(d.horas);
                      return (
                        <li
                          key={d.dia}
                          className="flex items-baseline justify-between gap-4 text-[0.95rem]"
                        >
                          <span className="text-white/60">{d.dia}</span>
                          <span
                            aria-hidden="true"
                            className="mx-1 h-px grow border-b border-dashed border-white/15"
                          />
                          <span
                            className={`font-display font-bold tabular-nums ${
                              fechado ? "text-white/35" : "text-white"
                            }`}
                          >
                            {d.horas}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Botao
                  href={loja.mapaLink}
                  variante="verde"
                  className="flex-1"
                  icone={<Icone.pin className="h-5 w-5" />}
                >
                  Como chegar
                </Botao>
                <Botao
                  href={linkWhatsapp("Olá! Queria confirmar o horário de funcionamento.")}
                  variante="contorno"
                  className="flex-1 text-white"
                  icone={<Icone.whatsapp className="h-5 w-5 text-lima-500" />}
                >
                  Tirar dúvida
                </Botao>
              </div>
            </div>
          </Reveal>

          {/* ---------------- MAPA ---------------- */}
          <Reveal direcao="esquerda" atraso={0.12}>
            <div className="group relative h-[26rem] overflow-hidden rounded-[1.75rem] bg-neutro shadow-[0_30px_70px_-45px_rgba(11,12,10,.65)] sm:h-full sm:min-h-[30rem]">
              <iframe
                title="Mapa da ConsertaBike Camaragibe"
                src={loja.mapaEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full grayscale-[85%] contrast-[1.05] transition-all duration-700 group-hover:grayscale-0"
              />

              {/* Selo flutuante sobre o mapa */}
              <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lima-500 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lima-500" />
                </span>
                <span className="font-display text-sm font-bold text-tinta">
                  ConsertaBike Camaragibe
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
