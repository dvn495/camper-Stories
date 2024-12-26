const db = require("../helpers/conexion");

const SponsorModel = {
    createSponsor: async ({ first_name, last_name, email, phone, message }) => {
        const query = `
            INSERT INTO SPONSOR (first_name, last_name, email, phone, message)
            VALUES (?, ?, ?, ?, ?)
        `;
        const result = await db.query(query, [
            first_name,
            last_name,
            email.toLowerCase(),
            phone || null,
            message || null
        ]);

        return result.data.insertId;
    }
};

module.exports = SponsorModel;

