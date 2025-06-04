import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useLoadScript } from '@react-google-maps/api';
import './CadastrarPonto.css';
import logo from '../img/logo.png';

const CadastrarPonto = () => {
  const [form, setForm] = useState({
    nome: '',
    endereco: '',
    descricao: '',
    materiais: [],
    outros: '',
    imagem: null,
    latitude: '',
    longitude: ''
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const materiaisPossiveis = ['Plástico', 'Papel', 'Vidro', 'Metal', 'Orgânico', 'Eletrônicos', 'Não-Recicláveis', 'Outros'];

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);

    setForm((prev) => ({
      ...prev,
      endereco: value,
      latitude: lat,
      longitude: lng
    }));
  };

  const handleMaterialChange = (material) => {
    setForm((prev) => {
      const materiais = prev.materiais.includes(material)
        ? prev.materiais.filter((m) => m !== material)
        : [...prev.materiais, material];
      return { ...prev, materiais };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ponto = {
      nome: form.nome,
      endereco: form.endereco,
      descricao: form.descricao,
      materiais: form.materiais,
      outros: form.outros,
      imagem: form.imagem?.name || '',
      latitude: form.latitude,
      longitude: form.longitude
    };

    try {
      const res = await fetch('https://quasar-swanky-responsibility.glitch.me/pontos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ponto)
      });

      if (res.ok) {
        alert('Ponto cadastrado com sucesso!');
        setForm({
          nome: '',
          endereco: '',
          descricao: '',
          materiais: [],
          outros: '',
          imagem: null,
          latitude: '',
          longitude: ''
        });
      } else {
        alert('Erro ao cadastrar ponto.');
      }
    } catch (err) {
      console.error(err);
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="container">
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

      <h2 style={{ paddingTop: '1rem' }}>Cadastrar Ponto de Coleta</h2>
      <form onSubmit={handleSubmit} className="formulario-ponto">
        <div className="inputs-topo">
          <input
            type="text"
            placeholder="Nome do ponto de coleta"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            required
          />

          {isLoaded ? (
            <PlacesAutocomplete
              value={form.endereco}
              onChange={(value) => setForm({ ...form, endereco: value })}
              onSelect={handleSelect}
              searchOptions={{ componentRestrictions: { country: ['br'] } }}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="autocomplete-wrapper">
                  <input
                    {...getInputProps({
                      placeholder: 'Endereço',
                      className: 'autocomplete-input',
                      required: true
                    })}
                  />
                  {suggestions.length > 0 && (
                    <div className="autocomplete-dropdown">
                      {loading && <div>Carregando...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? 'suggestion-active'
                          : 'suggestion';
                        return (
                          <div
                            key={suggestion.placeId}
                            {...getSuggestionItemProps(suggestion, { className })}
                          >
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </PlacesAutocomplete>
          ) : (
            <input
              type="text"
              placeholder="Endereço"
              value={form.endereco}
              onChange={(e) => setForm({ ...form, endereco: e.target.value })}
              required
            />
          )}
        </div>

        <textarea
          placeholder="Descrição do Ponto"
          value={form.descricao}
          onChange={(e) => setForm({ ...form, descricao: e.target.value })}
        />

        <p>Materiais reciclados no ponto:</p>
        <div className="checkbox-wrapper">
          {materiaisPossiveis.map((material) => (
            <label key={material} className="form-check-label">
              <input
                type="checkbox"
                checked={form.materiais.includes(material)}
                onChange={() => handleMaterialChange(material)}
                className="form-check-input"
              />
              {material}
            </label>
          ))}
        </div>

        {form.materiais.includes('Outros') && (
          <input
            type="text"
            placeholder="Especificar"
            value={form.outros}
            onChange={(e) => setForm({ ...form, outros: e.target.value })}
          />
        )}

        <input
          type="file"
          onChange={(e) => setForm({ ...form, imagem: e.target.files[0] })}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarPonto;
