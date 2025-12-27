import { query } from '../config/dbConfig.js';

class Promociones {
    getPromociones(callback) {
        const sql = 'SELECT * FROM promocion';
        query(sql, callback);
    }

    postPromociones(anio_academico, mie, aprobados_limpios, aprobados_con_1, aprobados_con_2, bajas, curso_id, callback) {
        const sql = 'INSERT INTO promocion (`año_academico`, mie, `aprobados limpios`, `aprobados con 1`, `aprobados con 2`, bajas, curso_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [anio_academico, mie, aprobados_limpios, aprobados_con_1, aprobados_con_2, bajas, curso_id];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putPromociones(id, anio_academico, mie, aprobados_limpios, aprobados_con_1, aprobados_con_2, bajas, curso_id, callback) {
        const sql = 'UPDATE promocion SET `año_academico`=?, mie=?, `aprobados limpios`=?, `aprobados con 1`=?, `aprobados con 2`=?, bajas=?, curso_id=? WHERE id=?';
        const values = [anio_academico, mie, aprobados_limpios, aprobados_con_1, aprobados_con_2, bajas, curso_id, id];
        query(sql, values, callback);
    }

    deletePromociones(id, callback) {
        const sql = 'DELETE FROM promocion WHERE id=?';
        query(sql, [id], callback);
    }
}

export const promocionModel = new Promociones();
