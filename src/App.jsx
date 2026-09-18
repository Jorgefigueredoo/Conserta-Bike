import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Marcas from "./components/Marcas";
import Avaliacoes from "./components/Avaliacoes";
import Localizacao from "./components/Localizacao";
import Rodape from "./components/Rodape";
import BarraProgresso from "./components/ui/BarraProgresso";
import BotaoFlutuante from "./components/ui/BotaoFlutuante";

export default function App() {
  return (
    <>
      <BarraProgresso />
      <Cabecalho />

      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Marcas />
        <Avaliacoes />
        <Localizacao />
      </main>

      <Rodape />
      <BotaoFlutuante />
    </>
  );
}
