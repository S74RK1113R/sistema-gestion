import { query } from '../config/dbConfig.js';

class Investigacion {
    getInvestigacion(callback) {
        const sql = 'SELECT * FROM investigacion';
        query(sql, callback);
    }

    postInvestigacion(proyectos_investigacion, porciento_estudiantes_vinculados, porciento_profesores_vinculados, anio_evaluacion, callback) {
        const sql = 'INSERT INTO investigacion (proyectos_investigacion, porciento_estudiantes_vinculados, porciento_profesores_vinculados, `año_evaluacion`) VALUES (?, ?, ?, ?)';
        const values = [proyectos_investigacion, porciento_estudiantes_vinculados, porciento_profesores_vinculados, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putInvestigacion(id, proyectos_investigacion, porciento_estudiantes_vinculados, porciento_profesores_vinculados, anio_evaluacion, callback) {
        const sql = 'UPDATE investigacion SET proyectos_investigacion=?, porciento_estudiantes_vinculados=?, porciento_profesores_vinculados=?, `año_evaluacion`=? WHERE id=?';
        const values = [proyectos_investigacion, porciento_estudiantes_vinculados, porciento_profesores_vinculados, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deleteInvestigacion(id, callback) {
        const sql = 'DELETE FROM investigacion WHERE id=?';
        query(sql, [id], callback);
    }
}

export const investigacionModel = new Investigacion();
