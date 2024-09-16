import PropTypes from "prop-types";
import "./style.scss";
import BarraLateral from "../../componentes/barraLateral/BarraLateral";
import BarraDeNavegacao from "../../componentes/barraDeNavegacao/BarraDeNavegacao";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const entregas = [
  { id: 1, dataCompra: "2024-08-01", status: "pendente" },
  { id: 2, dataCompra: "2024-08-03", status: "aprovado" },
  { id: 3, dataCompra: "2024-08-05", status: "a caminho" },
  { id: 4, dataCompra: "2024-08-07", status: "entregue" },
];

const PosicaoCarrinho = (status) => {
  switch (status) {
    case "pendente":
      return 0;
    case "aprovado":
      return 1;
    case "a caminho":
      return 2;
    case "entregue":
      return 3;
    default:
      return 0;
  }
};

const BarraEntrega = ({ id, dataCompra, status }) => {
  const [expandido, setExpandido] = useState(false);
  const posicaoCarrinho = PosicaoCarrinho(status);

  return (
    <div className="divBarraEntrega">
      <div className="barraEntrega" onClick={() => setExpandido(!expandido)}>
        <div className="infoEntrega">
          <span className="entregaId">Nº {id}</span>
          <span className="dataCompra">{dataCompra}</span>
        </div>
        <div className="iconeSeta">{expandido ? "▼" : "▶"}</div>
      </div>

      {expandido && (
        <div className="linhaStatus">
          <div className="pontos">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="pontoWrapper">
                <div
                  className={`ponto ${index === posicaoCarrinho ? "ativo" : ""}`}
                />
                <span className="statusTexto">
                  {index === 0
                    ? "pendente"
                    : index === 1
                    ? "aprovado"
                    : index === 2
                    ? "a caminho"
                    : "entregue"}
                </span>
              </div>
            ))}
          </div>
          <ShoppingCartIcon
            className="carrinho"
            style={{ left: `${posicaoCarrinho * 33.3}%` }}
          />
        </div>
      )}
    </div>
  );
};

BarraEntrega.propTypes = {
  id: PropTypes.number.isRequired,
  dataCompra: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["pendente", "aprovado", "a caminho", "entregue"]).isRequired,
};

const Entrega = () => {
  const [pagina, setPagina] = useState(0);
  const entregasPorPagina = 10;

  const entregasPaginadas = entregas.slice(
    pagina * entregasPorPagina,
    (pagina + 1) * entregasPorPagina
  );

  return (
    <div className="novo">
      <BarraLateral />
      <div className="containerNovo">
        <BarraDeNavegacao />
        <div className="topo">
          <h1>Registro de entregas dos clientes</h1>
        </div>
        <div className="listaEntregas">
          {entregasPaginadas.map((entrega) => (
            <BarraEntrega key={entrega.id} {...entrega} />
          ))}
        </div>
        <div className="navegacaoPaginas">
          {pagina > 0 && (
            <button onClick={() => setPagina(pagina - 1)}>Anterior</button>
          )}
          {entregas.length > (pagina + 1) * entregasPorPagina && (
            <button onClick={() => setPagina(pagina + 1)}>Próxima</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Entrega;
