import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onEsqueciSenha }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleLogin = async () => {
    try {
      const resposta = await fetch('http://localhost:3001/usuarios');
      const usuarios = await resposta.json();

      const usuarioEncontrado = usuarios.find(
        (u) => u.email === email && u.senha === senha
      );

      if (usuarioEncontrado) {
        setSucesso(true); 
        setTimeout(() => {
          navigate('/Home');
        }, 1000); 
      } else {
        alert('E-mail ou senha inválidos.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <>
      {sucesso ? (
        <div className="text-center animate__animated animate__fadeIn">
          <h3 style={{ color: 'green' }}>Login realizado com sucesso!</h3>
          <div style={{ fontSize: '4rem' }}>✅</div>
        </div>
      ) : (
        <>
          <div className="input-group mb-4">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group mb-4">
            <span className="input-group-text">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
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
      )}
    </>
  );
}

export default LoginForm;
