import { useNavigate } from 'react-router-dom';

function LoginForm({ onEsqueciSenha }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você pode adicionar validação/autenticação real depois
    navigate('/Home');
  };

  return (
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

      <button onClick={handleLogin} className="btn-primary w-100 mb-3">
        Entrar
      </button>

      <p className="text-center">
        <button type="button" className="btn-link-clean" onClick={onEsqueciSenha}>
          Esqueceu a senha?
        </button>
      </p>
    </>
  );
}

export default LoginForm;
