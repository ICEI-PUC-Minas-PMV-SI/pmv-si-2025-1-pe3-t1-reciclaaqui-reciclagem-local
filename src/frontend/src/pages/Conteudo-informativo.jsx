import "./Conteudo-informativo.css";
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import { useState } from 'react';

export default function Conteudoinformativo() {
  const [mostrarCardCompartilhar, setMostrarCardCompartilhar] = useState(false);
  const [artigoParaCompartilhar, setArtigoParaCompartilhar] = useState(null);

  const aoClicarCompartilhar = (artigo) => {
    setArtigoParaCompartilhar(artigo);
    setMostrarCardCompartilhar(true);
  };

  const aoClicarFecharCompartilhar = () => {
    setMostrarCardCompartilhar(false);
    setArtigoParaCompartilhar(null);
  };

  const compartilharWhatsapp = () => {
    if (artigoParaCompartilhar) {
      const mensagem = encodeURIComponent(`${artigoParaCompartilhar.titulo}\n\nLeia mais: ${artigoParaCompartilhar.link}`);
      window.open(`https://wa.me/?text=${mensagem}`, '_blank');
    }
  };

  const compartilharFacebook = () => {
    if (artigoParaCompartilhar) {
      const url = encodeURIComponent(artigoParaCompartilhar.link);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
  };

  const compartilharEmail = () => {
    if (artigoParaCompartilhar) {
      const assunto = encodeURIComponent(`Confira esta notícia: ${artigoParaCompartilhar.titulo}`);
      const corpo = encodeURIComponent(`Olá,\n\nConfira esta notícia interessante:\n\n${artigoParaCompartilhar.titulo}\n\nVocê pode ler mais aqui: ${artigoParaCompartilhar.link}`);
      window.open(`mailto:?subject=${assunto}&body=${corpo}`);
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
              <img src="https://al.se.leg.br/wp-content/uploads/2016/04/lixo.jpg" alt="Resíduos" className="article-img" /> {/* Su */}
              <div className="article-text">
                <h2 className="article-title">
                  Importação de resíduos sólidos pode impactar setor, diz associação
                </h2>
                <p className="article-date">
                  <span className="icon-date">⏰</span> 28/04/2025 às 19:55
                </p>
                <button
                  className="compartilhar-button"
                  onClick={() => aoClicarCompartilhar({
                    titulo: "Importação de resíduos sólidos pode impactar setor, diz associação",
                    data: "28/04/2025 às 19:55",
                    imagem: "https://al.se.leg.br/wp-content/uploads/2016/04/lixo.jpg",
                    link: "https://www.example.com/noticia1", // Substitua pela URL real
                  })}
                >
                  Compartilhar
                </button>
              </div>
            </article>

            <article className="article">
              <img src="https://climainfo.org.br/wp-content/uploads/2024/02/lixo-crescer-biodiversidade-clima.webp" alt="Lixo reciclado" className="article-img" /> {/* Su*/}
              <div className="article-text">
                <h2 className="article-title">
                  Governo libera importação de “lixo” para reciclagem
                </h2>
                <p className="article-date">
                  <span className="icon-date">⏰</span> 27/04/2025 às 20:32
                </p>
                <button
                  className="compartilhar-button"
                  onClick={() => aoClicarCompartilhar({
                    titulo: "Governo libera importação de “lixo” para reciclagem",
                    data: "27/04/2025 às 20:32",
                    imagem: "https://climainfo.org.br/wp-content/uploads/2024/02/lixo-crescer-biodiversidade-clima.webp",
                    link: "https://www.example.com/noticia2", // Substitua pela URL real
                  })}
                >
                  Compartilhar
                </button>
              </div>
            </article>

            <article className="article">
              <img src="https://www.direcional.com.br/wp-content/uploads/2021/04/shutterstock_731239045.jpg" alt="Plástico dissolvível" className="article-img" /> {/* Su */}
              <div className="article-text">
                <h2 className="article-title">
                  Plástico que dissolve em água pode solucionar descarte de lixo eletrônico
                </h2>
                <p className="article-date">
                  <span className="icon-date">⏰</span> 25/04/2025 às 15:11
                </p>
                <button
                  className="compartilhar-button"
                  onClick={() => aoClicarCompartilhar({
                    titulo: "Plástico que dissolve em água pode solucionar descarte de lixo eletrônico",
                    data: "25/04/2025 às 15:11",
                    imagem: "https://www.direcional.com.br/wp-content/uploads/2021/04/shutterstock_731239045.jpg",
                    link: "https://www.example.com/noticia3", // Substitua pela URL real
                  })}
                >
                  Compartilhar
                </button>
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
            <span className="icon-sidebar">💬</span>
            <span>Compartilhe</span>
          </div>
          <div className="sidebar-item">
            <span className="icon-sidebar">🔖</span>
            <span>Notícias Salvas</span>
          </div>
        </aside>
      </div>

      {mostrarCardCompartilhar && artigoParaCompartilhar && (
        <>
          <div className="overlay" onClick={aoClicarFecharCompartilhar}></div>
          <div className="card-flutuante">
            <div className="card-header">
              <div className="logo">
                <span className="icon-news">📰</span> Recicla<span className="logo-highlight">NEWS</span>
              </div>
            </div>
            {artigoParaCompartilhar.imagem && (
              <img src={artigoParaCompartilhar.imagem} alt={artigoParaCompartilhar.titulo} className="card-image" />
            )}
            <h3 className="card-title">{artigoParaCompartilhar.titulo}</h3>
            <p className="card-date">
              <span className="icon-date">⏰</span> {artigoParaCompartilhar.data}
            </p>
            <div className="share-options-container">
              <p>Compartilhar via:</p>
              <div className="share-buttons">
                <button className="share-button whatsapp" onClick={compartilharWhatsapp}>WhatsApp</button>
                <button className="share-button email" onClick={compartilharEmail}>Email</button>
                <button className="share-button link" onClick={() => {
                  if (artigoParaCompartilhar.link) {
                    navigator.clipboard.writeText(artigoParaCompartilhar.link).then(() => alert('Link copiado!'));
                  } else {
                    alert('Nenhum link disponível para copiar.');
                  }
                }}>Copiar link</button>
                <button className="share-button facebook" onClick={compartilharFacebook}>Facebook</button>
              </div>
            </div>
            <button className="close-button" onClick={aoClicarFecharCompartilhar}>Fechar</button>
          </div>
        </>
      )}
    </div>
  );
}