import { useState } from 'react'
import './styles/DonationForm.css'

export default function DonationForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        celular: '',
        mensaje: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()





        console.log('Form submitted:', formData)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form-card">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">
                            Nombre <span className="required">*</span>
                        </label>
                        <input
                            className="form-input"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Apellido <span className="required">*</span>
                        </label>
                        <input
                            className="form-input"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            placeholder="Tu apellido"
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">
                            Correo Electronico <span className="required">*</span>
                        </label>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Celular <span className="required">*</span>
                        </label>
                        <input
                            className="form-input"
                            type="tel"
                            name="celular"
                            value={formData.celular}
                            onChange={handleChange}
                            placeholder="(321) 123-0203"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Tu Mensaje!</label>
                    <textarea
                        className="form-textarea"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Deja un mensaje para los campers!"
                    />
                </div>

                <button type="submit" className="submit-button">
                    DONAR
                </button>
            </form>
        </div>
    )
}
