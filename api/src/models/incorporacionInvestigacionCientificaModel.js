import { query } from '../config/dbConfig.js';

class IncorporacionInvestigacionCientificaModel{
    getProyectos(callback) {
        const sql = 'SELECT * FROM incorporacion_investigacion_cientifica';
        query(sql, callback);
    }

    postProyectos(institucional, nacional, internacional, cantidad_profesores_incorporados, estudiantes_investigando_1er_año, estudiantes_investigando_2do_año, estudiantes_investigando_3er_año, estudiantes_investigando_4to_año, estudiantes_investigando_5to_año, año_evaluacion, callback) {
        const sql = 'INSERT INTO incorporacion_investigacion_cientifica (institucional, nacional, internacional, cantidad_profesores_incorporados, estudiantes_investigando_1er_año, estudiantes_investigando_2do_año, estudiantes_investigando_3er_año, estudiantes_investigando_4to_año, estudiantes_investigando_5to_año, año_evaluacion) VALUES (?,?,?,?,?,?,?,?,?,?)';
        const values = [institucional, nacional, internacional, cantidad_profesores_incorporados, estudiantes_investigando_1er_año, estudiantes_investigando_2do_año, estudiantes_investigando_3er_año, estudiantes_investigando_4to_año, estudiantes_investigando_5to_año, año_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putProyectos(institucional, nacional, internacional, cantidad_profesores_incorporados, estudiantes_investigando_1er_año, estudiantes_investigando_2do_año, estudiantes_investigando_3er_año, estudiantes_investigando_4to_año, estudiantes_investigando_5to_año, año_evaluacion, id,  callback) {
        const sql = 'UPDATE incorporacion_investigacion_cientifica SET institucional=?, nacional=?, internacional=?, cantidad_profesores_incorporados=?, estudiantes_investigando_1er_año=?, estudiantes_investigando_2do_año=?, estudiantes_investigando_3er_año=?, estudiantes_investigando_4to_año=?, estudiantes_investigando_5to_año=?, año_evaluacion=? WHERE id=?';
        const values = [institucional, nacional, internacional, cantidad_profesores_incorporados, estudiantes_investigando_1er_año, estudiantes_investigando_2do_año, estudiantes_investigando_3er_año, estudiantes_investigando_4to_año, estudiantes_investigando_5to_año, año_evaluacion, id];
        query(sql, values, callback);
    }

    deleteProyectos(id, callback) {
        const sql = 'DELETE FROM incorporacion_investigacion_cientifica WHERE id=?';
        query(sql, [id], callback);
    }
}

export const incorporacionInvestigacionCientificaModel = new IncorporacionInvestigacionCientificaModel();
