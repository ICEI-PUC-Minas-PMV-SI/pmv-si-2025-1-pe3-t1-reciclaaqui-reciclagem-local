import Menu from '../../shared/Menu';
import './Ranking.css';
import rankingData from '../../data/ranking.json';

const Ranking = () => {
  return (
    <>
      <Menu />

      <div className="container">
        <div className="ranking-header">
          <i className="bi bi-trophy"></i>
          <div>
            <h2>Ranking de Sustentabilidade</h2>
            <p>Ranking dos melhores em sustentabilidade</p>
          </div>
        </div>

        <ul className="ranking-list">
          {rankingData.map((pessoa, idx) => (
            
            <li key={idx} className="ranking-item">
            <div className="ranking-posicao">
                {idx === 0 && <img src="img/ranking/medalha1.png" alt="1º lugar" />}
                {idx === 1 && <img src="img/ranking/medalha2.png" alt="2º lugar" />}
                {idx === 2 && <img src="img/ranking/medalha3.png" alt="3º lugar" />}
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
      </div>
    </>
  );
};

export default Ranking;