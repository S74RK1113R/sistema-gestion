import { query } from '../config/dbConfig.js';

class Disciplinas {
    getDisciplinas(callback) {
        const sql = 'SELECT * FROM disciplina';
        query(sql, callback);
    }

    postDisciplinas(nombre, codigo, callback) {
        const sql = 'INSERT INTO disciplina (`nombre`, `codigo`) VALUES (?, ?)';
        query(sql, [nombre, codigo], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putDisciplinas(id, nombre, codigo, callback) {
        const sql = 'UPDATE disciplina SET nombre=?, codigo=? WHERE id=?';
        query(sql, [nombre, codigo, id], callback);
    }

    deleteDisciplinas(id, callback) {
        const sql = 'DELETE FROM disciplina WHERE id=?';
        query(sql, [id], callback);
    }
}

export const disciplinasModel = new Disciplinas();
