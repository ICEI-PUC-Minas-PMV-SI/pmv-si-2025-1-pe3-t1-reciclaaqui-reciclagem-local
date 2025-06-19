// src/services/api.js
export const getPontos = () => fetch('/api/pontos').then(res => res.json());

export const postAcao = (data) => 
  fetch('/api/acoes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });