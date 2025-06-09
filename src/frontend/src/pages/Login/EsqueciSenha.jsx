function EsqueciSenha({ onVoltarLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Se este e-mail estiver cadastrado, enviaremos instruções.');
    onVoltarLogin();
  };

  return (
    <>
      <h4 className="mb-4">Recuperar senha</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-4">
          <span className="input-group-text">
            <i className="bi bi-envelope"></i>
          </span>
          <input type="email" className="form-control" placeholder="Digite seu e-mail" required />
        </div>
        <button type="submit" className="btn-primary w-100 mb-3">Enviar</button>
        <p className="text-center">
          <button className="btn-link-clean" type="button" onClick={onVoltarLogin}>
            Voltar ao login
          </button>
        </p>
      </form>
    </>
  );
}

export default EsqueciSenha;
