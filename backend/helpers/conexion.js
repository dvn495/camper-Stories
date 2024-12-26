require('dotenv').config();
console.log("Variables de entorno cargadas:", process.env);
const mysql = require('mysql2/promise');

class Conexion {
    constructor() {
        this.config = {
            host: '212.56.44.105',
            user: 'camperStory',
            password: 'camperStory2024',
            port: 3306,
            database: 'Campuslands'
        };
        console.log('Configuración de la base de datos:', {
            host: this.config.host,
            user: this.config.user,
            port: this.config.port,
            database: this.config.database,
        });
        this.pool = mysql.createPool(this.config);
    }

    /**
     * Método para obtener la conexión a la base de datos.
     * @returns {Promise<Connection>} Una conexión activa a la base de datos.
     */
    async getConexion() {
        try {
            console.log('Intentando establecer conexión...');
            const connection = await this.pool.getConnection();
            console.log('Conexión exitosa a la base de datos');
            return { status: 200, message: 'Conexión establecida', connection };
        } catch (error) {
            console.error('Error de conexión:', error.message);
            console.error('Detalles completos del error:', error);
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
            console.log('Ejecutando query:', query);
            console.log('Parámetros:', params);
            const [results] = await this.pool.query(query, params);
            console.log('Query ejecutada exitosamente');
            return { status: 200, data: results };
        } catch (error) {
            console.error('Error en la query:', error.message);
            console.error('Query que falló:', query);
            console.error('Parámetros de la query:', params);
            throw new Error(
                JSON.stringify({ status: 500, message: 'Error al ejecutar la consulta', error })
            );
        }
    }
}

module.exports = new Conexion();
