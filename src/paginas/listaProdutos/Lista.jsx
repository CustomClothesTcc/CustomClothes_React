import "./style.scss";
import BarraLateral from "../../componentes/barraLateral/BarraLateral";
import BarraDeNavegacao from "../../componentes/barraDeNavegacao/BarraDeNavegacao";
import TabelaDeDadosProdutos from "../../componentes/tabelaDeDadosProdutos/TabelaDeDados";


const Lista = () => {
  return (
    <div className="lista">
      <BarraLateral />
      <div className="containerLista">
        <BarraDeNavegacao />
        <TabelaDeDadosProdutos />
      </div>
    </div>
  );
};

export default Lista;
