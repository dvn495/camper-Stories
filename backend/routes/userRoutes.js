const express = require("express");
const UserController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Rutas públicas
router.post('/login', UserController.login);
router.post('/register', UserController.create); // Ruta pública para registro

// Ruta para cerrar sesión
router.post('/logout', UserController.logout);

// Rutas protegidas con authMiddleware
router.get("/", authMiddleware, UserController.getAll);
router.get("/admin/:id", authMiddleware, UserController.getByIdForAdmin); // Ruta para admins
router.get("/camper/:id", authMiddleware, UserController.getByIdForCamper); // Ruta para campers
router.put("/:id", authMiddleware, UserController.update);
router.delete("/:id", authMiddleware, UserController.delete);

module.exports = router;
