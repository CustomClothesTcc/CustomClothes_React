
import "./style.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Destaque = () => {
  return (
    <div className="destaque">
      <div className="topo">
        <h1 className="titulo">Receita Total</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="baixo">
        
        <div className="graficoDestaque">
          <h2 className="titulo subtitulo">Meta</h2>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        
        <p className="titulo hoje">Total de vendas feitas hoje</p>
        <p className="quantia">$420</p>
        <p className="descricao">
          Processamento de transações anteriores. Últimos pagamentos podem não estar incluídos.
        </p>
        <div className="resumo">
          <div className="item">
            <div className="tituloItem">Meta</div>
            <div className="resultadoItem negativo">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="quantiaResultado">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="tituloItem">Última Semana</div>
            <div className="resultadoItem positivo">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="quantiaResultado">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="tituloItem">Último Mês</div>
            <div className="resultadoItem positivo">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="quantiaResultado">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destaque;
