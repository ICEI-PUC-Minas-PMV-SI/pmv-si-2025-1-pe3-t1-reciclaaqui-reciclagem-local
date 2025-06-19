import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Menu from '../../shared/Menu';
import styles from './ListarAvaliacoes.module.css';
import pontos from '../../data/listaPontos.json';

export default function ListaAvaliacoes() {
  const { id } = useParams();
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const ponto = pontos.find(p => p.id === id);

  useEffect(() => {
    fetch('http://localhost:10000/avaliacoes')
      .then(response => response.json())
      .then(data => {
        const filtradas = data
          .filter(avaliacao => avaliacao.id_ponto === id)
          .sort((a, b) => new Date(b.data) - new Date(a.data));
        setAvaliacoes(filtradas);
      })
      .catch(error => console.error('Erro ao buscar avaliações:', error));
  }, [id]);

  const calcularMedia = (campo) => {
    if (avaliacoes.length === 0) return 0;
    const soma = avaliacoes.reduce((total, item) => total + (item[campo] || 0), 0);
    return (soma / avaliacoes.length).toFixed(1);
  };

  const calcularMediaTotal = () => {
    if (avaliacoes.length === 0) return 0;
    const totalNotas = avaliacoes.reduce((soma, item) => {
      return soma +
        (item.nota_geral || 0) +
        (item.nota_acesso || 0) +
        (item.nota_horario || 0) +
        (item.nota_materiais || 0);
    }, 0);
    const totalCampos = avaliacoes.length * 4;
    return (totalNotas / totalCampos).toFixed(1);
  };

  const renderEstrelas = (nota) => {
    const estrelas = [];
    const notaFloat = parseFloat(nota);

    for (let i = 1; i <= 5; i++) {
      if (notaFloat >= i) {
        estrelas.push(<i key={i} className="bi bi-star-fill"></i>);
      } else if (notaFloat >= i - 0.5) {
        estrelas.push(<i key={i} className="bi bi-star-half"></i>);
      } else {
        estrelas.push(<i key={i} className="bi bi-star"></i>);
      }
    }

    return estrelas;
  };

  const avaliacoesExibidas = mostrarTodas ? avaliacoes : avaliacoes.slice(0, 3);

  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.mainContent}>
        {ponto ? (
          <>
            <h1 className={styles.titulo}>
              <i className="bi bi-geo-alt"></i> {ponto.endereco}
            </h1>

            {avaliacoes.length > 0 ? (
              <>
                <div className={styles.mediasContainer}>
                  <div className={styles.mediaGeral}>
                    <div className={styles.notaPrincipal}>{calcularMediaTotal()}</div>
                    <div className={styles.estrelas}>
                      {renderEstrelas(calcularMediaTotal())}
                    </div>
                  </div>

                  <div className={styles.mediasDetalhadas}>
                    <div className={styles.mediaItem}>
                      <span className={styles.label}>Nota Geral</span>
                      <span className={styles.estrelas}>{renderEstrelas(calcularMedia('nota_geral'))}</span>
                      <span className={styles.valor}>{calcularMedia('nota_geral')}</span>
                    </div>
                    <div className={styles.mediaItem}>
                      <span className={styles.label}>Acesso</span>
                      <span className={styles.estrelas}>{renderEstrelas(calcularMedia('nota_acesso'))}</span>
                      <span className={styles.valor}>{calcularMedia('nota_acesso')}</span>
                    </div>
                    <div className={styles.mediaItem}>
                      <span className={styles.label}>Horário</span>
                      <span className={styles.estrelas}>{renderEstrelas(calcularMedia('nota_horario'))}</span>
                      <span className={styles.valor}>{calcularMedia('nota_horario')}</span>
                    </div>
                    <div className={styles.mediaItem}>
                      <span className={styles.label}>Materiais</span>
                      <span className={styles.estrelas}>{renderEstrelas(calcularMedia('nota_materiais'))}</span>
                      <span className={styles.valor}>{calcularMedia('nota_materiais')}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.listaAvaliacoes}>
                  {avaliacoesExibidas.map((avaliacao) => (
                    <div key={avaliacao.id_avaliacao} className={styles.avaliacaoCard}>
                      <div><strong>Nota Geral:</strong> {renderEstrelas(avaliacao.nota_geral)} {avaliacao.nota_geral}</div>
                      <div><strong>Acesso:</strong> {renderEstrelas(avaliacao.nota_acesso)} {avaliacao.nota_acesso}</div>
                      <div><strong>Horário:</strong> {renderEstrelas(avaliacao.nota_horario)} {avaliacao.nota_horario}</div>
                      <div><strong>Materiais:</strong> {renderEstrelas(avaliacao.nota_materiais)} {avaliacao.nota_materiais}</div>
                      {avaliacao.comentario && (
                        <div className={styles.comentario}>
                          <p>{avaliacao.comentario}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {avaliacoes.length > 3 && (
                  <div className={styles.botoesContainer}>
                    <button
                      className={styles.botaoLerMais}
                      onClick={() => setMostrarTodas(!mostrarTodas)}
                    >
                      {mostrarTodas ? 'Mostrar menos' : 'Ler mais'}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p>Nenhuma avaliação encontrada para este ponto.</p>
            )}

            {/* Botão de avaliação sempre visível */}
            <div className={styles.avaliarWrapper}>
              <Link to={`/avaliar/${id}`} className={styles.botaoAvaliar}>
                Avaliar este ponto
              </Link>
            </div>
          </>
        ) : (
          <p>Ponto não encontrado.</p>
        )}
      </div>
    </div>
  );
}
