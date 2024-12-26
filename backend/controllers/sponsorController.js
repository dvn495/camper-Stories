const SponsorModel = require("../models/sponsorModel");

const SponsorController = {
    create: async (req, res) => {
        try {
            const result = await SponsorModel.createSponsor(req.body);
            res.status(201).json({ 
                message: "Patrocinador registrado exitosamente", 
                id: result.data.insertId 
            });
        } catch (error) {
            if (error.message === 'Datos del formulario incompletos') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ 
                message: "Error al registrar el patrocinador", 
                error: error.message 
            });
        }
    },

    update: async (req, res) => {
        try {
            await SponsorModel.updateSponsor(req.params.id, req.body);
            res.status(200).json({ 
                message: "Información del patrocinador actualizada" 
            });
        } catch (error) {
            if (error.message === 'ID es requerido' || 
                error.message === 'Datos de actualización inválidos') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ 
                message: "Error al actualizar la información", 
                error: error.message 
            });
        }
    },
};

module.exports = SponsorController; 