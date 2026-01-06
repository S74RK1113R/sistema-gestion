import { query } from '../config/dbConfig.js';

class Asignaturas {
    getAsignaturas(callback) {
        const sql = 'SELECT * FROM asignatura';
        query(sql, callback);
    }

    postAsignaturas(nombre, codigo, disciplinas_id, intranet, bibliografia, anio, periodo, modalidad, curriculo, callback) {
        const sql = 'INSERT INTO asignatura (`nombre`, `codigo`, `disciplinas_id`, `intranet`, `bibliografia`, `año`, `periodo`, `modalidad`, `curriculo`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [nombre, codigo, disciplinas_id, intranet, bibliografia, anio, periodo, modalidad, curriculo];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putAsignaturas(id, nombre, codigo, disciplinas_id, intranet, bibliografia, anio, periodo, modalidad, curriculo, callback) {
        const sql = 'UPDATE asignatura SET nombre=?, codigo=?, disciplinas_id=?, intranet=?, bibliografia=?, `año`=?, periodo=?, modalidad=?, curriculo=? WHERE id=?';
        const values = [nombre, codigo, disciplinas_id, intranet, bibliografia, anio, periodo, modalidad, curriculo, id];
        query(sql, values, callback);
    }

    deleteAsignaturas(id, callback) {
        const sql = 'DELETE FROM asignatura WHERE id=?';
        query(sql, [id], callback);
    }
}

export const asignaturasModel = new Asignaturas();
