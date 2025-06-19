import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from '../../shared/Menu';
import styles from './Avaliacoes.module.css';

export default function Avaliacoes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id_ponto: id || '',
    nota_geral: 0,
    nota_acesso: 0,
    nota_horario: 0,
    nota_materiais: 0,
    comentario: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (ratingValue, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: ratingValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const avaliacaoCompleta = {
      ...formData,
      id_avaliacao: Date.now().toString(),
      id_ponto: id || 'ponto-sem-id'
    };

    try {
      console.log('Enviando avaliação:', avaliacaoCompleta);
      const response = await fetch('http://localhost:10000/avaliacoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(avaliacaoCompleta),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => navigate(-1), 2000);
      }
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.container}>
        <Menu />
        <div className={styles.mainContent}>
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h2>Avaliação enviada!</h2>
            <p>Obrigado por contribuir com sua opinião.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Menu />
      
      <div className={styles.mainContent}>
        <div className={styles.formContainer}>
          <button 
            onClick={() => navigate(-1)}
            className={styles.backButton}
          >
            <span className={styles.arrowIcon}>←</span> Voltar
          </button>
          
          <h1 className={styles.formTitle}>Avaliar Ponto de Coleta</h1>
          
          <form onSubmit={handleSubmit} className={styles.avaliacaoForm}>
            <RatingField 
              label="Nota Geral"
              value={formData.nota_geral}
              onChange={(value) => handleRatingChange(value, 'nota_geral')}
              styles={styles}
              required
            />
            
            <RatingField 
              label="Facilidade de Acesso"
              value={formData.nota_acesso}
              onChange={(value) => handleRatingChange(value, 'nota_acesso')}
              styles={styles}
            />
            
            <RatingField 
              label="Horário de Funcionamento"
              value={formData.nota_horario}
              onChange={(value) => handleRatingChange(value, 'nota_horario')}
              styles={styles}
            />
            
            <RatingField 
              label="Variedade de Materiais Aceitos"
              value={formData.nota_materiais}
              onChange={(value) => handleRatingChange(value, 'nota_materiais')}
              styles={styles}
            />

            <div className={styles.formGroup}>
              <label htmlFor="comentario" className={styles.formLabel}>
                Comentário (opcional)
              </label>
              <textarea
                id="comentario"
                name="comentario"
                rows="3"
                value={formData.comentario}
                onChange={handleChange}
                className={styles.formTextarea}
                placeholder="Deixe seu comentário sobre o ponto de coleta..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formData.nota_geral === 0 || isLoading}
              className={`${styles.submitButton} ${
                formData.nota_geral === 0 || isLoading ? styles.submitButtonDisabled : ''
              }`}
            >
              {isLoading ? 'Enviando...' : 'Enviar Avaliação'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Componente auxiliar para campos de avaliação por estrelas
function RatingField({ label, value, onChange, styles }) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.formLabel}>{label}</label>
      <div className={styles.ratingStars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={`${label}-${star}`}
            type="button"
            onClick={() => onChange(star)}
            className={`${styles.starButton} ${
              star <= value ? styles.starButtonActive : ''
            }`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}