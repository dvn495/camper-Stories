import { useState } from 'react';
import './styles/DonationForm.css';
import { endpoints } from '../../services/apiConfig';

export default function DonationForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [notification, setNotification] = useState({
        show: false,
        type: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const showNotification = (type, message) => {
        setNotification({
            show: true,
            type,
            message
        });
        // Ocultar la notificación después de 5 segundos
        setTimeout(() => {
            setNotification({
                show: false,
                type: '',
                message: ''
            });
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(endpoints.sponsors, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            
            if (response.ok) {
                showNotification('success', '¡Gracias! Tu información ha sido enviada exitosamente.');
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                showNotification('error', 'Hubo un error al enviar tu información. Por favor intenta de nuevo.');
            }
        } catch (error) {
            showNotification('error', 'Error de conexión. Por favor verifica tu conexión a internet e intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="form-card">
            {notification.show && (
                <div className={`notification ${notification.type}`}>
                    {notification.message}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="form">
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">
                            Nombre <span className="required">*</span>
                        </label>
                        <input
                            className="form-input"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Apellido <span className="required">*</span>
                        </label>
                        <input
                            className="form-input"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            placeholder="Tu apellido"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">
                            Correo Electrónico <span className="required">*</span>
                        </label>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Celular <span className="required">*</span>
                        </label>
                        <input
                            className="form-input"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(321) 123-0203"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Tu Mensaje!</label>
                    <textarea
                        className="form-textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Deja un mensaje para los campers!"
                        disabled={isSubmitting}
                    />
                </div>

                <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Enviando...' : 'PATROCINAR'}
                </button>
            </form>
        </div>
    );
}