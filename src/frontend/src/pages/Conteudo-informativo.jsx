import "./Conteudo-informativo.css";
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png'; 
import { useState } from 'react';

export default function Conteudoinformativo() {
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

      <div className="main-content">
        <div className="articles-and-search">
          <div className="search-bar">
            <button className="search-button">🔍</button>
            <input
              type="text"
              placeholder="Pesquisar..."
              className="search-input"
            />
          </div>

          <section className="articles">
            <article className="article">
              <img src="https://i.imgur.com/gU9yJ5N.png" alt="Resíduos" className="article-img" /> {/* Substitua pelo caminho da sua imagem */}
              <div className="article-text">
                <h2 className="article-title">
                  Importação de resíduos sólidos pode impactar setor, diz associação
                </h2>
                <p className="article-date">
                  <span className="icon-date">⏰</span> 28/04/2025 às 19:55
                </p>
              </div>
            </article>

            <article className="article">
              <img src="https://i.imgur.com/W2d4V9F.png" alt="Lixo reciclado" className="article-img" /> {/* Substitua pelo caminho da sua imagem */}
              <div className="article-text">
                <h2 className="article-title">
                  Governo libera importação de “lixo” para reciclagem
                </h2>
                <p className="article-date">
                  <span className="icon-date">⏰</span> 27/04/2025 às 20:32
                </p>
              </div>
            </article>

            <article className="article">
              <img src="https://i.imgur.com/1G2XkY7.png" alt="Plástico dissolvível" className="article-img" /> {/* Substitua pelo caminho da sua imagem */}
              <div className="article-text">
                <h2 className="article-title">
                  Plástico que dissolve em água pode solucionar descarte de lixo eletrônico
                </h2>
                <p className="article-date">
                  <span className="icon-date">⏰</span> 25/04/2025 às 15:11
                </p>
              </div>
            </article>
          </section>
        </div>

        <aside className="sidebar">
          <div className="sidebar-item">
            <span className="icon-sidebar">🔥</span>
            <span>Em alta</span>
          </div>
          <div className="sidebar-item">
            <span className="icon-sidebar">💬</span> {/* Mudado para um ícone de balão de fala, mais parecido com a imagem */}
            <span>Compartilhe</span>
          </div>
          <div className="sidebar-item">
            <span className="icon-sidebar">🔖</span>
            <span>Notícias Salvas</span>
          </div>
        </aside>
      </div>
    </div>
  );
}