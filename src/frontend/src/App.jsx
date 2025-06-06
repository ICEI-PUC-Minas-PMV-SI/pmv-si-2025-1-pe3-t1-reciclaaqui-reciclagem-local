import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import ConteudoInformativo from './pages/Conteudo-informativo';
import ConteudoPersonalizado from './pages/Conteudo-personalizado';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import DetalharPonto from './pages/DetalharPonto';
import CadastrarPonto from './pages/CadastrarPonto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/Conteudo-informativo" element={<ConteudoInformativo />} /> 
        <Route path="/Conteudo-personalizado" element={<ConteudoPersonalizado />} /> 
        <Route path="/detalhar-ponto" element={<DetalharPonto />} />
        <Route path="/cadastrar-ponto" element={<CadastrarPonto />} />
      </Routes>
    </Router>
  );
}

export default App;