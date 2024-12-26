const express = require("express");
const path = require("path");
const http = require("http");
const fs = require("fs");

// Importar conexión
const db = require("./backend/helpers/conexion");

// Inicialización de Express
const app = express();
const server = http.createServer(app);

// Middleware para parsear JSON
app.use(express.json());

// Importar Rutas
const userRoutes = require("./backend/routes/userRoutes");
const camperRoutes = require("./backend/routes/camperRoutes");

// Configuración de Rutas
app.use("/users", userRoutes);
app.use("/campers", camperRoutes);

// Verificar conexión al iniciar el servidor
(async () => {
    try {
        const connection = await db.getConexion();
        console.log(connection.message);
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
    }
})();

// Configuración para producción
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "dist", "client")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "dist", "client", "index.html"));
    });
}

// Inicialización del servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

