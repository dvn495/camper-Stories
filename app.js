// * Configuración de variables de entorno y dependencias principales
require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const fs = require("fs");
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const corsOptions = require('./backend/config/corsOptions');

// * Importación de la conexión a la base de datos
const db = require("./backend/helpers/conexion");

// * Inicialización de la aplicación Express y el servidor HTTP
const app = express();
const server = http.createServer(app);

// * Middleware para procesar datos JSON en las peticiones
app.use(express.json());
app.use(cors(corsOptions));


// ! Middleware para manejar errores de JWT
app.use((err, req, res, next) => {
    if (err instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    next(err);
});

// * Importación de rutas de la aplicación
const userRoutes = require("./backend/routes/userRoutes");
const camperRoutes = require("./backend/routes/camperRoutes");
const sponsorRoutes = require("./backend/routes/sponsorRoutes");
const dreamsRoutes = require("./backend/routes/dreamRoutes");

// * Configuración de los endpoints principales
app.use("/users", userRoutes);
app.use("/campers", camperRoutes);
app.use("/sponsors", sponsorRoutes);
app.use("/dreams", dreamsRoutes);

// ? Configuración del rate limiting global
// @param windowMs: Ventana de tiempo en milisegundos
// @param max: Número máximo de solicitudes permitidas
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // límite de 100 solicitudes por ventana por IP
});

// ! Configuración de rate limiting específico para autenticación
// @param windowMs: Ventana de tiempo para intentos de autenticación
// @param max: Número máximo de intentos permitidos
const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 5, // 5 intentos por hora
    message: {
        error: 'Demasiados intentos de inicio de sesión. Por favor, intente nuevamente en 1 hora'
    }
});

// * Aplicación del rate limiting global
app.use(limiter);

// ! Aplicación del rate limiting específico para rutas de autenticación
app.use("/users/login", authLimiter);
app.use("/users/register", authLimiter);

// * Verificación inicial de la conexión a la base de datos
(async () => {
    try {
        const connection = await db.getConexion();
        console.log(connection.message);
    } catch (error) {
        // ! Error crítico si no se puede conectar a la base de datos
        console.error("Error al conectar con la base de datos:", error);
    }
})();

// * Configuración específica para el entorno de producción
if (process.env.NODE_ENV === "production") {
    // TODO: Considerar implementar compresión gzip para archivos estáticos
    app.use(express.static(path.join(__dirname, "dist", "client")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "dist", "client", "index.html"));
    });
}

// * Inicialización del servidor en el puerto especificado
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

