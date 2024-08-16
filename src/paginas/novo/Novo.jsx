
import "./style.scss";
import BarraLateral from "../../componentes/barraLateral/BarraLateral";
import BarraDeNavegacao from "../../componentes/barraDeNavegacao/BarraDeNavegacao";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Novo = ({ entradas, titulo }) => {
  const [arquivo, setArquivo] = useState("");

  return (
    <div className="novo">
      <BarraLateral />
      <div className="containerNovo">
        <BarraDeNavegacao />
        <div className="topo">
          <h1>{titulo}</h1>
        </div>
        <div className="baixo">
          <div className="esquerda">
            <img
              src={
                arquivo
                  ? URL.createObjectURL(arquivo)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="direita">
            <form>
              <div className="inputFormulario">
                <label htmlFor="arquivo">
                  Imagem: <DriveFolderUploadOutlinedIcon className="icone" />
                </label>
                <input
                  type="file"
                  id="arquivo"
                  onChange={(e) => setArquivo(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {entradas.map((entrada) => (
                <div className="inputFormulario" key={entrada.id}>
                  <label>{entrada.label}</label>
                  <input type={entrada.tipo} placeholder={entrada.placeholder} />
                </div>
              ))}
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novo;
