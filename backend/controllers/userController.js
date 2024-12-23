const UserModel = require("../models/UserModel");

const UserController = {
    getAll: async (req, res) => {
        try {
            const result = await UserModel.getAllUsers();
            res.status(200).json(result.data);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const result = await UserModel.getUserById(req.params.id);
            if (!result.data.length) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.status(200).json(result.data[0]);
        } catch (error) {
            if (error.message === 'ID es requerido') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Error al obtener el usuario", error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const result = await UserModel.createUser(req.body);
            res.status(201).json({ message: "Usuario creado", id: result.data.insertId });
        } catch (error) {
            if (error.message === 'Email y password son requeridos' || 
                error.message === 'El email ya está registrado') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Error al crear el usuario", error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            await UserModel.updateUser(req.params.id, req.body);
            res.status(200).json({ message: "Usuario actualizado" });
        } catch (error) {
            if (error.message === 'ID es requerido' || 
                error.message === 'No hay datos para actualizar') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Error al actualizar el usuario", error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            await UserModel.deleteUser(req.params.id);
            res.status(200).json({ message: "Usuario eliminado" });
        } catch (error) {
            if (error.message === 'ID es requerido') {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Error al eliminar el usuario", error: error.message });
        }
    },
};

module.exports = UserController;
