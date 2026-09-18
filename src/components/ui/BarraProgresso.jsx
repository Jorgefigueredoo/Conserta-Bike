import { motion, useScroll, useSpring } from "framer-motion";

/** Fininha barra verde no topo mostrando o progresso da leitura. */
export default function BarraProgresso() {
  const { scrollYProgress } = useScroll();
  const largura = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: largura }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-lima-500"
      aria-hidden="true"
    />
  );
}
