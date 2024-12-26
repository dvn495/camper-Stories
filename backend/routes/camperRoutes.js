const express = require("express");
const CamperController = require("../controllers/camperController");

const router = express.Router();

// Rutas para el CRUD de campers
router.get("/", CamperController.getAll); // Obtener todos los campers
router.get("/:id", CamperController.getById); // Obtener un camper por ID
router.post("/", CamperController.create); // Crear un nuevo camper
router.put("/:id", CamperController.update); // Actualizar un camper existente
router.delete("/:id", CamperController.delete); // Eliminar un camper

module.exports = router;