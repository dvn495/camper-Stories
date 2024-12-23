const db = require("../helpers/conexion");
const bcrypt = require('bcrypt');

const UserModel = {
    login: async (email, password) => {
        const query = "SELECT id, first_name, last_name, email, role, password FROM USER WHERE email = ?";
        const result = await db.query(query, [email]);
        
        if (!result.data.length) throw new Error("Usuario no encontrado");

        const user = result.data[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) throw new Error("Contraseña incorrecta");

        return {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role: user.role
        };
    },

    register: async ({ first_name, last_name, email, password, role }) => {
        if (!['admin', 'camper'].includes(role)) {
            throw new Error("El rol debe ser 'admin' o 'camper'");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `
            INSERT INTO USER (first_name, last_name, email, password, role)
            VALUES (?, ?, ?, ?, ?)
        `;
        const result = await db.query(query, [
            first_name,
            last_name,
            email.toLowerCase(),
            hashedPassword,
            role
        ]);

        return result.data.insertId;
    }
};

module.exports = UserModel;
