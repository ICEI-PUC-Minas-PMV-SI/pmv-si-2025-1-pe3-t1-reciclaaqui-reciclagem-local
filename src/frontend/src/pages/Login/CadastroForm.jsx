function CadastroForm({ onVoltarLogin }) {
  return (
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
        <input type="password" className="form-control" placeholder="Confirmar senha" />
      </div>

      <button className="btn-secondary-wide mb-3">Cadastrar</button>

      <p className="text-center mt-3">
        Já tem uma conta?{' '}
    <button type="button" className="btn-link-clean" onClick={onVoltarLogin}>
  Fazer login
</button>



      </p>
    </>
  );
}

export default CadastroForm;
