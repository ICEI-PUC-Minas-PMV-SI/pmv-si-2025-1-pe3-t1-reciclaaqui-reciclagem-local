import { useEffect, useState } from "react";
import { buscarPontos } from "../services/pontosService";
import logo from '../img/logo.png';
import './CadastrarPonto.css';
import PontoCard from "../components/PontoCard";

const DetalharPonto = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showFiltros, setShowFiltros] = useState(false);
  const [pontos, setPontos] = useState([]);
  const [loadingP, setLoadingP] = useState(true);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroMateriais, setFiltroMateriais] = useState([]);

  useEffect(() => {
    async function carregar() {
      setLoadingP(true);
      const dados = await buscarPontos();
      setPontos(dados);
      setLoadingP(false);
    }

    carregar();
  }, []);

  function alternarMaterial(material) {
    setFiltroMateriais(prev => 
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  }

  const pontosFiltrados = pontos.filter((ponto) => {
    const nomeCondiz = ponto.nome.toLowerCase().includes(filtroNome.toLowerCase());
    const materiaisDoPonto = ponto.materiais || [];
    const materiaisCondizem = filtroMateriais.length === 0 || filtroMateriais.every(mat => materiaisDoPonto.includes(mat));
    return nomeCondiz && materiaisCondizem;
  });

  const materiaisUnicos = [...new Set(pontos.flatMap(p => p.materiais || []))];

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

      <button className={`lista_btn shadow-sm ${showSidebar ? "lbtn_on" : "lbtn_off"}`} onClick={() => setShowSidebar(!showSidebar)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className={`lista_pontos shadow-lg ${showSidebar ? "lista_on" : "lista_off"}`}>
        <div className="lista_pontos_row1">
          <h2 className="lista_pontos_ttl">Pontos de Coleta</h2>
        </div>
        <button onClick={() => setShowFiltros(!showFiltros)} className={`btn ${showFiltros? "btn-secondary": "btn_filtro_off"} btn_filtro d-flex gap-3`}>
          <i class="bi bi-filter"></i>
          Filtrar
        </button>
        <div className={`filtro ${showFiltros? "filtro_on" : "filtro_off"}`}>
        <div className="px-3 pb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Buscar por nome"
            value={filtroNome}
            onChange={(e) => setFiltroNome(e.target.value)}
          />

          <div className="mb-2">
            {materiaisUnicos.map((mat, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`check-${mat}`}
                  checked={filtroMateriais.includes(mat)}
                  onChange={() => alternarMaterial(mat)}
                />
                <label className="form-check-label" htmlFor={`check-${mat}`}>
                  {mat}
                </label>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div>
          {loadingP ? (
            <div className="d-flex justify-content-center py-3">
              <div className="spinner-border" role="status" />
            </div>
          ) : (
            pontosFiltrados.map((ponto) => (
              <PontoCard
                key={ponto.id}
                nome={ponto.nome}
                endereco={ponto.endereco}
                materiais={ponto.materiais}
                outros={ponto.outros}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalharPonto;