import { useEffect, useState, useRef } from "react";
import { buscarPontos } from "../services/pontosService";
import logo from '../img/logo.png';
import './CadastrarPonto.css';
import PontoCard from "../components/PontoCard";

const DetalharPonto = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showFiltros, setShowFiltros] = useState(false);
  const [pontos, setPontos] = useState([]);
  const [loadingP, setLoadingP] = useState(true);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroMateriais, setFiltroMateriais] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [erroGeolocalizacao, setErroGeolocalizacao] = useState("");
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markersRef = useRef({});
  const userMarkerRef = useRef(null);
  const infoWindowRef = useRef(null);

  useEffect(() => {
    async function carregar() {
      setLoadingP(true);
      const dados = await buscarPontos();
      setPontos(dados);
      setLoadingP(false);
    }

    carregar();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.warn("Erro ao obter localização:", error);
          setErroGeolocalizacao("Não foi possível obter sua localização automaticamente.");
        },
        { enableHighAccuracy: true }
      );
    } else {
      setErroGeolocalizacao("Seu navegador não suporta geolocalização.");
    }
  }, []);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.onload = () => {
        if (userLocation && mapRef.current && window.google) {
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: userLocation.latitude, lng: userLocation.longitude },
            zoom: 14,
          });
          googleMapRef.current = map;
          infoWindowRef.current = new window.google.maps.InfoWindow();
        }
      };
      document.body.appendChild(script);
    };

    if (!window.google && userLocation) {
      loadGoogleMapsScript();
    } else if (window.google && userLocation && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: userLocation.latitude, lng: userLocation.longitude },
        zoom: 14,
      });
      googleMapRef.current = map;
      infoWindowRef.current = new window.google.maps.InfoWindow();
    }
  }, [userLocation]);

  useEffect(() => {
    if (googleMapRef.current && window.google && userLocation) {
      if (userMarkerRef.current) userMarkerRef.current.setMap(null);
      userMarkerRef.current = new window.google.maps.Marker({
        position: { lat: userLocation.latitude, lng: userLocation.longitude },
        map: googleMapRef.current,
        title: "Você está aqui",
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#3367d6",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "white",
        },
      });
    }
  }, [userLocation]);

  useEffect(() => {
    if (googleMapRef.current && window.google) {
      Object.values(markersRef.current).forEach((marker) => marker.setMap(null));
      markersRef.current = {};

      pontos.forEach((ponto) => {
        const marker = new window.google.maps.Marker({
          position: { lat: ponto.latitude, lng: ponto.longitude },
          map: googleMapRef.current,
          title: ponto.nome,
          icon: {
            url: "https://i.ibb.co/7JbpcgYd/recycling-point.png",
            scaledSize: new window.google.maps.Size(32, 32),
          },
        });

        marker.addListener("click", () => mostrarInfoWindow(ponto, marker));

        markersRef.current[ponto.id] = marker;
      });
    }
  }, [pontos]);

  function mostrarInfoWindow(ponto, marker) {
    const conteudo = `
      <div style="font-family: Arial; max-width: 200px;">
        <h6 style="margin: 0 0 6px 0; color: #047857; font-weight: bold;">${ponto.nome}</h6>
        <p style="margin: 0 0 6px 0; font-size: 12px;">${ponto.endereco}</p>
        <ul style="padding-left: 16px; font-size: 12px; margin: 0 0 8px 0;">
          ${(ponto.materiais || []).map((m) => `<li>${m}</li>`).join('')}
        </ul>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <button style="padding: 4px 8px; font-size: 12px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">Avaliar esse ponto</button>
          <button style="padding: 4px 8px; font-size: 12px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Registrar Ação</button>
        </div>
      </div>
    `;

    infoWindowRef.current.setContent(conteudo);
    infoWindowRef.current.open(googleMapRef.current, marker);
  }

  function alternarMaterial(material) {
    setFiltroMateriais(prev => 
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  }

  function calcularDistancia(lat1, lon1, lat2, lon2) {
    const toRad = (val) => (val * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  const pontosFiltrados = [...pontos.filter((ponto) => {
    const nomeCondiz = ponto.nome.toLowerCase().includes(filtroNome.toLowerCase());
    const materiaisDoPonto = ponto.materiais || [];
    const materiaisCondizem = filtroMateriais.length === 0 || filtroMateriais.every(mat => materiaisDoPonto.includes(mat));
    return nomeCondiz && materiaisCondizem;
  })];

  if (userLocation) {
    pontosFiltrados.sort((a, b) => {
      const distA = calcularDistancia(userLocation.latitude, userLocation.longitude, a.latitude, a.longitude);
      const distB = calcularDistancia(userLocation.latitude, userLocation.longitude, b.latitude, b.longitude);
      return distA - distB;
    });
  }

  const materiaisUnicos = [...new Set(pontos.flatMap(p => p.materiais || []))];
  
  function focarNoMapa(pontoId) {
    const marker = markersRef.current[pontoId];
    const ponto = pontos.find(p => p.id === pontoId);
    if (marker && googleMapRef.current && ponto) {
      googleMapRef.current.panTo(marker.getPosition());
      googleMapRef.current.setZoom(16);
      mostrarInfoWindow(ponto, marker);
      if (window.innerWidth <= 768) {
        setShowSidebar(false);
      }
    }
  }

  return (
    <div className="page_detalhar">
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <img src={logo} alt="ReciclaAqui Logo" className="logo-img" />
          </div>
        </div>
        <nav className="nav-links">
          <a href="#" className="nav-link">👤 Perfil</a>
          <a href="#" className="nav-link">🏆 Meu Ranking</a>
          <a href="#" className="nav-link">📍 Pontos de Coleta</a>
        </nav>
      </header>

      <button className={`lista_btn shadow-sm ${showSidebar ? "lbtn_on" : "lbtn_off"}`} onClick={() => setShowSidebar(!showSidebar)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className={`lista_pontos shadow-lg ${showSidebar ? "lista_on" : "lista_off"}`}>
        <div className="lista_pontos_row1">
          <h2 className="lista_pontos_ttl">Pontos de Coleta</h2>
        </div>
        <button onClick={() => setShowFiltros(!showFiltros)} className={`btn ${showFiltros ? "btn-secondary" : "btn_filtro_off"} btn_filtro d-flex gap-3`}>
          <i className="bi bi-filter"></i>
          Filtrar
        </button>
        <div className={`filtro ${showFiltros ? "filtro_on" : "filtro_off"}`}>
          <div className="px-3 pb-3">
            {erroGeolocalizacao && (
              <div className="alert alert-warning" role="alert">
                {erroGeolocalizacao}
              </div>
            )}

            <input
              type="text"
              className="form-control mb-2"
              placeholder="Buscar por nome"
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
            />

            <div className="mb-2">
              {materiaisUnicos.map((mat, idx) => (
                <div className="form-check" key={idx}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`check-${mat}`}
                    checked={filtroMateriais.includes(mat)}
                    onChange={() => alternarMaterial(mat)}
                  />
                  <label className="form-check-label" htmlFor={`check-${mat}`}>
                    {mat}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {loadingP ? (
            <div className="d-flex justify-content-center py-3">
              <div className="spinner-border" role="status" />
            </div>
          ) : (
            pontosFiltrados.map((ponto) => (
              <div key={ponto.id} onClick={() => focarNoMapa(ponto.id)} style={{ cursor: 'pointer' }}>
                <PontoCard
                  nome={ponto.nome}
                  endereco={ponto.endereco}
                  materiais={ponto.materiais}
                  outros={ponto.outros}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <div id="map" ref={mapRef} style={{ flex: 1 }}></div>
    </div>
  );
};

export default DetalharPonto;
