import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Desliga os efeitos de parallax mais pesados em telas pequenas e para quem
 * ativou "reduzir movimento" no sistema. Mantém o site fluido no celular.
 */
export function useParallaxAtivo(larguraMinima = 768) {
  const reduzirMovimento = useReducedMotion();
  const [telaGrande, setTelaGrande] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${larguraMinima}px)`);
    const atualizar = () => setTelaGrande(mq.matches);
    atualizar();
    mq.addEventListener("change", atualizar);
    return () => mq.removeEventListener("change", atualizar);
  }, [larguraMinima]);

  return telaGrande && !reduzirMovimento;
}

/** Curva de easing usada em todo o site — dá aquele "peso" suave. */
export const suave = [0.22, 1, 0.36, 1];

/** Variantes prontas para listas com entrada escalonada. */
export const containerStagger = (intervalo = 0.1, atraso = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: intervalo, delayChildren: atraso },
  },
});

export const itemSobe = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: suave },
  },
};
