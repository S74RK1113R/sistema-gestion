import { query } from '../config/dbConfig.js';

class EstudiantesInvestigando {
    getEstudiantes(callback) {
        const sql = 'SELECT * FROM estudiantes_investigando';
        query(sql, callback);
    }

    postEstudiantes(anio_evaluacion, primer_año, segundo_año, tercero_año, cuarto_año, quinto_año, callback) {
        const sql = 'INSERT INTO estudiantes_investigando (`año_evaluacion`, `1er_año`, `2do_año`, `3er_año`, `4to_año`, `5to_año`) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [anio_evaluacion, primer_año, segundo_año, tercero_año, cuarto_año, quinto_año];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putEstudiantes(id, anio_evaluacion, primer_año, segundo_año, tercero_año, cuarto_año, quinto_año, callback) {
        const sql = 'UPDATE estudiantes_investigando SET `año_evaluacion`=?, `1er_año`=?, `2do_año`=?, `3er_año`=?, `4to_año`=?, `5to_año`=? WHERE id=?';
        const values = [anio_evaluacion, primer_año, segundo_año, tercero_año, cuarto_año, quinto_año, id];
        query(sql, values, callback);
    }

    deleteEstudiantes(id, callback) {
        const sql = 'DELETE FROM estudiantes_investigando WHERE id=?';
        query(sql, [id], callback);
    }
}

export const estudiantesInvestigandoModel = new EstudiantesInvestigando();
