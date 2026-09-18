import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo, { BikeIcon } from "./ui/Logo";
import Botao from "./ui/Botao";
import Icone from "./ui/Icones";
import Reveal from "./ui/Reveal";
import { loja, linkWhatsapp } from "../data/loja";
import { useParallaxAtivo } from "../hooks/useAnimacoes";

export default function Rodape() {
  const secao = useRef(null);
  const parallax = useParallaxAtivo();

  const { scrollYProgress } = useScroll({
    target: secao,
    offset: ["start end", "end end"],
  });

  const yBike = useTransform(scrollYProgress, [0, 1], parallax ? ["25%", "-15%"] : ["0%", "0%"]);

  const contatos = [
    {
      icone: Icone.telefone,
      rotulo: "Telefone / WhatsApp",
      valor: loja.telefone,
      href: linkWhatsapp(),
    },
    {
      icone: Icone.instagram,
      rotulo: "Instagram",
      valor: `@${loja.instagram}`,
      href: loja.instagramUrl,
    },
    {
      icone: Icone.pin,
      rotulo: "Endereço",
      valor: loja.endereco.linha1,
      href: loja.mapaLink,
    },
    {
      icone: Icone.relogio,
      rotulo: "Funcionamento",
      valor: loja.horario.resumo, // editável em src/data/loja.js
      href: null,
    },
  ];

  return (
    <footer id="contato" ref={secao} className="relative overflow-hidden bg-tinta text-white">
      {/* ---------------- CTA FINAL ---------------- */}
      <section className="textura-grao relative overflow-hidden bg-lima-500 px-5 py-24 text-tinta sm:px-8 sm:py-32">
        <motion.div
          style={{ y: yBike }}
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-16 w-[60vw] max-w-[620px] text-tinta/[0.08]"
        >
          <BikeIcon className="h-full w-full" strokeWidth={2.4} />
        </motion.div>

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal direcao="cima">
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-tinta/60">
              Estamos te esperando
            </p>
          </Reveal>

          <Reveal direcao="cima" atraso={0.08}>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,8vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.04em]">
              Venha nos visitar.
              <span className="block text-white drop-shadow-[0_3px_0_rgba(11,12,10,0.22)]">
                Sua bike agradece.
              </span>
            </h2>
          </Reveal>

          <Reveal direcao="cima" atraso={0.16}>
            <p className="mx-auto mt-6 max-w-lg text-lg font-medium leading-relaxed text-tinta/75">
              Chame no WhatsApp, mande a foto da sua bike ou apareça na loja. O
              atendimento começa agora.
            </p>
          </Reveal>

          <Reveal direcao="cima" atraso={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Botao
                href={linkWhatsapp()}
                variante="preto"
                tamanho="lg"
                icone={<Icone.whatsapp className="h-5 w-5 text-lima-400" />}
              >
                Falar agora no WhatsApp
              </Botao>
              <Botao
                href={loja.instagramUrl}
                variante="branco"
                tamanho="lg"
                icone={<Icone.instagram className="h-5 w-5 text-lima-600" />}
              >
                Ver o Instagram
              </Botao>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- RODAPÉ ---------------- */}
      {/* pb maior no celular para o botão flutuante de WhatsApp não cobrir nada */}
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-28 sm:px-8 sm:pt-20 sm:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <Logo
              iconClassName="h-12 w-12"
              textClassName="text-white text-[1.7rem]"
              mostrarSubtitulo
            />
            <p className="mt-6 max-w-sm leading-relaxed text-white/50">
              {loja.slogan} Venda, manutenção e acessórios em Aldeia dos
              Camarás, Camaragibe — PE.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={linkWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir conversa no WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-lima-500 hover:text-tinta"
              >
                <Icone.whatsapp className="h-5 w-5" />
              </a>
              <a
                href={loja.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir o Instagram da loja"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-lima-500 hover:text-tinta"
              >
                <Icone.instagram className="h-5 w-5" />
              </a>
              <a
                href={loja.mapaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir localização no Google Maps"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-lima-500 hover:text-tinta"
              >
                <Icone.pin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {contatos.map(({ icone: Simbolo, rotulo, valor, href }) => {
              const Conteudo = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-lima-500 transition-colors group-hover:bg-lima-500 group-hover:text-tinta">
                    <Simbolo className="h-5 w-5" />
                  </span>
                  <span className="leading-snug">
                    <span className="block font-display text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/40">
                      {rotulo}
                    </span>
                    <span className="mt-1 block text-[0.95rem] font-medium text-white/85">
                      {valor}
                    </span>
                  </span>
                </>
              );

              return href ? (
                <a
                  key={rotulo}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5"
                >
                  {Conteudo}
                </a>
              ) : (
                <div key={rotulo} className="group flex items-start gap-3.5">
                  {Conteudo}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {loja.nomeCompleto}. Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-2 text-sm text-white/40">
            <BikeIcon className="h-4 w-4 text-lima-500" strokeWidth={5} />
            Feito com paixão por bikes.
          </p>
        </div>
      </div>
    </footer>
  );
}
