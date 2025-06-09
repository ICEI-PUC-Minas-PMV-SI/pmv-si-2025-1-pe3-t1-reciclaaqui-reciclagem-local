import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="menu-topo">
      <div className="menu-esquerda">
        <div className="menu-btn-wrapper">
          <button className="menu-btn" onClick={() => setAberto(!aberto)}>
            <i className="bi bi-list"></i>
          </button>

          {aberto && (
            <nav className="menu-lateral">
              <button className="fechar-btn" onClick={() => setAberto(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
              <ul>
                <li><i className="bi bi-recycle"></i> <Link to="/guia-reciclagem">Guia de Reciclagem</Link></li>
                <li><i className="bi bi-trophy"></i> <Link to="/ranking">Meu Ranking</Link></li>
                <li><i className="bi bi-geo-alt"></i> <Link to="/pontos-de-coleta">Pontos de Coleta</Link></li>
                <li><i className="bi bi-clock-history"></i> <Link to="/historico-reciclagem">Histórico de Reciclagem</Link></li>
                <li><i className="bi bi-newspaper"></i> <Link to="/news">News</Link></li>
              </ul>
            </nav>
          )}
        </div>

        <img src="/img/logo.png" alt="Logo ReciclaAqui" className="logo" />

      </div>

      <div className="menu-direita">
        <Link to="/home" className="menu-link">
          <i className="bi bi-house-fill"></i> Home
        </Link>
        <Link to="/perfil" className="menu-link">
          <i className="bi bi-person-circle"></i> Perfil
        </Link>
      </div>
    </header>
  );
}
