// GuiaReciclagem.jsx
import { useState } from 'react';
import Menu from '../../shared/Menu';
import './GuiaReciclagem.css';
import guiaData from '../../data/guiaReciclagem.json';

export default function GuiaReciclagem() {
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
              <h1 className="guia-titulo">Guia de Reciclagem</h1>
              <p className="guia-subtitulo">
                Aprenda a separar corretamente seus resíduos e contribuir com o meio ambiente.
              </p>
            </div>
          </div>
        </section>

      <section className="guia-grid">
          {guiaData.map((item, idx) => (
            <div className="item" key={idx} onClick={() => abrirModal(item)}>
              <img src={item.imagem} alt={item.nome} />
              <div className="item-content">
                <h3 className="item-titulo">{item.nome}</h3>
              </div>
            </div>
          ))}         
</section>
 <p className="nota-teste">
          Saiba mais sobre o histórico de reciclagem e como ele pode ajudar a melhorar a sustentabilidade.
        </p>
    {modalAberto && itemSelecionado && (
  <div className="modal-overlay" onClick={fecharModal}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="fechar-modal-btn" onClick={fecharModal}>
        <i className="bi bi-x-lg"></i>
      </button>
      <img
        src={itemSelecionado.imagem}
        alt={itemSelecionado.nome}
        className="modal-imagem"
      />
      <h2>{itemSelecionado.nome}</h2>
      <p>{itemSelecionado.descricao}</p>
    </div>
  </div>
)}


      
    </div>
  );
}