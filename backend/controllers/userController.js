const UserModel = require("../models/UserModel");

const UserController = {
    // Obtener todos los usuarios
    getAll: async (req, res) => {
        try {
            const result = await UserModel.getAllUsers();
            res.status(200).json(result.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
        }
    },

    // Obtener un usuario por ID
    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await UserModel.getUserById(id);
            if (!result.data.length) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.status(200).json(result.data[0]);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el usuario", error });
        }
    },

    // Crear un nuevo usuario
    create: async (req, res) => {
        const { first_name, last_name, email, password, role } = req.body;
        try {
            const result = await UserModel.createUser({ first_name, last_name, email, password, role });
            res.status(201).json({ message: "Usuario creado", id: result.data.insertId });
        } catch (error) {
            res.status(500).json({ message: "Error al crear el usuario", error });
        }
    },

    // Actualizar un usuario existente
    update: async (req, res) => {
        const { id } = req.params;
        const { first_name, last_name, email, password, role } = req.body;
        try {
            const result = await UserModel.updateUser(id, { first_name, last_name, email, password, role });
            res.status(200).json({ message: "Usuario actualizado" });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el usuario", error });
        }
    },

    // Eliminar un usuario
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await UserModel.deleteUser(id);
            res.status(200).json({ message: "Usuario eliminado" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar el usuario", error });
        }
    },
};

module.exports = UserController;
