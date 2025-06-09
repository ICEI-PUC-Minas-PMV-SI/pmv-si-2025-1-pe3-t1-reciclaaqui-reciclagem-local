import { useState } from 'react';
import Menu from '../../shared/Menu';
import noticiasData from '../../data/news.json'; 
import './News.css';

export default function News() {
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
      const corpo = encodeURIComponent(`Olá,\n\nConfira esta notícia interessante:\n\n${artigoParaCompartilhar.titulo}\n\nLeia mais: ${artigoParaCompartilhar.link}`);
      window.open(`mailto:?subject=${assunto}&body=${corpo}`);
    }
  };

  return (
    <div className="container">
      <Menu />

      <div className="main-content">
        <div className="articles-and-search">
          <div className="search-bar">
            <button className="btn-icon-clean" aria-label="Pesquisar">
              <i className="bi bi-search"></i>
            </button>
          </div>

          <section className="articles">
            {noticiasData.noticias.map((noticia, index) => (
              <article className="article" key={index}>
                <img src={noticia.imagem} alt={noticia.titulo} className="article-img" />
                <div className="article-text">
                  <h2 className="article-title">{noticia.titulo}</h2>
                  <p className="article-date">
                    <i className="bi bi-clock icon-date"></i> {noticia.data}
                  </p>
                  <button
                    className="compartilhar-button"
                    onClick={() => aoClicarCompartilhar(noticia)}
                  >
                    Compartilhar
                  </button>
                </div>
              </article>
            ))}
          </section>
        </div>

        <aside className="sidebar">
          <div className="sidebar-item">
            <i className="bi bi-fire icon-sidebar"></i>
            <span>Em alta</span>
          </div>
          <div className="sidebar-item">
            <i className="bi bi-chat-dots icon-sidebar"></i>
            <span>Compartilhe</span>
          </div>
          <div className="sidebar-item">
            <i className="bi bi-bookmark-check icon-sidebar"></i>
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
                <i className="bi bi-newspaper icon-news me-2"></i> Recicla<span className="logo-highlight">NEWS</span>
              </div>
            </div>
            <img src={artigoParaCompartilhar.imagem} alt={artigoParaCompartilhar.titulo} className="card-image" />
            <h3 className="card-title">{artigoParaCompartilhar.titulo}</h3>
            <p className="card-date">
              <i className="bi bi-clock icon-date me-2"></i>
              {artigoParaCompartilhar.data}
            </p>
            <div className="share-options-container">
              <p>Compartilhar via:</p>
              <div className="share-buttons">
                <button className="btn-icon" onClick={compartilharWhatsapp}>
                  <i className="bi bi-whatsapp me-1"></i> WhatsApp
                </button>
                <button className="btn-icon" onClick={compartilharEmail}>
                  <i className="bi bi-envelope-fill me-1"></i> Email
                </button>
                <button className="btn-icon" onClick={() => navigator.clipboard.writeText(artigoParaCompartilhar.link).then(() => alert('Link copiado!'))}>
                  <i className="bi bi-link-45deg me-1"></i> Copiar link
                </button>
                <button className="btn-icon" onClick={compartilharFacebook}>
                  <i className="bi bi-facebook me-1"></i> Facebook
                </button>
              </div>
            </div>
            <button className="btn-secondary-wide mt-3" onClick={aoClicarFecharCompartilhar}>
              <i className="bi bi-x-lg me-1"></i> Fechar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
