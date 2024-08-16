
import "./style.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ tipo }) => {
  let dados;

  const quantia = 100;
  const diferenca = 20;

  switch (tipo) {
    case "usuario":
      dados = {
        titulo: "USUÁRIOS",
        isMoney: false,
        link: "Ver todos os usuários",
        icone: (
          <PersonOutlinedIcon
            className="icone"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "pedido":
      dados = {
        titulo: "PEDIDOS",
        isMoney: false,
        link: "Ver todos os pedidos",
        icone: (
          <ShoppingCartOutlinedIcon
            className="icone"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "ganho":
      dados = {
        titulo: "GANHOS",
        isMoney: true,
        link: "Ver ganhos líquidos",
        icone: (
          <MonetizationOnOutlinedIcon
            className="icone"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "saldo":
      dados = {
        titulo: "SALDO",
        isMoney: true,
        link: "Ver detalhes",
        icone: (
          <AccountBalanceWalletOutlinedIcon
            className="icone"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="esquerda">
        <span className="titulo">{dados.titulo}</span>
        <span className="contador">
          {dados.isMoney && "$"} {quantia}
        </span>
        <span className="link">{dados.link}</span>
      </div>
      <div className="direita">
        <div className="percentual positivo">
          <KeyboardArrowUpIcon />
          {diferenca} %
        </div>
        {dados.icone}
      </div>
    </div>
  );
};

export default Widget;
