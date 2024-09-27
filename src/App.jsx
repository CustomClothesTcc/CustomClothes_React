import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio/Inicio";
import Login from "./paginas/login/Login";
import Entrega from "./paginas/statusEntrega/Entrega"
import ListaProdutos from "./paginas/listaProdutos/Lista";
import ListaUsuarios from "./paginas/listaUsuarios/Lista";
import Unico from "./paginas/unico/Unico";
import NovoUsuario from "./paginas/cadastrarUsuario/usuario";
import NovoProduto from "./paginas/cadastrarProduto/produto";
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
                  <NovoProduto
                    entradas={entradasProduto}
                    titulo="Adicionar Novo Produto"
                  />
                }
              />
            </Route>
            <Route path="entrega" element={<Entrega />} />    
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
