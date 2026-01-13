import { query } from '../config/dbConfig.js';

class Claustros {
    getClaustros(callback) {
        const sql = 'SELECT * FROM claustro';
        query(sql, callback);
    }

    postClaustros(total_claustro, drc, drc_equivalentes, drc_afin, mc_equivalentes, pt_pa, anio_evaluacion, callback) {
        const sql = 'INSERT INTO claustro (total_claustro, drc, drc_equivalentes, drc_afin, mc_equivalentes, pt_pa, año_evaluacion) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [total_claustro, drc, drc_equivalentes, drc_afin, mc_equivalentes, pt_pa, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putClaustros(id, total_claustro, drc, drc_equivalentes, drc_afin, mc_equivalentes, pt_pa, anio_evaluacion, callback) {
        const sql = 'UPDATE claustro SET total_claustro=?, drc=?, drc_equivalentes=?, drc_afin=?, mc_equivalentes=?, pt_pa=?, año_evaluacion=? WHERE id=?';
        const values = [total_claustro, drc, drc_equivalentes, drc_afin, mc_equivalentes, pt_pa, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deleteClaustros(id, callback) {
        const sql = 'DELETE FROM claustro WHERE id=?';
        query(sql, [id], callback);
    }
}

export const claustrosModel = new Claustros();
