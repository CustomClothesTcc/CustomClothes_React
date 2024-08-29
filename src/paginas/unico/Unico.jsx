
import "./style.scss";
import BarraLateral from "../../componentes/barraLateral/BarraLateral";
import BarraDeNavegacao from "../../componentes/barraDeNavegacao/BarraDeNavegacao";
import Grafico from "../../componentes/grafico/Grafico";
import Tabela from "../../componentes/tabela/Tabela";

const Unico = () => {
  return (
    <div className="unico">
      <BarraLateral />
      <div className="containerUnico">
        <BarraDeNavegacao />
        <div className="topo">
          <div className="esquerda">
            <div className="botaoEditar">Editar</div>
            <h1 className="titulo">Informação</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="imagemItem"
              />
              <div className="detalhes">
                <h1 className="tituloItem">JOANA MACHADO SILVA</h1>
                <div className="itemDetalhe">
                  <span className="chaveItem">Email:</span>
                  <span className="valorItem">customclothes@gmail.com</span>
                </div>
                <div className="itemDetalhe">
                  <span className="chaveItem">Telefone:</span>
                  <span className="valorItem">+55 11 94002 - 8922</span>
                </div>
                <div className="itemDetalhe">
                  <span className="chaveItem">Endereço:</span>
                  <span className="valorItem">
                  Av. Pres. Juscelino Kubitschek, 1909 - Vila Olímpia, 04543-907
                  </span>
                </div>
                <div className="itemDetalhe">
                  <span className="chaveItem">País:</span>
                  <span className="valorItem">BRASIL</span>
                </div>
              </div>
            </div>
          </div>
          <div className="direita">
            <Grafico aspecto={3 / 1} titulo="Gastos do Usuário (Últimos 6 Meses)" />
          </div>
        </div>
        <div className="baixo">
          <h1 className="titulo">Últimas Transações</h1>
          <Tabela />
        </div>
      </div>
    </div>
  );
};

export default Unico;
