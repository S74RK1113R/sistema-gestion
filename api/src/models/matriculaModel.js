import { query } from '../config/dbConfig.js';

class Matriculas {
    getMatriculas(callback) {
        const sql = 'SELECT * FROM matricula';
        query(sql, callback);
    }

    postMatriculas(primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion, callback) {
        const sql = 'INSERT INTO matricula (`1er_año`, `2do_año`, `3er_año`, `4to_año`, `5to_añol`, `año_evaluacion`) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putMatriculas(id, primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion, callback) {
        const sql = 'UPDATE matricula SET `1er_año`=?, `2do_año`=?, `3er_año`=?, `4to_año`=?, `5to_añol`=?, `año_evaluacion`=? WHERE id=?';
        const values = [primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deleteMatriculas(id, callback) {
        const sql = 'DELETE FROM matricula WHERE id=?';
        query(sql, [id], callback);
    }
}

export const matriculasModel = new Matriculas();
