import { Link } from 'react-router-dom';
import './PontosDeColetaSubMenu.css';

export default function PontosDeColetaSubMenu() {
  return (
    <aside className="submenu-pontos">
      <div className="submenu-item">
       <i className="bi bi-clipboard-check"></i>
        <Link to="/pontos-de-coleta/lista-pontos">Lista de Pontos</Link>
      </div>
      <div className="submenu-item">
       <i className="bi bi-plus-lg"></i>
        <Link to="/pontos-de-coleta/cadastrar">Cadastrar Ponto</Link>
      </div>
    </aside>
  );
}
