import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Perfil.css";

const ProfilePage = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        if (newPassword !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        alert("Alterações salvas!");
    };

    return (
        <div className="profile-container">
            <button className="back-button">
                <i className="bi bi-arrow-left"></i>
            </button>

            <div className="input-group">
                <input
                    type="email"
                    placeholder="Trocar endereço de email"
                    className="input"
                />
                <i className="bi bi-pen-fill input-icon"></i>
            </div>

            <div className="avatar-section">
                <div className="avatar">
                    {profileImage ? (
                        <img src={profileImage} alt="Perfil" />
                    ) : (
                        <div className="default-avatar">🌱</div>
                    )}
                </div>
                <label className="upload-label">
                    <i className="bi bi-upload"></i> Carregar nova foto de perfil
                    <input
                        type="file"
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

            <button onClick={handleSave} className="save-button">
                Salvar alterações
            </button>
        </div>
    );
};

export default ProfilePage;
