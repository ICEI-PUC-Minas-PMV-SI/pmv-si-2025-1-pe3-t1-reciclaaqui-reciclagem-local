import { useEffect, useState } from "react";
import { buscarPontos } from "../services/pontosService";
import logo from '../img/logo.png';
import './CadastrarPonto.css';
import PontoCard from "../components/PontoCard";

const DetalharPonto = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [pontos, setPontos] = useState([]);
  const [loadingP, setLoadingP] = useState(true)

  useEffect(() => {
    async function carregar() {
      setLoadingP(true)
      const dados = await buscarPontos();
      setPontos(dados);
      setLoadingP(false)
    }

    carregar();
  }, []);

  return (
    <div className="page_detalhar">
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <img src={logo} alt="ReciclaAqui Logo" className="logo-img" />
          </div>
        </div>
        <nav className="nav-links">
          <a href="#" className="nav-link">👤 Perfil</a>
          <a href="#" className="nav-link">🏆 Meu Ranking</a>
          <a href="#" className="nav-link">📍 Pontos de Coleta</a>
        </nav>
      </header>
      <button className={`lista_btn shadow-sm ${showSidebar? "lbtn_on" : "lbtn_off"}`} onClick={() => setShowSidebar(!showSidebar)}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <div className={`lista_pontos shadow-lg ${showSidebar? "lista_on" : "lista_off"}`}>
        <div className="lista_pontos_row1">
          <h2 className="lista_pontos_ttl">Pontos de Coleta</h2>
        </div>
        <div>
          <div class={`spinner-border ${loadingP? "d-flex" : "d-none"}`} role="status">
          </div>
        {pontos.map((ponto) => (
          <PontoCard 
            key={ponto.id} 
            nome={ponto.nome} 
            endereco={ponto.endereco}
            materiais={ponto.materiais}
            outros={ponto.outros}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default DetalharPonto;
