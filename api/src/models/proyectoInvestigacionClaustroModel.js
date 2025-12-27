import { query } from '../config/dbConfig.js';

class ProyectoInvestigacionClaustro {
    getProyectos(callback) {
        const sql = 'SELECT * FROM proyecto_investigacion_claustro';
        query(sql, callback);
    }

    postProyectos(clasificacion, cantidad, anio_evaluacion, callback) {
        const sql = 'INSERT INTO proyecto_investigacion_claustro (clasificacion, cantidad, `año_evaluacion`) VALUES (?, ?, ?)';
        const values = [clasificacion, cantidad, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putProyectos(id, clasificacion, cantidad, anio_evaluacion, callback) {
        const sql = 'UPDATE proyecto_investigacion_claustro SET clasificacion=?, cantidad=?, `año_evaluacion`=? WHERE id=?';
        const values = [clasificacion, cantidad, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deleteProyectos(id, callback) {
        const sql = 'DELETE FROM proyecto_investigacion_claustro WHERE id=?';
        query(sql, [id], callback);
    }
}

export const proyectoInvestigacionClaustroModel = new ProyectoInvestigacionClaustro();
