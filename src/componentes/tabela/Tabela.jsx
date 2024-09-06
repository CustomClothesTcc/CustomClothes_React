
import "./style.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Blusa from "../../assets/blusa.jpeg";
import Camisa from "../../assets/camisa.jpeg";
import Camiseta from "../../assets/camiseta.jpeg";
import Short from "../../assets/shorts.jpeg";
import Regata from "../../assets/regata.jpeg"

const Lista = () => {
  const linhas = [
    {
      id: 1143155,
      produto: "Blusa tamanho 5",
      img: Blusa,
      cliente: "John Smith",
      data: "1 Março",
      quantia: 7,
      metodo: "Pagamento na Entrega",
      status: "Aprovado",
    },
    {
      id: 2235235,
      produto: "Camiseta tamanho 15",
      img: Camiseta,
      cliente: "Michael Doe",
      data: "1 Março",
      quantia: 1,
      metodo: "Pagamento Online",
      status: "Recusado",
    },
    {
      id: 2342353,
      produto: "Camisa tamanho 12",
      img: Camisa,
      cliente: "John Smith",
      data: "1 Março",
      quantia: 3,
      metodo: "Pagamento na Entrega",
      status: "Pendente",
    },
    {
      id: 2357741,
      produto: "Regata tamanho 35",
      img: Regata,
      cliente: "Jane Smith",
      data: "1 Março",
      quantia: 2,
      metodo: "Online",
      status: "Aprovado",
    },
    {
      id: 2342355,
      produto: "Shorts tamanho 38",
      img: Short,
      cliente: "Harold Carol",
      data: "1 Março",
      quantia: 9,
      metodo: "Online",
      status: "Pendente",
    },
  ];
  return (
    <TableContainer component={Paper} className="tabela">
      <Table sx={{ minWidth: 650 }} aria-label="tabela simples">
        <TableHead>
          <TableRow>
            <TableCell className="celulaTabela">ID de Rastreamento</TableCell>
            <TableCell className="celulaTabela">Produto</TableCell>
            <TableCell className="celulaTabela">Cliente</TableCell>
            <TableCell className="celulaTabela">Data</TableCell>
            <TableCell className="celulaTabela">Quantia</TableCell>
            <TableCell className="celulaTabela">Método de Pagamento</TableCell>
            <TableCell className="celulaTabela">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {linhas.map((linha) => (
            <TableRow key={linha.id}>
              <TableCell className="celulaTabela">{linha.id}</TableCell>
              <TableCell className="celulaTabela">
                <div className="wrapperCelula">
                  <img src={linha.img} alt="" className="imagem" />
                  {linha.produto}
                </div>
              </TableCell>
              <TableCell className="celulaTabela">{linha.cliente}</TableCell>
              <TableCell className="celulaTabela">{linha.data}</TableCell>
              <TableCell className="celulaTabela">{linha.quantia}</TableCell>
              <TableCell className="celulaTabela">{linha.metodo}</TableCell>
              <TableCell className="celulaTabela">
                <span className={`status ${linha.status}`}>{linha.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Lista;
