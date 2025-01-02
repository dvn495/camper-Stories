import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from 'lucide-react';
import campushm from '/src/assets/Campushm.png';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  // const token = localStorage.getItem('token');

  // CREDENCIALES SIMULADAS PARA DESARROLLO

  // TRUE = AUTENTICADO
  // FALSE = SIN AUTENTICAR
  const token = false

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [token]);

  return (
    <div className="login-container">

      {/* Main Container */}
      <div className="main-container">
        {/* Form Panel */}
        <div className="form-panel">
          <div className='form-logo'>
            <img src={campushm} alt="Campus" />
            <h1>Camper Stories</h1>
          </div>

          <h2>¡Bienvenido de nuevo, Camper!</h2>

          <form>
            <div className="form-group">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                className="form-input"
                placeholder="Correo electrónico"
                required
              />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input
                type="password"
                className="form-input"
                placeholder="Contraseña"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            <button type="button" className="btn btn-google">
              Continuar con Google
            </button>
          </form>

          <div className="toggle-form">
            <button
              className="toggle-btn"
              onClick={() => navigate('/campers/register')}
            >
              ¿No tienes cuenta aún? Regístrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;