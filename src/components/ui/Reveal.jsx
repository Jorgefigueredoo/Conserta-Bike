import { motion } from "framer-motion";
import { suave } from "../../hooks/useAnimacoes";

/**
 * Wrapper de "reveal" no scroll. Usado em praticamente todas as seções.
 *
 * <Reveal direcao="cima" atraso={0.1}>conteúdo</Reveal>
 */
export default function Reveal({
  children,
  direcao = "cima",
  atraso = 0,
  duracao = 0.8,
  distancia = 40,
  className = "",
  once = true,
  ...rest
}) {
  const deslocamentos = {
    cima: { y: distancia, x: 0 },
    baixo: { y: -distancia, x: 0 },
    esquerda: { x: distancia, y: 0 },
    direita: { x: -distancia, y: 0 },
    nenhuma: { x: 0, y: 0 },
  };

  const offset = deslocamentos[direcao] ?? deslocamentos.cima;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: duracao, delay: atraso, ease: suave }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Título que revela palavra por palavra conforme entra na tela. */
export function TituloRevelado({ texto, className = "", destaque = [] }) {
  const palavras = texto.split(" ");

  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={{ show: { transition: { staggerChildren: 0.055 } } }}
    >
      {palavras.map((palavra, i) => (
        <span key={`${palavra}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${
              destaque.includes(i) ? "text-lima-600" : ""
            }`}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.7, ease: suave },
              },
            }}
          >
            {palavra}
            {i < palavras.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
