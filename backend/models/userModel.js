const db = require("../helpers/conexion"); // Importa la conexión a MySQL

const UserModel = {
    // Obtener todos los usuarios
    getAllUsers: async () => {
        const query = "SELECT * FROM USER";
        return db.query(query);
    },

    // Obtener un usuario por ID
    getUserById: async (id) => {
        const query = "SELECT * FROM USER WHERE id = ?";
        return db.query(query, [id]);
    },

    // Crear un nuevo usuario
    createUser: async ({ first_name, last_name, email, password, role }) => {
        const query = "INSERT INTO USER (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)";
        return db.query(query, [first_name, last_name, email, password, role]);
    },

    // Actualizar un usuario existente
    updateUser: async (id, { first_name, last_name, email, password, role }) => {
        const query = `
            UPDATE USER SET 
            first_name = ?, 
            last_name = ?, 
            email = ?, 
            password = ?, 
            role = ? 
            WHERE id = ?
        `;
        return db.query(query, [first_name, last_name, email, password, role, id]);
    },

    // Eliminar un usuario
    deleteUser: async (id) => {
        const query = "DELETE FROM USER WHERE id = ?";
        return db.query(query, [id]);
    },
};

module.exports = UserModel;
