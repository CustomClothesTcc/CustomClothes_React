import "./style.scss";
import telaAdm from "../../assets/poderosoChef.jpg";
import telaCom from "../../assets/zeCarioca.jpg";

const SelecaoPerfil = () => {
  return (
    <div className="site">
      <div className="fullContainer">
        <div className="perfil">
          <img src={telaAdm} alt="Perfil Administração" />
          <p>ADMINISTRAÇÃO</p>
        </div>
        <div className="perfil">
          <img src={telaCom} alt="Perfil Comércio" />
          <p>COMÉRCIO</p>
        </div>
        <div className="perfil novoPerfil">
          <button>
            <div className="adicao"></div>
          </button>
          <p>NOVO PERFIL</p>
        </div>
      </div>
    </div>
  );
};

export default SelecaoPerfil;
