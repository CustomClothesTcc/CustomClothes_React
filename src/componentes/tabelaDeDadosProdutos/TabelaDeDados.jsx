
import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { colunasUsuarios, linhasUsuarios } from "../../fonteDeDados";
import { Link } from "react-router-dom";
import { useState } from "react";

const TabelaDeDados = () => {
  const [dados, setDados] = useState(linhasUsuarios);

  const handleDelete = (id) => {
    setDados(dados.filter((item) => item.id !== id));
  };

  const colunaAcoes = [
    {
      field: "acao",
      headerName: "Ação",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="acaoCelula">
            <Link to="/usuarios/teste" style={{ textDecoration: "none" }}>
              <div className="botaoVisualizar">Visualizar</div>
            </Link>
            <div
              className="botaoExcluir"
              onClick={() => handleDelete(params.row.id)}>
              Excluir
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="tabelaDeDados">
      <div className="tituloTabelaDeDados">
        Adicionar Novo Produto
        <Link to="/produtos/novoProduto" className="link">
          Adicionar Novo
        </Link>
      </div>
      <DataGrid
        className="tabelaDados"
        rows={dados}
        columns={colunasUsuarios.concat(colunaAcoes)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default TabelaDeDados;
