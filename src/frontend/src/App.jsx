import { Routes, Route } from 'react-router-dom';
import {
  Login,
  Perfil,
  Home,
  GuiaReciclagem,
  Ranking,
  PontosDeColeta,
  HistoricoReciclagem,
  News,
  RegistroAcoes
} from './index.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import DetalharPonto from './pages/DetalharPonto';
//import CadastrarPonto from './pages/CadastrarPonto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/guia-reciclagem" element={<GuiaReciclagem />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/pontos-de-coleta/*" element={<PontosDeColeta />} />
      <Route path="/historico-reciclagem/" element={<HistoricoReciclagem />} />
      <Route path="/registro-de-acoes" element={<RegistroAcoes />} />
      <Route path="/home" element={<Home />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
