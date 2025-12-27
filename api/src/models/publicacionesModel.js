import { query } from '../config/dbConfig.js';

class Publicaciones {
    getPublicaciones(callback) {
        const sql = 'SELECT * FROM publicaciones';
        query(sql, callback);
    }

    postPublicacion(grupos1_4, total, anio_evaluacion, callback) {
        const sql = 'INSERT INTO publicaciones (grupos1_4, `total`, `año_evaluacion`) VALUES (?, ?, ?)';
        const values = [grupos1_4, total, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putPublicacion(id, grupos1_4, total, anio_evaluacion, callback) {
        const sql = 'UPDATE publicaciones SET grupos1_4=?, `total`=?, `año_evaluacion`=? WHERE id=?';
        const values = [grupos1_4, total, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deletePublicacion(id, callback) {
        const sql = 'DELETE FROM publicaciones WHERE id=?';
        query(sql, [id], callback);
    }
}

export const publicacionesModel = new Publicaciones();
