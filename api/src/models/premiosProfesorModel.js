import { query } from '../config/dbConfig.js';

class PremiosProfesor {
    getPremios(callback) {
        const sql = 'SELECT * FROM premios_profesor';
        query(sql, callback);
    }

    postPremios(profesor_id, nombre_premio, anio, callback) {
        const sql = 'INSERT INTO premios_profesor (profesor_id, nombre_premio, `año`) VALUES (?, ?, ?)';
        const values = [profesor_id, nombre_premio, anio];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putPremios(id, profesor_id, nombre_premio, anio, callback) {
        const sql = 'UPDATE premios_profesor SET profesor_id=?, nombre_premio=?, `año`=? WHERE id=?';
        const values = [profesor_id, nombre_premio, anio, id];
        query(sql, values, callback);
    }

    deletePremios(id, callback) {
        const sql = 'DELETE FROM premios_profesor WHERE id=?';
        query(sql, [id], callback);
    }
}

export const premiosProfesorModel = new PremiosProfesor();
