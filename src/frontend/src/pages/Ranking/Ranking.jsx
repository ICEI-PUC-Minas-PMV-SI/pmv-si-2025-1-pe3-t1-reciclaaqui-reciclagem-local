import { useEffect, useState } from 'react';
import Menu from '../../shared/Menu';
import './Ranking.css';

const Ranking = () => {
  const [ranking, setRanking] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [resAcoes, resUsuarios] = await Promise.all([
          fetch('http://localhost:10000/acoes'),
          fetch('http://localhost:10000/usuarios')
        ]);

        if (!resAcoes.ok || !resUsuarios.ok) throw new Error('Erro ao buscar dados');

        const acoes = await resAcoes.json();
        const usuarios = await resUsuarios.json();

        const pontosPorUsuario = {};
        acoes.forEach(acao => {
          if (!pontosPorUsuario[acao.idUsuario]) {
            pontosPorUsuario[acao.idUsuario] = 0;
          }
          pontosPorUsuario[acao.idUsuario] += acao.pontos || 0;
        });

        const rankingCalculado = usuarios
          .filter(usuario => pontosPorUsuario[usuario.id])
          .map(usuario => ({
            id: usuario.id,
            nome: usuario.email,
            pontos: pontosPorUsuario[usuario.id],
            avatar: usuario.imagem || '/img/ranking/avatar-generico.png'
          }))
          .sort((a, b) => b.pontos - a.pontos);

        setRanking(rankingCalculado);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    };

    carregarDados();
  }, []);

  return (
    <>
      <Menu />
      <div className="container">
        <div className="ranking-header">
          <i className="bi bi-trophy"></i>
          <div>
            <h2 className="ranking-title">Ranking de Sustentabilidade</h2>
            <p className="ranking-subtitle">Ranking dos melhores em sustentabilidade</p>
          </div>
        </div>

        {carregando ? (
          <p className="loading">Carregando ranking...</p>
        ) : erro ? (
          <p className="error">Erro ao carregar ranking: {erro}</p>
        ) : (
          <ul className="ranking-list">
            {ranking.map((pessoa, idx) => (
              <li key={pessoa.id} className="ranking-item">
                <div className="ranking-posicao">
                  {idx === 0 && <img src="/img/ranking/medalha1.png" alt="1º lugar" />}
                  {idx === 1 && <img src="/img/ranking/medalha2.png" alt="2º lugar" />}
                  {idx === 2 && <img src="/img/ranking/medalha3.png" alt="3º lugar" />}
                  {idx > 2 && <span>{idx + 1}</span>}
                </div>
                <img src={pessoa.avatar} alt={pessoa.nome} className="ranking-avatar" />
                <div className="ranking-info">
                  <span className="ranking-nome">{pessoa.nome}</span>
                  <span className="ranking-pontos">{pessoa.pontos.toLocaleString('pt-BR')} pontos</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Ranking;
