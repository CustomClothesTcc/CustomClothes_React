import "./style.scss";
import BarraLateral from "../../componentes/barraLateral/BarraLateral";
import BarraDeNavegacao from "../../componentes/barraDeNavegacao/BarraDeNavegacao";
import TabelaDeDadosUsuarios from "../../componentes/tabelaDeDadosUsuario/TabelaDeDados";


const Lista = () => {
  return (
    <div className="lista">
      <BarraLateral />
      <div className="containerLista">
        <BarraDeNavegacao />
        <TabelaDeDadosUsuarios />
      </div>
    </div>
  );
};

export default Lista;
