import { query } from '../config/dbConfig.js';

class EjerciciosIntegradores {
    getEjercicios(callback) {
        const sql = 'SELECT * FROM ejercicios_integradores';
        query(sql, callback);
    }

    postEjercicios(matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año, año_evaluacion, callback) {

        const sql = 'INSERT INTO ejercicios_integradores (matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año, año_evaluacion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

        const values = [matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año, año_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putEjercicios(id, matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año, año_evaluacion, callback) {
        
        const sql = 'UPDATE ejercicios_integradores SET `matricula_2do_año`=?, `matricula_3er_año`=?, `matricula_4to_año`=?, `matricula_5to_año`=?, `evaluados_2do_año`=?, `evaluados_3er_año`=?, `evaluados_4to_año`=?, `evaluados_5to_año`=?, `con_2_2do_año`=?, `con_2_3er_año`=?, `con_2_4to_año`=?, `con_2_5to_año`=?, `con_3_2do_año`=?, `con_3_3er_año`=?, `con_3_4to_año`=?, `con_3_5to_año`=?, `con_4_2do_año`=?, `con_4_3er_año`=?, `con_4_4to_año`=?, `con_4_5to_año`=?, `con_5_2do_año`=?, `con_5_3er_año`=?, `con_5_4to_año`=?, `con_5_5to_año`=?, `año_evaluacion`=? WHERE id=?';

        const values = [matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año, año_evaluacion, id];

        query(sql, values, callback);
    }

    deleteEjercicios(id, callback) {
        const sql = 'DELETE FROM ejercicios_integradores WHERE id=?';
        query(sql, [id], callback);
    }
}

export const ejerciciosIntegradoresModel = new EjerciciosIntegradores();
