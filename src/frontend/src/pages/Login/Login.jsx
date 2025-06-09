import { useState } from 'react';
import './Login.css';
import LoginForm from './LoginForm';
import CadastroForm from './CadastroForm';
import EsqueciSenha from './EsqueciSenha';


function Login() {
  const [modoCadastro, setModoCadastro] = useState(false);
  const [modoEsqueciSenha, setModoEsqueciSenha] = useState(false);


  const alternarModo = () => {
    setModoCadastro(!modoCadastro);
  };

return (
  <div className="login-container">
    <div className="login-box">
      <img src="/img/logo.png" alt="Logo ReciclaAqui" className="logo-login" />
      
      {modoEsqueciSenha ? (
        <EsqueciSenha onVoltarLogin={() => setModoEsqueciSenha(false)} />
      ) : modoCadastro ? (
        <CadastroForm onVoltarLogin={() => setModoCadastro(false)} />
      ) : (
        <>
          <LoginForm onEsqueciSenha={() => setModoEsqueciSenha(true)} />
          <div className="divider d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2">Ou</span>
            <hr className="flex-grow-1" />
          </div>
          <button className="btn-secondary w-100" onClick={() => setModoCadastro(true)}>
            Cadastre-se
          </button>
        </>
      )}
    </div>
  </div>
);


}

export default Login;
