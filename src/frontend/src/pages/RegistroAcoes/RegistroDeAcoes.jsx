import { useState, useRef } from 'react';
import Menu from '../../shared/Menu';
import './RegistroDeAcoes.css';

// Função para evitar problemas de fuso horário ao salvar datas
const parseLocalDate = (str) => {
  const [year, month, day] = str.split('-');
  return new Date(+year, +month - 1, +day);
};

export default function RegistroDeAcoes() {
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [formData, setFormData] = useState({
    pontoColeta: '',
    tipoMaterial: '',
    quantidade: '',
    dataInicial: '',
    dataFinal: '',
    foto: null,
    fotoPreview: null,
    comentario: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: '',
    show: false
  });
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setSubmitStatus({
        success: false,
        message: 'Por favor, selecione um arquivo de imagem (JPG, PNG)',
        show: true
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setSubmitStatus({
        success: false,
        message: 'A imagem deve ter menos de 5MB',
        show: true
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData(prev => ({
        ...prev,
        foto: file,
        fotoPreview: event.target.result
      }));
    };
    reader.onerror = () => {
      setSubmitStatus({
        success: false,
        message: 'Erro ao carregar a imagem',
        show: true
      });
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setFormData(prev => ({
      ...prev,
      foto: null,
      fotoPreview: null
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ ...submitStatus, show: false });

    try {
      let fotoBase64 = null;
      if (formData.foto) {
        fotoBase64 = await convertToBase64(formData.foto);
      }

      const payload = {
        ...formData,
        quantidade: Number(formData.quantidade),
        foto: fotoBase64,
        status: "pendente",
        dataRegistro: new Date().toISOString(),
        dataInicial: parseLocalDate(formData.dataInicial).toISOString(),
        dataFinal: formData.dataFinal ? parseLocalDate(formData.dataFinal).toISOString() : ''
      };

      const response = await fetch('http://localhost:10000/acoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Erro ao registrar ação');

      setSubmitStatus({
        success: true,
        message: 'Ação registrada com sucesso!',
        show: true
      });

      setFormData({
        pontoColeta: '',
        tipoMaterial: '',
        quantidade: '',
        dataInicial: '',
        dataFinal: '',
        foto: null,
        fotoPreview: null,
        comentario: ''
      });

      if (fileInputRef.current) fileInputRef.current.value = '';

    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || 'Erro ao registrar ação',
        show: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    });
  };

  // O restante do JSX permanece igual ao original
  return (
    <div className="registro-de-acoes-container">
      <Menu />
         <section className="registro-header-box">
        <div className="registro-header-content">
          <i className="bi bi-clipboard-check registro-icon"></i>
          <div>
            <h1 className="registro-titulo">Registro de Ações</h1>
            <p className="registro-subtitulo">
              Acompanhe todas as ações de reciclagem realizadas
            </p>
          </div>
        </div>
      </section>

      <section className="formulario-registro">
        <h2 className="form-titulo">Registrar Nova Ação</h2>
        
        {submitStatus.show && (
          <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-error'}`}>
            {submitStatus.message}
            <button 
              className="alert-close" 
              onClick={() => setSubmitStatus({ ...submitStatus, show: false })}
            >
              &times;
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="form-container">
          {/* Seção de Informações Básicas */}
          <div className="form-section">
            <h3 className="section-title">Informações Básicas</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Ponto de Coleta *</label>
                <input
                  type="text"
                  name="pontoColeta"
                  value={formData.pontoColeta}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Tipo de Material *</label>
                <select
                  name="tipoMaterial"
                  value={formData.tipoMaterial}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="plastico">Plástico</option>
                  <option value="papel">Papel</option>
                  <option value="vidro">Vidro</option>
                  <option value="metal">Metal</option>
                  <option value="organico">Orgânico</option>
                  <option value="eletronico">Eletrônico</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Quantidade (kg) *</label>
                <input
                  type="number"
                  name="quantidade"
                  min="0"
                  step="0.1"
                  value={formData.quantidade}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-row-group">
                <div className="form-group">
                  <label>Data Inicial *</label>
                  <input
                    type="date"
                    name="dataInicial"
                    value={formData.dataInicial}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Data Final</label>
                  <input
                    type="date"
                    name="dataFinal"
                    value={formData.dataFinal}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Foto e Comentários */}
          <div className="form-section">
            <h3 className="section-title">Mídia e Observações</h3>
            
            <div className="form-row">
              <div className="form-group photo-upload">
                <label>Foto da Ação (Opcional)</label>
                
                {formData.fotoPreview ? (
                  <div className="photo-preview-container">
                    <img 
                      src={formData.fotoPreview} 
                      alt="Preview" 
                      className="photo-preview"
                    />
                    <button 
                      type="button" 
                      className="remove-photo-btn"
                      onClick={handleRemovePhoto}
                    >
                      Remover Foto
                    </button>
                  </div>
                ) : (
                  <>
                    <input
                      type="file"
                      id="file-upload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="file-upload" className="file-upload-label">
                      <div className="upload-instructions">
                        <i className="bi bi-cloud-upload"></i>
                        <p>Clique para selecionar uma imagem</p>
                        <small>Formatos: JPG, PNG (Até 5MB)</small>
                      </div>
                    </label>
                  </>
                )}
              </div>
              
              <div className="form-group">
                <label>Comentários Adicionais</label>
                <textarea
                  name="comentario"
                  value={formData.comentario}
                  onChange={handleChange}
                  rows="5"
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Registrando...
                </>
              ) : (
                <>
                  <i className="bi bi-check-circle"></i>
                  Registrar Ação
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
