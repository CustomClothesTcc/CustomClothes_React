import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio/Inicio";
import Login from "./paginas/login/Login";
import ListaProdutos from "./paginas/listaProdutos/Lista";
import ListaUsuarios from "./paginas/listaUsuarios/Lista";
import Unico from "./paginas/unico/Unico";
import Novo from "./paginas/novo/Novo";
import NovoUsuario from "./paginas/novoUsuario/NovoUsuario";
import { entradasProduto, entradasUsuario } from "./formulario";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Inicio />} />
            <Route path="login" element={<Login />} />
            <Route path="usuarios">
              <Route index element={<ListaUsuarios />} />
              <Route path=":usuarioId" element={<Unico />} />
              <Route
                path="novo"
                element={
                  <NovoUsuario
                    entradas={entradasUsuario}
                    titulo="Adicionar Novo Usuário"
                  />
                }
              />
            </Route>
            <Route path="produtos">
              <Route index element={<ListaProdutos />} />
              <Route path=":produtoId" element={<Unico />} />
              <Route
                path="novoProduto"
                element={
                  <NovoUsuario
                    entradas={entradasProduto}
                    titulo="Adicionar Novo Produto"
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
