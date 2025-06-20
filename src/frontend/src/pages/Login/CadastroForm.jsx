import { useState } from "react";
function CadastroForm({ onVoltarLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const novoUsuario = {
      email,
      senha,
    };

    try {
      const resposta = await fetch("http://localhost:10000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      });

      if (resposta.ok) {
        alert("Usuário cadastrado com sucesso!");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
      } else {
        alert("Erro ao cadastrar.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro na conexão com o servidor.");
    }
  };
  return (
    <>
      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="bi bi-person"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
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

      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="bi bi-lock"></i>
        </span>
         <input
          type="password"
          className="form-control"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
      </div>

     <button className="btn-secondary-wide mb-3" onClick={handleCadastro}>
        Cadastrar
      </button>

      <p className="text-center mt-3">
        Já tem uma conta?{" "}
        <button
          type="button"
          className="btn-link-clean"
          onClick={onVoltarLogin}
        >
          Fazer login
        </button>
      </p>
    </>
  );
}

export default CadastroForm;
