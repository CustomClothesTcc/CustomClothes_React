import BarraLateral from "../../componentes/barraLateral/BarraLateral.jsx";
import BarraDeNavegacao from "../../componentes/barraDeNavegacao/BarraDeNavegacao.jsx";
import "./style.scss";
import Widget from "../../componentes/widget/Widget.jsx";
import Destaque from "../../componentes/destaque/Destaque.jsx";
import Grafico from "../../componentes/grafico/Grafico.jsx";
import Tabela from "../../componentes/tabela/Tabela.jsx";

const Inicio = () => {
  return (
    <div className="inicio">
      <BarraLateral />
      <div className="containerInicio">
        <BarraDeNavegacao />
        <div className="graficos">
          <Destaque />
          <Grafico titulo="Últimos 6 Meses (Receita)" aspecto={2 / 1} />
        </div>
        <div className="widgets">
          <Widget tipo="usuario" />
          <Widget tipo="pedido" />
          <Widget tipo="ganho" />
          <Widget tipo="saldo" />
        </div>
        <div className="containerLista">
          <div className="tituloLista">Transações Recente</div>
          <Tabela />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
