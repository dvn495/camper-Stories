import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../services/Auth/AuthService";
import cslogo from '../../assets/CampusLogoVertical.png';
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    document.title = 'The Campers Story | Login';
    if (token) {
      navigate('/home');
    }
  }, [token, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(email, password);
      console.log("Inicio de sesión exitoso");
      navigate('/home');
    } catch (err) {
      setError("Error al iniciar sesión. Por favor, intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-image-container">
          <img src={cslogo} alt="Login Logo" className="auth-image" />
        </div>
        <div className="auth-form-container">
          <h2 className="auth-title">Iniciar sesión</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-input-group">
              <label htmlFor="email">Correo electrónico</label>
              <input 
                id="email" 
                placeholder="tu@ejemplo.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                type="email" 
              />
            </div>
            <div className="auth-input-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                type="password" 
              />
            </div>
            <button className="auth-button" type="submit" disabled={loading}>
              {loading ? "Cargando..." : "Iniciar sesión"}
            </button>
            {error && <p className="auth-error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
