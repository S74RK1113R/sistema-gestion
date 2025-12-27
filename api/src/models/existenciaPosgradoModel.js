import { query } from '../config/dbConfig.js';

class ExistenciaPosgrado {
    getExistencias(callback) {
        const sql = 'SELECT * FROM existencia_posgrado';
        query(sql, callback);
    }

    postExistencias(existencia, anioEvaluacion, callback) {
        const sql = 'INSERT INTO existencia_posgrado (`existencia`, `año_evaluacion`) VALUES (?, ?)';
        const values = [existencia, anioEvaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putExistencias(id, existencia, anioEvaluacion, callback) {
        const sql = 'UPDATE existencia_posgrado SET existencia=?, `año_evaluacion`=? WHERE id=?';
        const values = [existencia, anioEvaluacion, id];
        query(sql, values, callback);
    }

    deleteExistencias(id, callback) {
        const sql = 'DELETE FROM existencia_posgrado WHERE id=?';
        query(sql, [id], callback);
    }
}

export const existenciaPosgradoModel = new ExistenciaPosgrado();
