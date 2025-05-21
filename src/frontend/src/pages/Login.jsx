import './Login.css';
import logo from '../img/logo.png';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <img className='logo' src={logo} alt="Logo ReciclaAqui" />
        <input type="text" placeholder="Login" className="input" />
        <input type="password" placeholder="Senha" className="input" />

        <div className="options">
          <label>
            <input type="checkbox" /> Manter conectado.
          </label>
        </div>

        <button className="btn-green">Entrar</button>

        <p className="forgot">Esqueceu a senha?</p>

        <div className="divider">
          <hr /> <span>Ou</span> <hr />
        </div>

        <button className="btn-blue">Cadastre-se</button>
      </div>
    </div>
  );
}

export default Login;
