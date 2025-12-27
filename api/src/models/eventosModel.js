import { query } from '../config/dbConfig.js';

class Eventos {
    getEventos(callback) {
        const sql = 'SELECT * FROM eventos';
        query(sql, callback);
    }

    postEventos(nacionalInternacional, total, anioEvaluacion, callback) {
        const sql = 'INSERT INTO eventos (`nacional/internacional`, `total`, `año_evaluacion`) VALUES (?, ?, ?)';
        const values = [nacionalInternacional, total, anioEvaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putEventos(id, nacionalInternacional, total, anioEvaluacion, callback) {
        const sql = 'UPDATE eventos SET `nacional/internacional`=?, `total`=?, `año_evaluacion`=? WHERE id=?';
        const values = [nacionalInternacional, total, anioEvaluacion, id];
        query(sql, values, callback);
    }

    deleteEventos(id, callback) {
        const sql = 'DELETE FROM eventos WHERE id=?';
        query(sql, [id], callback);
    }
}

export const eventosModel = new Eventos();
