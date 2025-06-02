import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import ConteudoInformativo from './pages/Conteudo-informativo';
import ConteudoPersonalizado from './pages/Conteudo-personalizado';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/Conteudo-informativo" element={<ConteudoInformativo />} /> 
        <Route path="/Conteudo-personalizado" element={<ConteudoPersonalizado />} /> 
      </Routes>
    </Router>
  );
}

export default App;