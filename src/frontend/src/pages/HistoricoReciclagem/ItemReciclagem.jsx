import { useState, useEffect } from 'react';
import Menu from '../../shared/Menu';
import './HistoricoReciclagem.css';
import db from '../../data/db.json'; // Importa dados iniciais

export default function HistoricoReciclagem() {
  const [acoes, setAcoes] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [filtros, setFiltros] = useState({
    status: '',
    tipoMaterial: '',
    ordenacao: 'recentes'
  });

  // Carrega dados do localStorage ou db.json
  useEffect(() => {
    const acoesSalvas = JSON.parse(localStorage.getItem('acoes')) || db.acoes;
    setAcoes(acoesSalvas);
  }, []);

  // Filtra os dados
  const filtrarDados = () => {
    return acoes
      .filter(item => {
        return (
          (termoPesquisa === '' || 
            item.pontoColeta.toLowerCase().includes(termoPesquisa.toLowerCase())) &&
          (filtros.status === '' || item.status === filtros.status) &&
          (filtros.tipoMaterial === '' || item.tipoMaterial === filtros.tipoMaterial)
        );
      })
      .sort((a, b) => {
        if (filtros.ordenacao === 'antigos') return new Date(a.dataInicial) - new Date(b.dataInicial);
        return new Date(b.dataInicial) - new Date(a.dataInicial); // Padrão: mais recentes primeiro
      });
  };

  return (
    <div className="container">
      <Menu />

      <section className="guia-header-box">
        <div className="guia-header-content">
          <i className="bi bi-recycle guia-icon"></i>
          <h1 className="guia-titulo">Histórico de Reciclagem</h1>
        </div>

        <div className="guia-search-filter">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
          />
        </div>
      </section>

      <section className="guia-box">
        <div className="historico-grid">
          {filtrarDados().map((item) => (
            <div key={item.id} className="item">
              <h3>{item.pontoColeta}</h3>
              <p>Tipo: {item.tipoMaterial}</p>
              <p>Quantidade: {item.quantidade} kg</p>
              <p>Data: {new Date(item.dataInicial).toLocaleDateString()}</p>
              {item.foto && <img src={item.foto} alt="Comprovante" width="100" />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}