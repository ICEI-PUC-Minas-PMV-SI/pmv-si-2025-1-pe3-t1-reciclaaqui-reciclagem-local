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

      <section className="guia-box">
        <div className="grid">
          {guiaData.map((item, idx) => (
            <div className="item" key={idx} onClick={() => abrirModal(item)}>
              <img src={item.imagem} alt={item.nome} />
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
}