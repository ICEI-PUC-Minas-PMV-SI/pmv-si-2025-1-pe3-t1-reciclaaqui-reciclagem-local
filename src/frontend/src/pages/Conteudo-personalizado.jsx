import "./Conteudo-personalizado.css";
import logo from "../img/logo.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ConteudoPersonalizado() {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header-left">
            <div className="logo">
              <img src={logo} alt="ReciclaAqui Logo" className="logo-img" />
              <span className="logo-highlight"></span>
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

        {/* Banner principal */}
        <section className="banner">
          <div className="texto-banner">
            <h1>
              Aprenda mais<br />sobre <span className="verde">Reciclagem</span>
            </h1>
            <p>e ajude a mudar o 🌍</p>
          </div>
          <div className="img-banner">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-joven-leyendo-libro-sonriendo_23-2149300733.jpg"
              alt="Jovem estudando"
              className="pessoa-estudando"
            />
          </div>
        </section>

        {/* Aviso e barra de pesquisa */}
        <div className="barra-superior">
          <p className="form-aviso">Responda nosso formulário para nos conhecermos melhor!</p>
          <div className="busca">
            <button className="icone-busca">🔍</button>
            <input type="text" placeholder="Pesquisar..." />
          </div>
        </div>

        {/* Seção de vídeos */}
        <section className="secao-videos">
          <div className="cabecalho-videos">
            <h2>📺 Vídeos</h2>
            <ul>
              <li>• Artigos</li>
              <li>• Fóruns</li>
              <li>• Mais informações</li>
            </ul>
          </div>
          <div className="videos-grid">

            <VideoCard
              thumb="https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2018/07/lixeiras-de-coleta-seletiva-larplasticos.jpg?resize=660%2C396"
              title="O que é reciclagem? – eCycle"
              duracao="3:46"
            />
            <VideoCard
              thumb="https://storage.googleapis.com/eureciclo-blog/1/2024/10/lixo-eletronico-dicas.jpg"
              title="Reciclagem: O que você precisa saber – Mais Ciência"
              duracao="9:56"
            />
          </div>

        </section>
      </div>

      
    </>
  );
}

function VideoCard({ thumb, title, duracao }) {
  return (
    <div className="video-card">
      <div className="thumb-container">
        <img src={thumb} alt={title} className="thumb" />
        <span className="duracao">{duracao}</span>
      </div>
      <p className="video-titulo">{title}</p>
    </div>
  );
}
