import "./style.scss";
import perfil1 from "../../assets/perfil1.jpg";
import perfil2 from "../../assets/perfil2.jpg";

const SelecaoPerfil = () => {
  const perfis = [
    { id: 1, nome: "João", imagem: perfil1 },
    { id: 2, nome: "Maria", imagem: perfil2 },
  ];

  return (
    <div className="selecaoPerfil">
      <h1>SELECIONE O USUÁRIO</h1>
      <div className="perfisContainer">
        {perfis.map((perfil) => (
          <div key={perfil.id} className="perfil">
            <img src={perfil.imagem} alt={perfil.nome} />
            <p>{perfil.nome}</p>
          </div>
        ))}
        <div className="adicionar">
          <span>+</span>
        </div>
      </div>
      <button>SAIR DO SISTEMA</button>
    </div>
  );
};

export default SelecaoPerfil;
