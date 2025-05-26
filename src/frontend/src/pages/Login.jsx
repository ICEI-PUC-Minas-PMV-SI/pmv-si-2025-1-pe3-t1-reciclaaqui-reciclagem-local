import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../img/logo.png';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/perfil');
  };
  const [modoCadastro, setModoCadastro] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <img className='logo' src={logo} alt="Logo ReciclaAqui" />

        {!modoCadastro ? (
          <>
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input type="text" className="form-control" placeholder="Login" />
            </div>

            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input type="password" className="form-control" placeholder="Senha" />
            </div>

            <div className="options mb-4">
              <label>
                <input type="checkbox" /> Manter conectado.
              </label>
            </div>
          
            <button onClick={handleLogin}
            className="btn-green w-100 mb-3">Entrar</button>

            <p className="forgot text-center">Esqueceu a senha?</p>

            <div className="divider d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2">Ou</span>
              <hr className="flex-grow-1" />
            </div>

            <button className="btn-blue w-100" onClick={() => setModoCadastro(true)}>
              Cadastre-se
            </button>
          </>
        ) : (
          <>
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input type="text" className="form-control" placeholder="Email" />
            </div>

            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input type="password" className="form-control" placeholder="Senha" />
            </div>
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input type="password" className="form-control" placeholder="Cofirmar senha" />
            </div>

            <button className="btn-blue2 w-100 mb-3">Cadastrar</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
