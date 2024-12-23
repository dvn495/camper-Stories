const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

// Rutas para el CRUD de usuarios
router.get("/", UserController.getAll); // Obtener todos los usuarios
router.get("/:id", UserController.getById); // Obtener un usuario por ID
router.post("/", UserController.create); // Crear un nuevo usuario
router.put("/:id", UserController.update); // Actualizar un usuario existente
router.delete("/:id", UserController.delete); // Eliminar un usuario

module.exports = router;
