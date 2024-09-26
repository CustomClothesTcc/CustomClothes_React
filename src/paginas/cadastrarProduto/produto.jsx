import PropTypes from "prop-types";
import "./style.scss";
import BarraLateral from "../../componentes/barraLateral/BarraLateral";
import BarraDeNavegacao from "../../componentes/barraDeNavegacao/BarraDeNavegacao";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const CadastrarProduto = ({ entradas, titulo }) => {
  const [arquivo, setArquivo] = useState("");

  return (
    <div className="lista">
      <BarraLateral />
      <div className="containerLista">
      <BarraDeNavegacao />
        <div className="topo">
          <h1>{titulo}</h1>
        </div>
        <div className="inputFormulario imagemCentralizada">
          <img
            src={
              arquivo
                ? URL.createObjectURL(arquivo)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="Imagem do Produto"
            className="imagemProduto"
          />
          <label htmlFor="arquivo" className="uploadLabel">
            Imagem: <DriveFolderUploadOutlinedIcon className="icone" />
          </label>
          <input
            type="file"
            id="arquivo"
            onChange={(e) => setArquivo(e.target.files[0])}
            style={{ display: "none" }}
          />
        </div>
        <div className="baixo">
          <div className="direita">
            <form>
              {entradas.map((entrada) => (
                <div className="inputFormulario" key={entrada.id}>
                  <label>{entrada.label}</label>
                  {entrada.tipo === "select" ? (
                    <select>
                      {entrada.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={entrada.tipo}
                      placeholder={entrada.placeholder}
                    />
                  )}
                </div>
              ))}
            </form>
          </div>
        </div>
        <div className="divContainerButton">
          <div className="divButton">
            <button type="submit" className="btnEnviar">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CadastrarProduto.propTypes = {
  entradas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      tipo: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  titulo: PropTypes.string.isRequired,
};

export default CadastrarProduto;
