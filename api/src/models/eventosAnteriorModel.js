import { query } from '../config/dbConfig.js';

class EventosAnterior {
    getEventosAnterior(callback) {
        const sql = 'SELECT * FROM eventos_anterior';
        query(sql, callback);
    }

    postEventosAnterior(nacionalInternacional, total, anioEvaluacion, callback) {
        const sql = 'INSERT INTO eventos_anterior (`nacional_internacional`, `total`, `año_evaluacion`) VALUES (?, ?, ?)';
        const values = [nacionalInternacional, total, anioEvaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putEventosAnterior(id, nacionalInternacional, total, anioEvaluacion, callback) {
        const sql = 'UPDATE eventos_anterior SET `nacional_internacional`=?, `total`=?, `año_evaluacion`=? WHERE id=?';
        const values = [nacionalInternacional, total, anioEvaluacion, id];
        query(sql, values, callback);
    }

    deleteEventosAnterior(id, callback) {
        const sql = 'DELETE FROM eventos_anterior WHERE id=?';
        query(sql, [id], callback);
    }
}

export const eventosAnteriorModel = new EventosAnterior();
