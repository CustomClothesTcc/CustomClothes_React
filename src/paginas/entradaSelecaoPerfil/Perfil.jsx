import "./style.scss";
import telaAdm from "../../assets/poderosoChefinho.png";
import telaCom from "../../assets/zeCarioca.jpg";

const SelecaoPerfil = () => {
  return (
    <div className="fullContainer">
      <div className="divAdm fullPerfil">
        <img src={telaAdm} alt="" />
        <p>ADMINISTRAÇÃO</p>
      </div>
      <div className="divAdm fullPerfil">
        <img src={telaCom} alt="" />
        <p>COMÉRCIO</p>
      </div>
      <div className="divAdicao fullPerfil">
        <button>
          <div className="adicao"></div>
        </button>

        <p>NOVO PERFIL</p>
      </div>
    </div>
  );
};

export default SelecaoPerfil;
