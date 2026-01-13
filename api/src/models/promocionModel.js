import { query } from '../config/dbConfig.js';

class Promociones {
    getPromociones(callback) {
        const sql = 'SELECT * FROM promocion';
        query(sql, callback);
    }

    postPromociones(mie_1er_año, mie_2do_año, mie_3er_año, mie_4to_año, mie_5to_año, aprobados_limpios_1er_año, aprobados_limpios_2do_año, aprobados_limpios_3er_año, aprobados_limpios_4to_año, aprobados_limpios_5to_año, aprobados_con_2_1er_año, aprobados_con_2_2do_año, aprobados_con_2_3er_año, aprobados_con_2_4to_año, aprobados_con_2_5to_año, aprobados_con_1_1er_año, aprobados_con_1_2do_año, aprobados_con_1_3er_año, aprobados_con_1_4to_año, aprobados_con_1_5to_año, bajas_1er_año, bajas_2do_año, bajas_3er_año, bajas_4to_año, bajas_5to_año, curso_id, callback) {
        const sql = 'INSERT INTO promocion ( mie_1er_año, mie_2do_año, mie_3er_año, mie_4to_año, mie_5to_año, aprobados_limpios_1er_año, aprobados_limpios_2do_año, aprobados_limpios_3er_año, aprobados_limpios_4to_año, aprobados_limpios_5to_año, aprobados_con_2_1er_año, aprobados_con_2_2do_año, aprobados_con_2_3er_año, aprobados_con_2_4to_año, aprobados_con_2_5to_año, aprobados_con_1_1er_año, aprobados_con_1_2do_año, aprobados_con_1_3er_año, aprobados_con_1_4to_año, aprobados_con_1_5to_año, bajas_1er_año, bajas_2do_año, bajas_3er_año, bajas_4to_año, bajas_5to_año, curso_id ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? );'

        const values = [mie_1er_año, mie_2do_año, mie_3er_año, mie_4to_año, mie_5to_año, aprobados_limpios_1er_año, aprobados_limpios_2do_año, aprobados_limpios_3er_año, aprobados_limpios_4to_año, aprobados_limpios_5to_año, aprobados_con_2_1er_año, aprobados_con_2_2do_año, aprobados_con_2_3er_año, aprobados_con_2_4to_año, aprobados_con_2_5to_año, aprobados_con_1_1er_año, aprobados_con_1_2do_año, aprobados_con_1_3er_año, aprobados_con_1_4to_año, aprobados_con_1_5to_año, bajas_1er_año, bajas_2do_año, bajas_3er_año, bajas_4to_año, bajas_5to_año, curso_id];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putPromociones(mie_1er_año, mie_2do_año, mie_3er_año, mie_4to_año, mie_5to_año, aprobados_limpios_1er_año, aprobados_limpios_2do_año, aprobados_limpios_3er_año, aprobados_limpios_4to_año, aprobados_limpios_5to_año, aprobados_con_2_1er_año, aprobados_con_2_2do_año, aprobados_con_2_3er_año, aprobados_con_2_4to_año, aprobados_con_2_5to_año, aprobados_con_1_1er_año, aprobados_con_1_2do_año, aprobados_con_1_3er_año, aprobados_con_1_4to_año, aprobados_con_1_5to_año, bajas_1er_año, bajas_2do_año, bajas_3er_año, bajas_4to_año, bajas_5to_año, curso_id, id, callback) {

        const sql = 'UPDATE promocion SET mie_1er_año = ?, mie_2do_año = ?, mie_3er_año = ?, mie_4to_año = ?,mie_5to_año = ?,aprobados_limpios_1er_año = ?,aprobados_limpios_2do_año = ?,aprobados_limpios_3er_año = ?,aprobados_limpios_4to_año = ?,aprobados_limpios_5to_año = ?,aprobados_con_2_1er_año = ?,aprobados_con_2_2do_año = ?,aprobados_con_2_3er_año = ?,aprobados_con_2_4to_año = ?,aprobados_con_2_5to_año = ?, aprobados_con_1_1er_año = ?, aprobados_con_1_2do_año = ?, aprobados_con_1_3er_año = ?, aprobados_con_1_4to_año = ?, aprobados_con_1_5to_año = ?, bajas_1er_año = ?, bajas_2do_año = ?, bajas_3er_año = ?, bajas_4to_año = ?, bajas_5to_año = ?, curso_id = ? WHERE id = ?;';

        const values = [mie_1er_año, mie_2do_año, mie_3er_año, mie_4to_año, mie_5to_año, aprobados_limpios_1er_año, aprobados_limpios_2do_año, aprobados_limpios_3er_año, aprobados_limpios_4to_año, aprobados_limpios_5to_año, aprobados_con_2_1er_año, aprobados_con_2_2do_año, aprobados_con_2_3er_año, aprobados_con_2_4to_año, aprobados_con_2_5to_año, aprobados_con_1_1er_año, aprobados_con_1_2do_año, aprobados_con_1_3er_año, aprobados_con_1_4to_año, aprobados_con_1_5to_año, bajas_1er_año, bajas_2do_año, bajas_3er_año, bajas_4to_año, bajas_5to_año, curso_id, id];

        query(sql, values, callback);
    }

    deletePromociones(id, callback) {
        const sql = 'DELETE FROM promocion WHERE id=?';
        query(sql, [id], callback);
    }
}

export const promocionModel = new Promociones();
