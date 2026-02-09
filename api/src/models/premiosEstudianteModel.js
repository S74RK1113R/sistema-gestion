import { query } from '../config/dbConfig.js';

class PremiosEstudiante {
    getPremios(callback) {
        const sql = 'SELECT * FROM premios_estudiante';
        query(sql, callback);
    }

    postPremios(nombre, año, nombres, primer_apellido, segundo_apellido, callback) {
        const sql = 'INSERT INTO premios_estudiante (nombre, `año`, nombres , primer_apellido , segundo_apellido) VALUES (?, ?, ?, ?, ?)';
        const values = [nombre, año, nombres, primer_apellido, segundo_apellido];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putPremios(nombre, año, nombres, primer_apellido, segundo_apellido, id, callback) {
        const sql = 'UPDATE premios_estudiante SET nombre=?, `año`=?, nombres=?, primer_apellido=?, segundo_apellido=? WHERE id=?';
        const values = [nombre, año, nombres, primer_apellido, segundo_apellido, id ];
        query(sql, values, callback);
    }

    deletePremios(id, callback) {
        const sql = 'DELETE FROM premios_estudiante WHERE id=?';
        query(sql, [id], callback);
    }
}

export const premiosEstudianteModel = new PremiosEstudiante();
