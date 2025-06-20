import { useEffect, useState } from "react";
import Menu from '../../shared/Menu';
import "./Perfil.css";

const ProfilePage = () => {
  const [usuario, setUsuario] = useState(null);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuarioLogado) {
      setUsuario(usuarioLogado);
      setEmail(usuarioLogado.email);
      if (usuarioLogado.imagem) {
        setProfileImage(usuarioLogado.imagem);
      }
    }
  }, []);

  const converterParaBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await converterParaBase64(file);
      setProfileImage(base64);
    }
  };

  const handleSave = async () => {
    if (newPassword && newPassword !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!usuario) {
      alert("Usuário não encontrado.");
      return;
    }

    const dadosAtualizados = {
      email,
      ...(newPassword && { senha: newPassword }),
      ...(profileImage && { imagem: profileImage }),
    };

    try {
      const resposta = await fetch(`http://localhost:10000/usuarios/${usuario.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosAtualizados),
      });

      if (resposta.ok) {
        const usuarioAtualizado = await resposta.json();
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));
        alert("Alterações salvas com sucesso!");
      } else {
        alert("Erro ao salvar as alterações.");
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro na comunicação com o servidor.");
    }
  };

  return (
    <>
      <Menu />
      <div className="container profile-container">
        <div className="input-group">
          <input
            type="email"
            placeholder="Trocar endereço de email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="bi bi-pen-fill input-icon"></i>
        </div>

        <div className="avatar-section">
          <div className="avatar">
            {profileImage ? (
              <img src={profileImage} alt="Perfil" />
            ) : (
              <div className="default-avatar">
                <i className="bi bi-leaf"></i>
              </div>
            )}
          </div>

          <label className="upload-label">
            <i className="bi bi-upload"></i> Carregar nova foto de perfil
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
            />
          </label>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Redefinir senha"
            className="input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <i className="bi bi-pen-fill input-icon"></i>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Confirmar nova senha"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSave} className="btn-secondary-wide">
          <i className="bi bi-check-circle me-1"></i> Salvar alterações
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
