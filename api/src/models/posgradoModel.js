import { query } from '../config/dbConfig.js';

class Posgrados {
    getPosgrados(callback) {
        const sql = 'SELECT * FROM posgrado';
        query(sql, callback);
    }

    postPosgrados(nombre, anio, cantidad, callback) {
        const sql = 'INSERT INTO posgrado (nombre, `año`, cantidad) VALUES (?, ?, ?)';
        const values = [nombre, anio, cantidad];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putPosgrados(id, nombre, anio, cantidad, callback) {
        const sql = 'UPDATE posgrado SET nombre=?, `año`=?, cantidad=? WHERE id=?';
        const values = [nombre, anio, cantidad, id];
        query(sql, values, callback);
    }

    deletePosgrados(id, callback) {
        const sql = 'DELETE FROM posgrado WHERE id=?';
        query(sql, [id], callback);
    }
}

export const posgradosModel = new Posgrados();
