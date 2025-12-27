import { query } from '../config/dbConfig.js';

class SedesUniversitarias {
    getSedes(callback) {
        const sql = 'SELECT * FROM sede_universitaria';
        query(sql, callback);
    }

    postSede(nombre, clasificacion, callback) {
        const sql = 'INSERT INTO sede_universitaria (nombre, clasificacion) VALUES (?, ?)';
        query(sql, [nombre, clasificacion], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putSede(id, nombre, clasificacion, callback) {
        const sql = 'UPDATE sede_universitaria SET nombre=?, clasificacion=? WHERE id=?';
        query(sql, [nombre, clasificacion, id], callback);
    }

    deleteSede(id, callback) {
        const sql = 'DELETE FROM sede_universitaria WHERE id=?';
        query(sql, [id], callback);
    }
}

export const sedeUniversitariaModel = new SedesUniversitarias();
