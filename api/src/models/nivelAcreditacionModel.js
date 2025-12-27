import { query } from '../config/dbConfig.js';

class NivelAcreditacion {
    getNiveles(callback) {
        const sql = 'SELECT * FROM nivel_acreditacion';
        query(sql, callback);
    }

    postNiveles(nivel, anioEvaluacion, callback) {
        const sql = 'INSERT INTO nivel_acreditacion (nivel, `año_evaluacion`) VALUES (?, ?)';
        const values = [nivel, anioEvaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putNiveles(id, nivel, anioEvaluacion, callback) {
        const sql = 'UPDATE nivel_acreditacion SET nivel=?, `año_evaluacion`=? WHERE id=?';
        const values = [nivel, anioEvaluacion, id];
        query(sql, values, callback);
    }

    deleteNiveles(id, callback) {
        const sql = 'DELETE FROM nivel_acreditacion WHERE id=?';
        query(sql, [id], callback);
    }
}

export const nivelAcreditacionModel = new NivelAcreditacion();
