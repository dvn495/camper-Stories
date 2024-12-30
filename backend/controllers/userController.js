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

    getByIdForAdmin: async (req, res) => {
        try {
            if (req.user.role !== 'admin') {
                return res.status(403).json({ message: 'No tienes permiso para acceder a esta información.' });
            }
    
            const user = await UserModel.getUserByIdForAdmin(req.params.id);
    
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
    
            res.status(200).json(user);
        } catch (error) {
            console.error('Error retrieving user for admin:', error.message);
            res.status(500).json({ message: "Error al obtener el usuario.", error: error.message });
        }
    },
    
    getByIdForCamper: async (req, res) => {
        try {
            const result = await UserModel.getUserByIdForCamper(req.params.id, req.user.id, req.user.role);

            if (!result) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al obtener tu información", error: error.message });
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
            const userId = req.params.id;
            const requestingUserId = req.user.id;
            const userRole = req.user.role;
    
            await UserModel.deleteUser(userId, requestingUserId, userRole);
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
                { id: user.id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.json({
                message: 'Login exitoso',
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                }
            });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    },

    logout: (req, res) => {
        res.json({ message: "Sesión cerrada exitosamente" });
    }
};

module.exports = UserController;
