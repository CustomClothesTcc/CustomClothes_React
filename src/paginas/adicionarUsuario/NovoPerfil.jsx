import React, { useState } from "react";
import imagem1 from "../../assets/logoCC.jpeg";
import "./style.scss";

const CadastroPerfil = () => {
  const [formulario, setFormulario] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    rg: "",
    telefone: "",
    celular: "",
    cargo: "administrativo",
    sexo: "",
    senha: "",
    foto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormulario({ ...formulario, foto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="cadastroPerfil">
      <div className="topBar">
        <div className="voltar">
          <a href="/">← Voltar ao Início</a>
        </div>
        <div className="logoSite">
          <img src={imagem1} alt="logo" className="avatar" />
          <h2>Custom Clothes</h2>
        </div>
      </div>
      <h2 className="titulo">Cadastrar Novo Perfil</h2>
      <form onSubmit={handleSubmit} className="formCadastro">
        <label className="foto">
          Foto:
          <input type="file" name="foto" onChange={handleFileChange} />
        </label>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formulario.nome}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Data de Nascimento:
          <input
            type="date"
            name="dataNascimento"
            value={formulario.dataNascimento}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={formulario.cpf}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          RG:
          <input
            type="text"
            name="rg"
            value={formulario.rg}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={formulario.telefone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Celular:
          <input
            type="tel"
            name="celular"
            value={formulario.celular}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Cargo:
          <select
            name="cargo"
            value={formulario.cargo}
            onChange={handleInputChange}
            required
          >
            <option value="administrativo">Administrativo</option>
            <option value="comercial">Comercial</option>
            <option value="tecnologia">Tecnologia</option>
          </select>
        </label>
        <label>
          Sexo:
          <select
            name="sexo"
            value={formulario.sexo}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={formulario.senha}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className="btnSubmit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroPerfil;
