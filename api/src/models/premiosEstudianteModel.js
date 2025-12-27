import { query } from '../config/dbConfig.js';

class PremiosEstudiante {
    getPremios(callback) {
        const sql = 'SELECT * FROM premios_estudiante';
        query(sql, callback);
    }

    postPremios(nombre, anio, cantidad, callback) {
        const sql = 'INSERT INTO premios_estudiante (nombre, `año`, cantidad) VALUES (?, ?, ?)';
        const values = [nombre, anio, cantidad];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putPremios(id, nombre, anio, cantidad, callback) {
        const sql = 'UPDATE premios_estudiante SET nombre=?, `año`=?, cantidad=? WHERE id=?';
        const values = [nombre, anio, cantidad, id];
        query(sql, values, callback);
    }

    deletePremios(id, callback) {
        const sql = 'DELETE FROM premios_estudiante WHERE id=?';
        query(sql, [id], callback);
    }
}

export const premiosEstudianteModel = new PremiosEstudiante();
