import { query } from '../config/dbConfig.js';

class EjerciciosIntegradores {
    getEjercicios(callback) {
        const sql = 'SELECT * FROM ejercicios_integradores';
        query(sql, callback);
    }

    postEjercicios(anio, matricula, evaluados, con_2, con_3, con_4, con_5, anio_evaluacion, callback) {
        const sql = 'INSERT INTO ejercicios_integradores (`año`, matricula, evaluados, `con_2`, `con_3`, `con_4`, `con_5`, `año_evaluacion`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [anio, matricula, evaluados, con_2, con_3, con_4, con_5, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putEjercicios(id, anio, matricula, evaluados, con_2, con_3, con_4, con_5, anio_evaluacion, callback) {
        const sql = 'UPDATE ejercicios_integradores SET `año`=?, matricula=?, evaluados=?, `con_2`=?, `con_3`=?, `con_4`=?, `con_5`=?, `año_evaluacion`=? WHERE id=?';
        const values = [anio, matricula, evaluados, con_2, con_3, con_4, con_5, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deleteEjercicios(id, callback) {
        const sql = 'DELETE FROM ejercicios_integradores WHERE id=?';
        query(sql, [id], callback);
    }
}

export const ejerciciosIntegradoresModel = new EjerciciosIntegradores();
