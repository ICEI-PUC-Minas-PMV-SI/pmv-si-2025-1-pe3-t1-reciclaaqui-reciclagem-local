import React, { useState } from "react";
import './CadastrarPonto.css';
import logo from '../img/logo.png';


const materiaisPossiveis = [
  "Plástico", "Papel", "Vidro", "Metal", "Orgânico",
  "Eletrônicos", "Não-Recicláveis", "Outros"
];

const CadastrarPonto = () => {
  const [form, setForm] = useState({
    nome: "",
    endereco: "",
    descricao: "",
    materiais: [],
    outros: "",
    imagem: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleMaterial = (material) => {
    const jaSelecionado = form.materiais.includes(material);
    const novosMateriais = jaSelecionado
      ? form.materiais.filter((m) => m !== material)
      : [...form.materiais, material];

    setForm({ ...form, materiais: novosMateriais });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const dados = {
      nome: form.nome,
      endereco: form.endereco,
      descricao: form.descricao,
      materiais: form.materiais,
      outros: form.outros,
      imagem: form.imagem?.name || "", // só o nome por enquanto
    };
  
    try {
      const res = await fetch("http://localhost:3000/pontos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
  
      if (res.ok) {
        alert("Ponto cadastrado com sucesso!");
        setForm({
          nome: "",
          endereco: "",
          descricao: "",
          materiais: [],
          outros: "",
          imagem: null,
        });
      } else {
        alert("Erro ao cadastrar ponto.");
      }
    } catch (error) {
      alert("Erro ao conectar com servidor.");
      console.error(error);
    }
  };
  

  return (
    <div className="container">
      <header className="header">
            <div className="header-left">
              <div className="logo">
                <img src={logo} alt="ReciclaAqui Logo" className="logo-img" />
                <span className="logo-highlight"></span>
              </div>
              <div className="recicla-news">
                <span className="icon-news">📰</span> Recicla<span className="logo-highlight">NEWS</span>
              </div>
            </div>
            <nav className="nav-links">
              <a href="#" className="nav-link">
                <span className="icon-nav">👤</span> Perfil
              </a>
              <a href="#" className="nav-link">
                <span className="icon-nav">🏆</span> Meu Ranking
              </a>
              <a href="#" className="nav-link">
                <span className="icon-nav">📍</span> Pontos de Coleta
              </a>
            </nav>
          </header>
    <form onSubmit={handleSubmit} className="formulario-ponto">
      <div className="inputs-topo">
        <input
          type="text"
          name="nome"
          placeholder="Nome do ponto de coleta"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={form.endereco}
          onChange={handleChange}
        />
      </div>

      <textarea
        name="descricao"
        placeholder="Descrição do Ponto"
        value={form.descricao}
        onChange={handleChange}
      />

      <div className="materiais">
        <p>Materiais reciclados no ponto:</p>
        <div className="checkboxes">
          {materiaisPossiveis.map((mat) => (
            <label key={mat}>
              <input
                type="checkbox"
                checked={form.materiais.includes(mat)}
                onChange={() => toggleMaterial(mat)}
              />
              {mat}
            </label>
          ))}
        </div>
        {form.materiais.includes("Outros") && (
          <input
            type="text"
            name="outros"
            placeholder="Especificar"
            value={form.outros}
            onChange={handleChange}
          />
        )}
      </div>

      <div className="upload-foto">
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setForm({ ...form, imagem: e.target.files[0] })
          }
        />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
    </div>
  );
};

export default CadastrarPonto;
