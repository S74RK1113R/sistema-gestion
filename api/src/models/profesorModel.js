import { query } from '../config/dbConfig.js';

class Profesores {
    getProfesores(callback) {
        const sql = 'SELECT * FROM profesor';
        query(sql, callback);
    }

    postProfesores(primer_apellido, segundo_apellido, nombres, exp_educacion_superior, exp_carrera, lugar_procedencia, categoria_docente, funcion, consultante_emerito, grado_cientifico, doctor_esp_afin, asignatura_id, asignatura_id_2, asignatura_id_3, asignatura_id_4, asignatura_id_5, asignatura_id_6, participacion_posgrado, profesor_principal_anyo, sede_universitaria_id, callback) {
        const sql = 'INSERT INTO profesor (`primer_apellido`, `segundo_apellido`, `nombres`, `exp_educacion_superior`, `exp_carrera`, `lugar_procedencia`, `categoria_docente`, `funcion`, `consultante/emerito`, `grado_cientifico`, `doctor_esp_afin`, `asignatura_id`, `asignatura_id_2`, `asignatura_id_3`, `asignatura_id_4`, `asignatura_id_5`, `asignatura_id_6`, `participacion_posgrado`, `profesor_principal_año`, `sede_universitaria_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [primer_apellido, segundo_apellido, nombres, exp_educacion_superior, exp_carrera, lugar_procedencia, categoria_docente, funcion, consultante_emerito, grado_cientifico, doctor_esp_afin, asignatura_id, asignatura_id_2, asignatura_id_3, asignatura_id_4, asignatura_id_5, asignatura_id_6, participacion_posgrado, profesor_principal_anyo, sede_universitaria_id];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putProfesores(id, primer_apellido, segundo_apellido, nombres, exp_educacion_superior, exp_carrera, lugar_procedencia, categoria_docente, funcion, consultante_emerito, grado_cientifico, doctor_esp_afin, asignatura_id, asignatura_id_2, asignatura_id_3, asignatura_id_4, asignatura_id_5, asignatura_id_6, participacion_posgrado, profesor_principal_anyo, sede_universitaria_id, callback) {
        const sql = 'UPDATE profesor SET `primer_apellido`=?, `segundo_apellido`=?, `nombres`=?, `exp_educacion_superior`=?, `exp_carrera`=?, `lugar_procedencia`=?, `categoria_docente`=?, `funcion`=?, `consultante/emerito`=?, `grado_cientifico`=?, `doctor_esp_afin`=?, `asignatura_id`=?, `asignatura_id_2`=?, `asignatura_id_3`=?, `asignatura_id_4`=?, `asignatura_id_5`=?, `asignatura_id_6`=?, `participacion_posgrado`=?, `profesor_principal_año`=?, `sede_universitaria_id`=? WHERE id=?';
        const values = [primer_apellido, segundo_apellido, nombres, exp_educacion_superior, exp_carrera, lugar_procedencia, categoria_docente, funcion, consultante_emerito, grado_cientifico, doctor_esp_afin, asignatura_id, asignatura_id_2, asignatura_id_3, asignatura_id_4, asignatura_id_5, asignatura_id_6, participacion_posgrado, profesor_principal_anyo, sede_universitaria_id, id];
        query(sql, values, callback);
    }

    deleteProfesores(id, callback) {
        const sql = 'DELETE FROM profesor WHERE id=?';
        query(sql, [id], callback);
    }
}

export const profesoresModel = new Profesores();
