// src/pages/ListaPontos.jsx
import Menu from '../../shared/Menu';
import './ListaPontos.css';
import pontos from '../../data/listaPontos.json';

export default function ListaPontos() {
  return (
    <>
      <Menu />
      <div className="lista-pontos-container">
        <div className="lista-sidebar">
          <div className="lista-header">
            <i className="bi bi-house-door-fill"></i>
            <h2>Pontos de Coleta</h2>
          </div>

          <div className="lista-pesquisa">
            <input placeholder="Pesquisar..." />
            <button><i className="bi bi-funnel"></i> Filtrar</button>
          </div>

          <div className="lista-cartoes">
            {pontos.map((ponto, idx) => (
              <div key={idx} className="lista-cartao">
                <div className="nome">
                  {ponto.nome} <span>({ponto.distancia})</span>
                </div>
                <div className="endereco">{ponto.endereco}</div>
                <div className="icones">
                  {ponto.materiais.map((m, i) => (
                    <i key={i} className={m.icone}></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

   <div className="lista-mapa">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.085912930952!2d-43.995737688368926!3d-19.920784137945976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa696efc80fbd2f%3A0xc005907b99a9dfd!2sR.%20Dom%20Jos%C3%A9%20Gaspar%2C%20500%20-%20Cora%C3%A7%C3%A3o%20Eucar%C3%ADstico%2C%20Belo%20Horizonte%20-%20MG%2C%2030535-901%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sca!4v1749477981751!5m2!1sfr!2sca"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>
    </>
  );
}
