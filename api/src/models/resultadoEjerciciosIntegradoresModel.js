import { query } from '../config/dbConfig.js';

class ResultadoEjerciciosIntegradores {
    getResultados(callback) {
        const sql = 'SELECT * FROM resultado_ejercicios_integradores';
        query(sql, callback);
    }

    postResultados(porciento_aprobados, porciento_con_4_5, anio_evaluacion, callback) {
        const sql = 'INSERT INTO resultado_ejercicios_integradores (prociento_aprobados, porciento_con_4_5, `año_evaluacion`) VALUES (?, ?, ?)';
        const values = [porciento_aprobados, porciento_con_4_5, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putResultados(id, porciento_aprobados, porciento_con_4_5, anio_evaluacion, callback) {
        const sql = 'UPDATE resultado_ejercicios_integradores SET prociento_aprobados=?, porciento_con_4_5=?, `año_evaluacion`=? WHERE id=?';
        const values = [porciento_aprobados, porciento_con_4_5, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deleteResultados(id, callback) {
        const sql = 'DELETE FROM resultado_ejercicios_integradores WHERE id=?';
        query(sql, [id], callback);
    }
}

export const resultadoEjerciciosIntegradoresModel = new ResultadoEjerciciosIntegradores();
