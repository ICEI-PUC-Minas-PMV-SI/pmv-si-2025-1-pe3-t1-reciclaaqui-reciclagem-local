import { Routes, Route } from 'react-router-dom';
import Menu from '../../shared/Menu';
import ListaPontos from './ListaPontos';
import CadastrarPonto from './CadastrarPonto';
import PontosDeColetaSubMenu from './PontosDeColetaSubMenu';

export default function PontosDeColeta() {
  return (
    <Routes>
      <Route path="/" element={<ListaPontos />} />
      <Route path="lista-pontos" element={<ListaPontos />} />
      <Route path="cadastrar" element={<CadastrarPonto />} />
    </Routes>
  );
}
