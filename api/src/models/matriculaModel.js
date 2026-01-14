import { query } from '../config/dbConfig.js';

class Matriculas {
    getMatriculas(callback) {
        const sql = 'SELECT * FROM matricula';
        query(sql, callback);
    }

    postMatriculas(primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion, callback) {
        const sql = 'INSERT INTO matricula (`p1er_año`, `s2do_año`, `t3er_año`, `c4to_año`, `q5to_año`, `año_evaluacion`) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putMatriculas(id, primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion, callback) {
        const sql = 'UPDATE matricula SET `p1er_año`=?, `s2do_año`=?, `t3er_año`=?, `c4to_año`=?, `q5to_año`=?, `año_evaluacion`=? WHERE id=?';
        const values = [primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deleteMatriculas(id, callback) {
        const sql = 'DELETE FROM matricula WHERE id=?';
        query(sql, [id], callback);
    }
}

export const matriculasModel = new Matriculas();
