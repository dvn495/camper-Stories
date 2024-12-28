const db = require("../helpers/conexion");
const bcrypt = require('bcryptjs');

class UserModel {
    static async login(email, password) {
        try {
            const query = 'SELECT * FROM USER WHERE email = ?';
            const result = await db.query(query, [email]);
            
            if (!result.data.length) {
                throw new Error('Usuario no encontrado');
            }

            const user = result.data[0];
            const isValidPassword = await bcrypt.compare(password, user.password);
            
            if (!isValidPassword) {
                throw new Error('Contraseña incorrecta');
            }

            return user;
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsers(requestingUserId, userRole) {
        try {
            const query =
                userRole === 'admin'
                    ? "SELECT id, first_name, last_name, email, role FROM USER"
                    : "SELECT * FROM USER";
            const params = userRole === 'admin' ? [] : [requestingUserId];
            return await db.query(query, params);
        } catch (error) {
            console.error('Error retrieving users:', error);
            throw new Error('No se pudo obtener la lista de usuarios.');
        }
    }
    
static async getUserByIdForAdmin(userId) {
    try {
        const query = "SELECT id, first_name, last_name, email, role FROM USER WHERE id = ?";
        const result = await db.query(query, [userId]);

        if (!result.data.length) {
            throw new Error('Usuario no encontrado');
        }

        return result.data[0]; // Retorna el primer usuario encontrado
    } catch (error) {
        console.error('Error retrieving user for admin:', error);
        throw new Error('Error al obtener el usuario.');
    }
}

    // Obtener un usuario por ID (para campers)
    static async getUserByIdForCamper(userId, requestingUserId) {
        try {
            if (requestingUserId !== userId) {
                throw new Error('Solo puedes buscar tu propia información.');
            }

            // Ejecutar la consulta para obtener el usuario
            const query = "SELECT id, first_name, last_name, email, role FROM USER WHERE id = ?";
            const [user] = await db.query(query, [userId]);

            // Verificar si el usuario existe
            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            return user;
        } catch (error) {
            console.error('Error retrieving user for camper:', error);
            throw new Error('Error al obtener tu información.');
        }
    }

    

    static async createUser({ first_name, last_name, email, password, role }) {
        if (!['admin', 'camper'].includes(role)) {
            throw new Error("El rol debe ser 'admin' o 'camper'");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `
            INSERT INTO USER (first_name, last_name, email, password, role)
            VALUES (?, ?, ?, ?, ?)
        `;
        return await db.query(query, [
            first_name,
            last_name,
            email.toLowerCase(),
            hashedPassword,
            role
        ]);
    }

    static async updateUser(id, userData, requestingUserId, userRole) {
        if (userRole !== 'admin' && requestingUserId !== id) {
            throw new Error('No tienes permiso para modificar este usuario');
        }

        if (userRole !== 'admin' && userData.role) {
            throw new Error('No tienes permiso para cambiar el rol');
        }

        const query = "UPDATE USER SET ? WHERE id = ?";
        return await db.query(query, [userData, id]);
    }

    static async deleteUser(id, requestingUserId, userRole) {
        if (userRole !== 'admin') {
            throw new Error('Solo los administradores pueden eliminar usuarios');
        }
        
        const query = "DELETE FROM USER WHERE id = ?";
        return await db.query(query, [id]);
    }
}

module.exports = UserModel;
