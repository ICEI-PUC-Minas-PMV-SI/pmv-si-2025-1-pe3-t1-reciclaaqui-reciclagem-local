import { useState } from 'react';
import Menu from '../../shared/Menu';
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
            <article className="article">
              <img src="https://al.se.leg.br/wp-content/uploads/2016/04/lixo.jpg" alt="Resíduos" className="article-img" />
              <div className="article-text">
                <h2 className="article-title">Importação de resíduos sólidos pode impactar setor, diz associação</h2>
                <p className="article-date"><i className="bi bi-clock icon-date"></i> 28/04/2025 às 19:55</p>
                <button className="compartilhar-button" onClick={() => aoClicarCompartilhar({
                  titulo: "Importação de resíduos sólidos pode impactar setor, diz associação",
                  data: "28/04/2025 às 19:55",
                  imagem: "https://al.se.leg.br/wp-content/uploads/2016/04/lixo.jpg",
                  link: "https://www.example.com/noticia1",
                })}>
                  Compartilhar
                </button>
              </div>
            </article>

            <article className="article">
              <img src="https://climainfo.org.br/wp-content/uploads/2024/02/lixo-crescer-biodiversidade-clima.webp" alt="Lixo reciclado" className="article-img" />
              <div className="article-text">
                <h2 className="article-title">Governo libera importação de “lixo” para reciclagem</h2>
                <p className="article-date"><i className="bi bi-clock icon-date"></i> 27/04/2025 às 20:32</p>
                <button className="compartilhar-button" onClick={() => aoClicarCompartilhar({
                  titulo: "Governo libera importação de “lixo” para reciclagem",
                  data: "27/04/2025 às 20:32",
                  imagem: "https://climainfo.org.br/wp-content/uploads/2024/02/lixo-crescer-biodiversidade-clima.webp",
                  link: "https://www.example.com/noticia2",
                })}>
                  Compartilhar
                </button>
              </div>
            </article>

            <article className="article">
              <img src="https://www.direcional.com.br/wp-content/uploads/2021/04/shutterstock_731239045.jpg" alt="Plástico dissolvível" className="article-img" />
              <div className="article-text">
                <h2 className="article-title">Plástico que dissolve em água pode solucionar descarte de lixo eletrônico</h2>
               <p className="article-date"><i className="bi bi-clock icon-date"></i> 25/04/2025 às 15:11</p>
                <button className="compartilhar-button" onClick={() => aoClicarCompartilhar({
                  titulo: "Plástico que dissolve em água pode solucionar descarte de lixo eletrônico",
                  data: "25/04/2025 às 15:11",
                  imagem: "https://www.direcional.com.br/wp-content/uploads/2021/04/shutterstock_731239045.jpg",
                  link: "https://www.example.com/noticia3",
                })}>
                  Compartilhar
                </button>
              </div>
            </article>
          </section>
        </div>

<aside className="sidebar">
  <div className="sidebar-item">
    <i className="bi bi-fire icon-sidebar"></i>
    <span>Em alta</span>
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
        <p> <b>Compartilhar via: </b></p>
        <div className="share-buttons">
          <button className="btn-icon whatsapp" onClick={compartilharWhatsapp}>
            <i className="bi bi-whatsapp me-1"></i> Whatsapp
          </button>
          <button className="btn-icon email" onClick={compartilharEmail}>
            <i className="bi bi-envelope-fill me-1"></i> Email
          </button>
          <button className="btn-icon copiar_link" onClick={() => navigator.clipboard.writeText(artigoParaCompartilhar.link).then(() => alert('Link copiado!'))}>
            <i className="bi bi-link-45deg me-1"></i> Copiar link
          </button>
          <button className="btn-icon facebook" onClick={compartilharFacebook}>
            <i className="bi bi-facebook me-1"></i> Facebook
          </button>
        </div>
      <br></br>
      </div>
      <button className="btn btn-success" onClick={aoClicarFecharCompartilhar}>
        <i className="bi bi-x-lg me-1"></i> Fechar 
      </button>
    </div>
  </> 
)}

    </div>
  );
}
