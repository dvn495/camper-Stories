const db = require("../helpers/conexion"); // Importa la conexión a MySQL

const CamperModel = {
    // Obtener todos los campers
    getAllCampers: async () => {
        const query = "SELECT * FROM CAMPER";
        return db.query(query);
    },

    // Obtener un camper por ID
    getCamperById: async (id) => {
        const query = "SELECT * FROM CAMPER WHERE id = ?";
        return db.query(query, [id]);
    },

    // Crear un nuevo camper
    createCamper: async ({ title, description, about, image, main_video_url }) => {
        const query = "INSERT INTO CAMPER (title, description, about, image, main_video_url) VALUES (?, ?, ?, ?, ?)";
        return db.query(query, [title, description, about, image, main_video_url]);
    },

    // Actualizar un camper existente
    updateCamper: async (id, { title, description, about, image, main_video_url}) => {
        const query = `
            UPDATE CAMPER SET
            title = ?,
            description = ?,
            about = ?,
            image = ?,
            main_video_url = ?
            WHERE id = ?
        `;
        return db.query(query, [title, description, about, image, main_video_url]);
    },

    // Eliminar un camper
    deleteUser: async (id) => {
        const query = "DELETE FROM CAMPER WHERE id = ?";
        return db.query(query, [id]);
    },
};

module.exports = CamperModel