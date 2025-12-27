import { query } from '../config/dbConfig.js';

class ProfesorPrincipal {
    getProfesorPrincipales(callback) {
        const sql = 'SELECT * FROM profesor_principal';
        query(sql, callback);
    }

    postProfesorPrincipales(disciplina_id, profesor_id, callback) {
        const sql = 'INSERT INTO profesor_principal (disciplina_id, profesor_id) VALUES (?, ?)';
        query(sql, [disciplina_id, profesor_id], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putProfesorPrincipales(id, disciplina_id, profesor_id, callback) {
        const sql = 'UPDATE profesor_principal SET disciplina_id=?, profesor_id=? WHERE id=?';
        query(sql, [disciplina_id, profesor_id, id], callback);
    }

    deleteProfesorPrincipales(id, callback) {
        const sql = 'DELETE FROM profesor_principal WHERE id=?';
        query(sql, [id], callback);
    }
}

export const profesorPrincipalModel = new ProfesorPrincipal();
