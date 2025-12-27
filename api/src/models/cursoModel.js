import { query } from '../config/dbConfig.js';

class Cursos {
    getCursos(callback) {
        const sql = 'SELECT * FROM curso';
        query(sql, callback);
    }

    postCursos(curso, callback) {
        const sql = 'INSERT INTO curso (`curso`) VALUES (?)';
        query(sql, [curso], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putCursos(id, curso, callback) {
        const sql = 'UPDATE curso SET curso=? WHERE id=?';
        query(sql, [curso, id], callback);
    }

    deleteCursos(id, callback) {
        const sql = 'DELETE FROM curso WHERE id=?';
        query(sql, [id], callback);
    }
}

export const cursosModel = new Cursos();
