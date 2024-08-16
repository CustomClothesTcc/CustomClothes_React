import "./style.scss";
import imagem1 from '../../assets/poderosoChefinho.png'

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const BarraDeNavegacao = () => {
  return (
    <div className="barraDeNavegacao">
      <div className="wrapper">
        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar..." />
          <SearchOutlinedIcon />
        </div>
        <div className="itens">
          <div className="item">
            <img
              src={imagem1}
              alt="image"
              className="avatar"
            />
            <p>Administração</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarraDeNavegacao;
