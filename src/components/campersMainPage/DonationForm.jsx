import { useState } from 'react'
import './styles/DonationForm.css'

export default function DonationForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        celular: '',
        mensaje: '',
        valor: '' // Campo adicional para el monto de la donación
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const valor = parseFloat(formData.valor)
        if (isNaN(valor) || valor <= 0) {
            alert('Por favor ingresa un valor válido para la donación.')
            return
        }

        console.log('Form submitted:', formData)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="donation-form-card">
            <form onSubmit={handleSubmit} className="donation-form">
                <div className="donation-form-row">
                    <div className="donation-form-group">
                        <label className="donation-form-label">
                            Nombre <span className="donation-required">*</span>
                        </label>
                        <input
                            className="donation-form-input"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                        />
                    </div>
                    <div className="donation-form-group">
                        <label className="donation-form-label">
                            Apellido <span className="donation-required">*</span>
                        </label>
                        <input
                            className="donation-form-input"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            placeholder="Tu apellido"
                            required
                        />
                    </div>
                </div>

                <div className="donation-form-row">
                    <div className="donation-form-group">
                        <label className="donation-form-label">
                            Correo Electrónico <span className="donation-required">*</span>
                        </label>
                        <input
                            className="donation-form-input"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            required
                        />
                    </div>
                    <div className="donation-form-group">
                        <label className="donation-form-label">
                            Celular <span className="donation-required">*</span>
                        </label>
                        <input
                            className="donation-form-input"
                            type="tel"
                            name="celular"
                            value={formData.celular}
                            onChange={handleChange}
                            placeholder="(321) 123-0203"
                            required
                        />
                    </div>
                </div>

                <div className="donation-form-group">
                    <label className="donation-form-label">
                        Valor de la Donación <span className="donation-required">*</span>
                    </label>
                    <input
                        className="donation-form-input"
                        type="number"
                        name="valor"
                        value={formData.valor}
                        onChange={handleChange}
                        placeholder="Ingresa el monto a donar"
                        required
                    />
                </div>

                <div className="donation-form-group">
                    <label className="donation-form-label">Tu Mensaje!</label>
                    <textarea
                        className="donation-form-textarea"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Deja un mensaje para los campers!"
                    />
                </div>

                <button type="submit" className="donation-submit-button">
                    PATROCINAR
                </button>
            </form>
        </div>
    )
}
