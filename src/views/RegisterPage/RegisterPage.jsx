import React from 'react';
import { useNavigate } from "react-router-dom";
import { Lock, Mail, User, MapPin, Calendar, FileText } from 'lucide-react';
import campushm from '/src/assets/Campushm.png';
import './RegisterPage.css';

const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <div className="reg-container">
            <div className="reg-main-container">
                <div className="reg-form-panel">
                    <div className="reg-form-fir-content">
                        <div className="reg-form-logo">
                            <img src={campushm} alt="Campus" />
                            <h1>Camper Stories</h1>
                        </div>

                        <p>Cada historia tiene el poder de inspirar. Únete a Camper Stories y comparte la tuya con el mundo. Comparte tus logros, desafíos y sueños mientras te conectas con una comunidad apasionada por crecer y aprender juntos.</p>
                    </div>
                    <div className='reg-divider'></div>
                    <div className="reg-form-sec-content">
                        <form>
                            <div className="reg-form-group">
                                <User className="reg-input-icon" size={20} />
                                <input
                                    type="text"
                                    className="reg-form-input"
                                    placeholder="Nombre"
                                    required
                                />
                            </div>
                            <div className="reg-form-group">
                                <User className="reg-input-icon" size={20} />
                                <input
                                    type="text"
                                    className="reg-form-input"
                                    placeholder="Apellido"
                                    required
                                />
                            </div>
                            <div className="reg-form-group">
                                <FileText className="reg-input-icon" size={20} />
                                <input
                                    type="text"
                                    className="reg-form-input"
                                    placeholder="Número de documento"
                                    required
                                />
                            </div>
                            <div className="reg-form-group">
                                <Mail className="reg-input-icon" size={20} />
                                <input
                                    type="email"
                                    className="reg-form-input"
                                    placeholder="Correo electrónico"
                                    required
                                />
                            </div>
                            <div className="reg-form-group">
                                <Lock className="reg-input-icon" size={20} />
                                <input
                                    type="password"
                                    className="reg-form-input"
                                    placeholder="Contraseña"
                                    required
                                />
                            </div>
                            <div className="reg-form-group">
                                <Calendar className="reg-input-icon" size={20} />
                                <input
                                    type="number"
                                    className="reg-form-input"
                                    placeholder="Edad"
                                    required
                                />
                            </div>
                            <div className="reg-form-group">
                                <MapPin className="reg-input-icon" size={20} />
                                <input
                                    type="text"
                                    className="reg-form-input"
                                    placeholder="Ciudad"
                                    required
                                />
                            </div>
                            <button type="submit" className="reg-btn reg-btn-primary">Registrarse</button>
                            <button type="button" className="reg-btn reg-btn-google">
                                Continuar con Google
                            </button>
                        </form>
                        <div className="reg-toggle-form">
                            <button
                                className="reg-toggle-btn"
                                onClick={() => navigate('/campers/login')}
                            >¿Ya tienes una cuenta? Inicia sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
