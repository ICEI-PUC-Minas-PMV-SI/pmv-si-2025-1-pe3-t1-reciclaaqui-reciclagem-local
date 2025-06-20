import { useState, useEffect } from 'react';
import Menu from '../../shared/Menu';
import './HistoricoReciclagem.css';

const parseLocalDate = (str) => {
  const [year, month, day] = str.split('-');
  return new Date(+year, +month - 1, +day);
};


const imagensFixas = {
  plastico: '/img/historicoReciclagem/plasticoSacolas.png',
  papel: '/img/historicoReciclagem/papelPapelao.png',
  vidro: '/img/historicoReciclagem/vidroGarrafas.png',
  metal: '/img/historicoReciclagem/metalFios.png',
  organico: '/img/historicoReciclagem/organicosTerra.png',
  eletronico: '/img/historicoReciclagem/eletronicosTech.png'
};

const nomesMateriais = {
  plastico: 'Plástico',
  papel: 'Papel',
  metal: 'Metal',
  vidro: 'Vidro',
  organico: 'Orgânico',
  eletronico: 'Eletrônico'
};

export default function HistoricoReciclagem() {
  const [modalAberto, setModalAberto] = useState(false);
  const [filtroModalAberto, setFiltroModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [dados, setDados] = useState([]);
  const [pontosColeta, setPontosColeta] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [totalPontos, setTotalPontos] = useState(0);

  const [filtros, setFiltros] = useState({
    status: '',
    tipoMaterial: '',
    quantidade: '',
    dataInicial: '',
    dataFinal: '',
    ordenacao: 'recentes',
    pontoColeta: '',
    periodo: ''
  });
            const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

useEffect(() => {
    async function carregarDados() {
      try {
        const res = await fetch('http://localhost:10000/acoes');
        if (!res.ok) throw new Error('Erro ao buscar dados.');
        const json = await res.json();
        
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        if (!usuarioLogado) {
          setDados([]);
          return;
        }

        // Filtra somente as ações do usuário logado
        const acoesDoUsuario = json.filter(acao => acao.idUsuario === usuarioLogado.id);
        console.log('Usuário logado:', usuarioLogado);

        setDados(acoesDoUsuario);

        const total = acoesDoUsuario.reduce((soma, acao) => soma + (acao.pontos || 0), 0);
        setTotalPontos(total);

      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }
    carregarDados();
  }, []);

  const abrirModal = (item) => {
    if (item.tipoMaterial) {
      setItemSelecionado(item);
      setModalAberto(true);
    }
  };

  const fecharModal = () => {
    setModalAberto(false);
    setItemSelecionado(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  const limparFiltros = () => {
    setFiltros({
      status: '',
      tipoMaterial: '',
      quantidade: '',
      dataInicial: '',
      dataFinal: '',
      ordenacao: 'recentes',
      pontoColeta: '',
      periodo: ''
    });
    setTermoPesquisa('');
    setMostrarTodos(false);
  };

  const aplicarFiltros = () => {
    if (filtros.dataInicial && filtros.dataFinal && new Date(filtros.dataFinal) < new Date(filtros.dataInicial)) {
      alert('A data final não pode ser anterior à data inicial');
      return;
    }
    setFiltroModalAberto(false);
    setMostrarTodos(false);
  };

  const hasActiveFilters = () => {
    return (
      Object.entries(filtros).some(([key, val]) => {
        if (key === 'ordenacao') return val !== 'recentes';
        return val !== '';
      }) || termoPesquisa !== ''
    );
  };

  const filtrarDados = () => {
    return dados.filter(item => {
      const matchSearch = termoPesquisa === '' ||
        item.tipoMaterial?.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        item.comentario?.toLowerCase().includes(termoPesquisa.toLowerCase());

      const matchStatus = filtros.status === '' || item.status === filtros.status;
      const matchMaterial = filtros.tipoMaterial === '' || item.tipoMaterial === filtros.tipoMaterial;
      const matchQuantidade = filtros.quantidade === '' ||
        (item.quantidade && item.quantidade >= parseFloat(filtros.quantidade));
      const matchDataInicial =
        filtros.dataInicial === '' ||
        (item.dataInicial && new Date(item.dataInicial).setHours(0, 0, 0, 0) >= parseLocalDate(filtros.dataInicial).setHours(0, 0, 0, 0));

      const matchDataFinal =
        filtros.dataFinal === '' ||
        (item.dataInicial && new Date(item.dataInicial).setHours(0, 0, 0, 0) <= parseLocalDate(filtros.dataFinal).setHours(0, 0, 0, 0));

      const matchPontoColeta = filtros.pontoColeta === '' || item.pontoColeta === filtros.pontoColeta;

      let matchPeriodo = true;
      if (filtros.periodo) {
        const today = new Date();
        const itemDate = new Date(item.dataInicial);

        switch (filtros.periodo) {
          case 'hoje':
            matchPeriodo = itemDate.toDateString() === today.toDateString();
            break;
          case 'semana':
            const startOfWeek = new Date(today);
            startOfWeek.setDate(today.getDate() - today.getDay());
            matchPeriodo = itemDate >= startOfWeek;
            break;
          case 'mes':
            matchPeriodo = itemDate.getMonth() === today.getMonth() &&
              itemDate.getFullYear() === today.getFullYear();
            break;
          case 'ano':
            matchPeriodo = itemDate.getFullYear() === today.getFullYear();
            break;
        }
      }

      return matchSearch && matchStatus && matchMaterial &&
        matchQuantidade && matchDataInicial && matchDataFinal &&
        matchPontoColeta && matchPeriodo;
    }).sort((a, b) => {
      switch (filtros.ordenacao) {
        case 'antigos':
          return new Date(a.dataRegistro) - new Date(b.dataRegistro);
        case 'quantidade':
          return (b.quantidade || 0) - (a.quantidade || 0);
        default:
          return new Date(b.dataRegistro) - new Date(a.dataRegistro);
      }
    });
  };

  const calcularImpacto = () => {
    const totalKg = dados.reduce((sum, item) => sum + (item.quantidade || 0), 0);

    return [
      {
        nome: `${totalKg.toFixed(2)} Kilos`,
        imagem: "/img/historicoReciclagem/pesoKg.png",
        descricao: "Você reciclou um total de",
        subdescricao: `Isso equivale a ${(totalKg / 0.2).toFixed(0)} celular(es).`
      },
      {
        nome: `${(totalKg / 50).toFixed(0)} árvore(s)`,
        imagem: "/img/historicoReciclagem/arvoreMuda.png",
        descricao: "Você evitou o corte de",
        subdescricao: `Isso equivale a ${(totalKg / 70).toFixed(0)} cama(s) de casal`
      },
      {
        nome: `${(totalKg * 20).toFixed(2)} litros de água`,
        imagem: "/img/historicoReciclagem/torneiraAgua.png",
        descricao: "Você reciclou um total de",
        subdescricao: `Equivalente a abastecer ${(totalKg * 20 / 150).toFixed(0)} pessoas por dia`
      },
      {
        nome: `${(totalKg * 25).toFixed(2)} litros de água`,
        imagem: "/img/historicoReciclagem/quantidadeAgua.png",
        descricao: "Você evitou a contaminação de",
        subdescricao: `Equivalente a abastecer ${(totalKg * 25 / 150).toFixed(0)} pessoas por dia`
      },
      {
        nome: `${(totalKg * 15).toFixed(2)} kWh de energia`,
        imagem: "/img/historicoReciclagem/energiaLimpa.png",
        descricao: "Você ajudou a economizar",
        subdescricao: `Equivalente a abastecer ${(totalKg * 15 / 8).toFixed(0)} residências por dia`
      },
      {
        nome: `${(totalKg * 2).toFixed(2)} kg de CO2`,
        imagem: "/img/historicoReciclagem/climaGlobal.png",
        descricao: "Você evitou a emissão de",
        subdescricao: `Compensando o gasto de ${(totalKg * 2 / 4).toFixed(0)} pessoas por dia`
      }
    ];
  };

  const registrosVisiveis = mostrarTodos
    ? dados
    : hasActiveFilters()
      ? filtrarDados()
      : calcularImpacto();

  return (
    <div className="container">
      <Menu />
      <section className="guia-header-box">
        <div className="guia-header-content">
          <i className="bi bi-recycle guia-icon"></i>
          <div>
            <h1 className="guia-titulo">Histórico de Reciclagem</h1>
          </div>
        </div>

        <div className="guia-search-filter">
           {/* Mostrar botão remover filtros apenas se mostrarTodos=true e filtros ativos */}
            {hasActiveFilters() && (
              <button className="filter-button remove-filters-btn" onClick={limparFiltros}>
                <i className="bi bi-x-circle"></i> Remover Filtros
              </button>
            )}


          <button className="filter-button apply-filters-btn" onClick={() => setFiltroModalAberto(true)}>
            <i className="bi bi-funnel"></i> Filtrar
          </button>

          {!mostrarTodos && (
            <button className="filter-button apply-filters-btn" onClick={() => setMostrarTodos(true)}>
              <i className="bi bi-list"></i> Mostrar todas as ações registradas
            </button>
          )}

          {(mostrarTodos || hasActiveFilters()) && (
            <button
              className="filter-button apply-filters-btn"
              onClick={() => {
                setMostrarTodos(false);
                limparFiltros(); // limpa os filtros para que apenas os impactos sejam mostrados
              }}

            >
              <i className="bi bi-bar-chart"></i> Ver informações de impacto
            </button>
          )}
        </div>
      </section>

      <section className="guia-box">
        <div className="total-pontos">
        <h2>Total de Pontos Acumulados: <span>{totalPontos}</span></h2>
        <p className="descricao-pontos">Esses pontos refletem o impacto positivo gerado pelas suas ações de reciclagem.</p>
      </div>

        {carregando ? (
          <p className="loading">Carregando histórico...</p>
        ) : erro ? (
          <p className="error">Erro ao carregar dados: {erro}</p>
        ) : (
          <div className="historico-grid">
            {registrosVisiveis.map((item, idx) => {
              const isRegistro = !!item.tipoMaterial;
              const imagem = isRegistro
                ? imagensFixas[item.tipoMaterial?.toLowerCase()] || 'https://via.placeholder.com/150'
                : item.imagem;

              return (
                <div className="item" key={idx} onClick={() => abrirModal(item)}>
                  <img
                    src={imagem}
                    alt={item.nome || item.tipoMaterial || 'Imagem'}
                    className={isRegistro ? 'img-registro' : 'img-informacao'}
                  />
                  <div className="item-content">
                    <h3 className="item-titulo">
                      {item.tipoMaterial
                        ? `Material: ${nomesMateriais[item.tipoMaterial] || item.tipoMaterial}`
                        : item.nome || 'Ação'}
                    </h3>
                    <p className="item-descricao">{item.descricao || `Quantidade: ${item.quantidade} kg`}</p>
                    {item.subdescricao && <p className="item-subdescricao">{item.subdescricao}</p>}
                    {item.pontoColeta && <p className="item-subdescricao">Ponto de Coleta: {item.pontoColeta}</p>}
                    {item.status && <p className="item-subdescricao">Status: {item.status}</p>}
                    {item.dataInicial && <p className="item-subdescricao">Data: {new Date(item.dataInicial).toLocaleDateString('pt-BR')}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <p className="nota">
          Saiba mais sobre o histórico de reciclagem e como ele pode ajudar a melhorar a sustentabilidade.
        </p>
      </section>
      

      {/* Modal de Filtros */}
      {filtroModalAberto && (
        <div className="modal-filtro">
          <div className="modal-filtro-card">
            <button type="button" className="fechar-modal-btn" onClick={() => setFiltroModalAberto(false)}>
              <i className="bi bi-x-lg"></i>
            </button>

            <h3>Filtros</h3>
            <label>Data Inicial:</label>
            <input type="date" name="dataInicial" value={filtros.dataInicial} onChange={handleInputChange} />

            <label>Data Final:</label>
            <input type="date" name="dataFinal" value={filtros.dataFinal} onChange={handleInputChange} />

            <label>Ordenar por:</label>
            <select name="ordenacao" value={filtros.ordenacao} onChange={handleInputChange}>
              <option value="recentes">Mais Recentes</option>
              <option value="antigos">Mais Antigos</option>
              <option value="quantidade">Maior Quantidade</option>
            </select>

            <label>Período:</label>
            <select name="periodo" value={filtros.periodo} onChange={handleInputChange}>
              <option value="">Todos</option>
              <option value="hoje">Hoje</option>
              <option value="semana">Esta Semana</option>
              <option value="mes">Este Mês</option>
              <option value="ano">Este Ano</option>
            </select>

            <label>Ponto de Coleta:</label>
            <select name="pontoColeta" value={filtros.pontoColeta} onChange={handleInputChange}>
              <option value="">Todos</option>
              {pontosColeta.map((ponto, i) => (
                <option key={i} value={ponto}>{ponto}</option>
              ))}
            </select>

            <label>Status:</label>
            <select name="status" value={filtros.status} onChange={handleInputChange}>
              <option value="">Todos</option>
              <option value="pendente">Pendente</option>
              <option value="completo">Completo</option>
              <option value="cancelado">Cancelado</option>
            </select>

            <label>Tipo de Material:</label>
            <select name="tipoMaterial" value={filtros.tipoMaterial} onChange={handleInputChange}>
              <option value="">Todos</option>
              <option value="plastico">Plástico</option>
              <option value="papel">Papel</option>
              <option value="metal">Metal</option>
              <option value="vidro">Vidro</option>
              <option value="organico">Orgânico</option>
              <option value="eletronico">Eletrônico</option>
            </select>

            <div className="modal-filtro-botoes">
              <button onClick={limparFiltros}>Limpar</button>
              <button onClick={aplicarFiltros}>Aplicar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de detalhes do registro */}
      {modalAberto && itemSelecionado && (
        <>
          {/* Imagem de fundo desfocada */}
          <div
            className="modal-image-background"
            style={{
              backgroundImage: `url("${
                imagensFixas[itemSelecionado.tipoMaterial?.toLowerCase()] || '/img/default.png'
              }")`,
            }}
          />

          {/* Modal com conteúdo */}
          <div className="modal-detalhes-overlay" onClick={fecharModal}>
            <div className="modal-detalhes-card" onClick={e => e.stopPropagation()}>
              <button type="button" className="fechar-modal-btn" onClick={fecharModal}>
                <i className="bi bi-x-lg"></i>
              </button>

              {/* Mostrar a foto registrada ou imagem fixa */}
              {itemSelecionado.foto ? (
                <img
                  src={`data:image/jpeg;base64,${itemSelecionado.foto}`}
                  alt={`Foto do registro de ${itemSelecionado.tipoMaterial}`}
                  className="modal-detalhes-imagem"
                />
              ) : (
                <img
                  src={imagensFixas[itemSelecionado.tipoMaterial?.toLowerCase()] || '/img/default.png'}
                  alt={`Imagem padrão de ${itemSelecionado.tipoMaterial}`}
                  className="img-material-plastico"
                />
              )}

              <div className="modal-detalhes-conteudo">
                {itemSelecionado.comentario && (
                  <>
                    <h3>Comentário</h3>
                    <p>{itemSelecionado.comentario}</p>
                  </>
                )}

                <h3>Período</h3>
                <p>
                  {itemSelecionado.dataInicial
                    ? new Date(itemSelecionado.dataInicial).toLocaleDateString('pt-BR')
                    : 'Data inicial não informada'}{' '}
                  -{' '}
                  {itemSelecionado.dataFinal
                    ? new Date(itemSelecionado.dataFinal).toLocaleDateString('pt-BR')
                    : 'Data final não informada'}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
