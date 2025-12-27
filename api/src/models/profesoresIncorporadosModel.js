import { query } from '../config/dbConfig.js';

class ProfesoresIncorporados {
    getProfesoresIncorporados(callback) {
        const sql = 'SELECT * FROM profesores_incorporados';
        query(sql, callback);
    }

    postProfesoresIncorporados(cantidad, anio_evaluacion, callback) {
        const sql = 'INSERT INTO profesores_incorporados (cantidad, `año_evaluacion`) VALUES (?, ?)';
        const values = [cantidad, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putProfesoresIncorporados(id, cantidad, anio_evaluacion, callback) {
        const sql = 'UPDATE profesores_incorporados SET cantidad=?, `año_evaluacion`=? WHERE id=?';
        const values = [cantidad, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deleteProfesoresIncorporados(id, callback) {
        const sql = 'DELETE FROM profesores_incorporados WHERE id=?';
        query(sql, [id], callback);
    }
}

export const profesoresIncorporadosModel = new ProfesoresIncorporados();
