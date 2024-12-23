require('dotenv').config();
const mysql = require('mysql2/promise');

class Conexion {
    constructor() {
        this.config = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
        };
        this.pool = mysql.createPool(this.config);
    }

    /**
     * Método para obtener la conexión a la base de datos.
     * @returns {Promise<Connection>} Una conexión activa a la base de datos.
     */
    async getConexion() {
        try {
            const connection = await this.pool.getConnection();
            return { status: 200, message: 'Conexión establecida', connection };
        } catch (error) {
            throw new Error(
                JSON.stringify({ status: 500, message: 'Error en la conexión', error })
            );
        }
    }

    /**
     * Método para realizar consultas directamente desde el pool.
     * @param {string} query - Consulta SQL a ejecutar.
     * @param {Array} params - Parámetros para la consulta.
     * @returns {Promise<Object>} Resultado de la consulta.
     */
    async query(query, params = []) {
        try {
            const [results] = await this.pool.query(query, params);
            return { status: 200, data: results };
        } catch (error) {
            throw new Error(
                JSON.stringify({ status: 500, message: 'Error al ejecutar la consulta', error })
            );
        }
    }
}

module.exports = new Conexion();
