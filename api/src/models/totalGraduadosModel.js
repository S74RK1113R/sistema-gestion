import { query } from '../config/dbConfig.js';

class TotalGraduados {
    getTotalGraduados(callback) {
        const sql = 'SELECT * FROM total_graduados';
        query(sql, callback);
    }

    postTotalGraduados(cd, cpe, curso_id, callback) {
        const sql = 'INSERT INTO total_graduados (cd, cpe, curso_id) VALUES (?, ?, ?)';
        query(sql, [cd, cpe, curso_id], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putTotalGraduados(id, cd, cpe, curso_id, callback) {
        const sql = 'UPDATE total_graduados SET cd=?, cpe=?, curso_id=? WHERE id=?';
        query(sql, [cd, cpe, curso_id, id], callback);
    }

    deleteTotalGraduados(id, callback) {
        const sql = 'DELETE FROM total_graduados WHERE id=?';
        query(sql, [id], callback);
    }
}

export const totalGraduadosModel = new TotalGraduados();
