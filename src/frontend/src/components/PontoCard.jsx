import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PontoCard.css';

const coresMateriais = {
  papel: "#130da8",
  plástico: "#bd0202",
  metal: "#f0d002",
  vidro: "#198000",
  orgânico: "#8f3900",
  eletrônicos: "#6cd404",
  outros: "#ffffff"
  
  // adicionar mais!!!
};

const PontoCard = ({ nome, endereco, materiais = [], outros }) => {
  return (
    <div className="card mb-2">
      <div className="card-body p-2">
        <strong>{nome}</strong>
        <p className="mb-2 text-muted" style={{ fontSize: "0.9rem" }}>
          {endereco}
        </p>
        <div className="d-flex flex-wrap gap-2">
          {materiais.map((material, index) => {
            const cor = coresMateriais[material.toLowerCase()] || "#6c757d"; // cor padrão
            return (
              <div
                key={index}
                className="rounded-circle d-flex justify-content-center align-items-center"
                title={material}
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: cor,
                  color: "#fff",
                  fontSize: "18px",
                  cursor: "default"
                }}
              >
                <i className="bi bi-recycle"></i>
              </div>
            );
          })}
        </div>
        {outros && (
          <p className="mt-2 text-muted" style={{ fontSize: "0.85rem" }}>
            <strong>Outros:</strong> {outros}
          </p>
        )}
      </div>
    </div>
  );
};

export default PontoCard;
