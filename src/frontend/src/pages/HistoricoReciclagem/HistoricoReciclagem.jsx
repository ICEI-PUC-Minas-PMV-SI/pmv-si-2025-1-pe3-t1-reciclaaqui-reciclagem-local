// HistoricoReciclagem.jsx
import { useState } from 'react';
import Menu from '../../shared/Menu';
import './HistoricoReciclagem.css';
import guiaData from '../../data/HistoricoReciclagem.json';

export default function HistoricoReciclagem() {
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const abrirModal = (item) => {
    console.log("modal aberto com item:", item);
    setItemSelecionado(item);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setItemSelecionado(null);
  };

  return (
    <div className="container">
      <Menu />

      <section className="guia-header-box">
        <div className="guia-header-content">
          <i className="bi bi-recycle guia-icon"></i>
          <div>
            <h1 className="guia-titulo">Histórico de Reciclagem</h1>
            <p className="guia-subtitulo">
              Inclui indicadores como taxa de reciclagem, redução de resíduos e comparações temporais.
            </p>
          </div>
        </div>
      </section>

      <section className="guia-box">
        <div className="historico-grid">
          {guiaData.map((item, idx) => (
            <div className="item" key={idx} onClick={() => abrirModal(item)}>
              <img src={item.imagem} alt={item.nome} />
              <div className="item-content"> {/* Container para o texto */}
                <p className="item-descricao">{item.descricao}</p> 
                                <h3 className="item-titulo">{item.nome}</h3>

                 <p className="item-subdescricao">{item.subdescricao}</p>

              </div>
            </div>
          ))}
        </div>
        <p className="nota">
          Evite misturar resíduos orgânicos com recicláveis. Mantenha limpos os materiais recicláveis.
        </p>
      </section>

      {modalAberto && itemSelecionado && (
        <>
        <div className="overlay" onClick={fecharModal}></div>
        <div className="card-flutuante">
        <div className="card-header">
          <i className="bi bi-recycle me-2"></i> Recicla<strong>GUIA</strong>
        </div>
        <img src={itemSelecionado.imagem} alt={itemSelecionado.nome} className="card-image" />
        <p className="card-description">
          <i className="bi bi-info-circle me-2"></i>
          {itemSelecionado.descricao}
        </p>
        <button className="btn-secondary-wide mt-3" onClick={fecharModal}>
          <i className="bi bi-x-lg me-1"></i> Fechar
        </button>
      </div>


        </>
      )}
    </div>

    
  );

    <div className={styles['historico-grid']}>
  {guiaData.map((item, idx) => (
    <div className={styles.item} key={idx} onClick={() => abrirModal(item)}>
      <img src={item.imagem} alt={item.nome} className={styles['item-img']} />
    </div>
  ))}
</div>
}