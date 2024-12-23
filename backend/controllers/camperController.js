const CamperModel = require("../models/camperModel")

const CamperController = {
    // Obtener todos los campers
    getAll: async(req, res) => {
        try {
            const result = await CamperModel.getAllCampers();
            res.status(200).json(result.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al obtener los campers", error: error.message});
        }
    },

    // Obtener un camper por ID
    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await CamperModel.getCamperById(id);
            if (!result.data.length) {
                return res.status(404).json({ message: "Camper no encontrado" });
            }
            res.status(200).json(result.data[0]);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el camper", error });
        }
    },

    // Crear un nuevo camper
    create: async (req, res) => {
        const { title, description, about, image, main_video_url } = req.body;
        try {
            const result = await CamperModel.createCamper({ title, description, about, image, main_video_url });
            res.status(201).json({ message: "Camper creado", id: result.data.insertId });
        } catch (error) {
            res.status(500).json({ message: "Error al crear el Camper", error });
        }
    },

    // Actualizar un camper existente
    update: async (req, res) => {
        const { id } = req.params;
        const { title, description, about, image, main_video_url } = req.body;
        try {
            const result = await CamperModel.updateCamper(id, { title, description, about, image, main_video_url });
            res.status(200).json({ message: ""})
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el camper", error });
        }
    },

    // Eliminar un camper
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await CamperModel.deleteUser(id);
            res.status(200).json({ message: "Camper eliminado" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar el camper"})
        }
    },
};

module.exports = CamperController;