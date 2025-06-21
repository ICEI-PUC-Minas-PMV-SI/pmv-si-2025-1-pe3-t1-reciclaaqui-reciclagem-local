import { useEffect, useState } from 'react';
import Menu from '../../shared/Menu';
import './ListaPontos.css';
import pin from '../../../public/img/listaPontos/pin.png'
import pinR from '../../../public/img/listaPontos/pinR.png'
import { Link } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';



export default function ListaPontos() {
  const [busca, setBusca] = useState('');
  const [materiaisSelecionados, setMateriaisSelecionados] = useState([]);
  const [outrosFiltro, setOutrosFiltro] = useState('');
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const [localizacao, setLocalizacao] = useState(null);
  const [centroMapa, setCentroMapa] = useState([-19.9, -43.9]);
  const [pontos, setPontos] = useState([]);
  const [carregandoPontos, setCarregandoPontos] = useState(true);

  useEffect(() => {
  const carregarPontos = async () => {
    try {
      const res = await fetch("http://localhost:10000/pontos");
      const data = await res.json();
      setPontos(data);
    } catch (error) {
      console.error("Erro ao carregar pontos da API:", error);
    } finally {
      setCarregandoPontos(false);
    }
  };

  carregarPontos();
}, []);

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        };
        setLocalizacao(coords);
        setCentroMapa([coords.latitude, coords.longitude]); // agora sim!
      },
      (err) => {
        console.error("Erro ao obter localização:", err);
        setLocalizacao({ latitude: -19.9, longitude: -43.9 });
      }
    );
  }
}, []);

function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // raio da Terra em km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}



const voltarParaMinhaLocalizacao = () => {
  if (localizacao) {
    setCentroMapa([localizacao.latitude, localizacao.longitude]);
  } else {
    alert("Localização ainda não disponível.");
  }
};


  const materiaisFixos = [
    "Plástico",
    "Papel",
    "Vidro",
    "Metal",
    "Orgânico",
    "Eletrônicos",
    "Não-Recicláveis"
  ];

  const handleBuscaChange = (e) => setBusca(e.target.value);

  const handleOutrosChange = (e) => setOutrosFiltro(e.target.value);

  const toggleMaterial = (material) => {
    if (materiaisSelecionados.includes(material)) {
      setMateriaisSelecionados(materiaisSelecionados.filter(m => m !== material));
    } else {
      setMateriaisSelecionados([...materiaisSelecionados, material]);
    }
  };

  const handleFiltroClick = () => {
    setMostrarFiltro(!mostrarFiltro);
  };

const pontosFiltrados = pontos
  .filter((ponto) => {
    const nomeMatch = ponto.nome.toLowerCase().includes(busca.toLowerCase());

    const materiaisMatch =
      materiaisSelecionados.length === 0 ||
      materiaisSelecionados.every((m) => ponto.materiais.includes(m));

    const outrosMatch =
      outrosFiltro.trim() === "" ||
      (ponto.outros &&
        ponto.outros.toLowerCase().includes(outrosFiltro.toLowerCase()));

    return nomeMatch && materiaisMatch && outrosMatch;
  })
  .map((ponto) => {
    // Calcula a distância para cada ponto
    const distancia = localizacao
      ? calcularDistanciaKm(
          localizacao.latitude,
          localizacao.longitude,
          ponto.latitude,
          ponto.longitude
        )
      : null;

    return { ...ponto, distancia };
  })
  .sort((a, b) => {
    if (a.distancia === null) return 1;
    if (b.distancia === null) return -1;
    return a.distancia - b.distancia; // ordena do menor para o maior
  });


  const corPorMaterial = {
  "Plástico": "#FF9800",
  "Papel": "#2196F3",
  "Vidro": "#4CAF50",
  "Metal": "#9C27B0",
  "Orgânico": "#795548",
  "Eletrônicos": "#607D8B",
  "Não-Recicláveis": "#F44336"
  };

  function MoverMapa({ centro }) {
  const map = useMap();
  useEffect(() => {
    if (centro) {
      map.setView(centro, 15); // nível de zoom 15
    }
  }, [centro]);
  return null;
  }


  if (carregandoPontos) {
  return (
    <>
      <Menu />
      <div style={{ padding: "2rem" }}>Carregando pontos de coleta...</div>
    </>
  );
  }
  return (
    <>
      <Menu />
      <div className="lista-pontos-container">
        <div className="lista-sidebar">
          <div className="lista-header">
            <i className="bi bi-house-door-fill"></i>
            <h2>Pontos de Coleta</h2>
          </div>

          <div className="lista-pesquisa">
            <input
              placeholder="Pesquisar por nome..."
              value={busca}
              onChange={handleBuscaChange}
            />
            <button onClick={handleFiltroClick}>
              <i className="bi bi-funnel"></i> Filtrar
            </button>
          </div>

          {mostrarFiltro && (
            <div className="filtros-materiais">
              <p>Filtrar por materiais recicláveis:</p>
              {materiaisFixos.map((material) => (
                <label key={material} style={{ display: 'block' }}>
                  <input
                    type="checkbox"
                    checked={materiaisSelecionados.includes(material)}
                    onChange={() => toggleMaterial(material)}
                  />
                  {material}
                </label>
              ))}

              <p style={{ marginTop: '1rem' }}>Buscar em “outros” materiais:</p>
              <input
                type="text"
                placeholder="Ex: baterias, óleo..."
                value={outrosFiltro}
                onChange={handleOutrosChange}
              />
            </div>
          )}

          <button
          className='btn_centralizar'
          onClick={voltarParaMinhaLocalizacao}
        >
          <i className="bi bi-crosshair"></i>
        </button>
        <a className='btn_cadastrar' href='/pontos-de-coleta/cadastrar'>
        <i className="bi bi-clipboard2-plus-fill"></i>
          Cadastrar um ponto
        </a>


          <div className="lista-cartoes">
            {pontosFiltrados.map((ponto, idx) => {
              const distancia = localizacao
                ? calcularDistanciaKm(
                    localizacao.latitude,
                    localizacao.longitude,
                    ponto.latitude,
                    ponto.longitude
                  ).toFixed(2)
                : null;

              return (
                <div
                  key={idx}
                  className="lista-cartao"
                  onClick={() => setCentroMapa([ponto.latitude, ponto.longitude])}
                >
                  <div className="nome">
                    {ponto.nome}{" "}
                    {distancia && <span>({distancia}km)</span>}
                  </div>
                  <div className="endereco">{ponto.endereco}</div>

                  <div className="materiais">
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      {ponto.materiais.map((m, i) => (
                        <li
                          key={i}
                          style={{
                            color: "white",
                            backgroundColor: corPorMaterial[m] || "#888",
                            display: "inline-block",
                            margin: "0.25rem",
                            padding: "0.3rem 0.6rem",
                            borderRadius: "0.5rem",
                            fontSize: "0.85rem",
                          }}
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {ponto.outros && (
                    <div className="outros">
                      <small>
                        <strong>Outros materiais:</strong> {ponto.outros}
                      </small>
                    </div>
                  )}

                  <Link to={`/listar-avaliacoes/${ponto.id}`} className="botao-avaliacao">
                    <i className="bi bi-star-fill"></i> Avaliações
                  </Link>
                </div>
              );
            })}

          </div>
        </div>

        <div className="lista-mapa">
  <MapContainer center={centroMapa} zoom={13} style={{ height: "100%", width: "100%" }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    />
    {pontos
  .filter(p => p.latitude && p.longitude)
  .map((ponto, i) => (
    <Marker
      key={i}
      position={[Number(ponto.latitude), Number(ponto.longitude)]}
        icon={L.icon({
          iconUrl: pinR,
          iconSize: [40, 40],
          iconAnchor: [12, 41]
        })}
      />
    ))}
    <MoverMapa centro={centroMapa} />
    {localizacao && (
  <Marker
    position={[localizacao.latitude, localizacao.longitude]}
    icon={L.icon({
      iconUrl: pin,
      iconSize: [35, 35],
      iconAnchor: [12, 41]
    })}
  />
)}

  </MapContainer>
</div>

      </div>
    </>
  );
}
