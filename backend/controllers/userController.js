const jwt = require('jsonwebtoken');
const UserModel = require("../models/userModel");

const UserController = {
    getAll: async (req, res) => {
        try {
            const users = await UserModel.getAllUsers(req.user.id, req.user.role);
            res.json(users);
        } catch (error) {
            res.status(400).json({ error: error.message });
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
            console.log(error);
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
            const result = await UserModel.updateUser(
                req.params.id, 
                req.body, 
                req.user.id,  // ID del usuario que hace la petición
                req.user.role // Rol del usuario que hace la petición
            );
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
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

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.status(400).json({ message: 'Email y password son requeridos' });
            }

            const user = await UserModel.login(email, password);
            
            // Generar token
            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.json({
                message: 'Login exitoso',
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name
                }
            });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    },

    logout: (req, res) => {
        // Aquí puedes manejar la lógica de cierre de sesión si es necesario
        // Por ejemplo, puedes eliminar el token del lado del cliente
        res.json({ message: "Sesión cerrada exitosamente" });
    }
};

module.exports = UserController;
