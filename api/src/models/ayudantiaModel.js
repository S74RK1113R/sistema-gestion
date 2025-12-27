import { query } from '../config/dbConfig.js';

class Ayudantias {
    getAyudantias(callback) {
        const sql = 'SELECT * FROM ayudantia';
        query(sql, callback);
    }

    postAyudantias(anio, educacion_superior, educacion_media, anio_evaluacion, callback) {
        const sql = 'INSERT INTO ayudantia (`año`, `educacion_superior`, `educacion_media`, `año_evaluacion`) VALUES (?, ?, ?, ?)';
        const values = [anio, educacion_superior, educacion_media, anio_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putAyudantias(id, anio, educacion_superior, educacion_media, anio_evaluacion, callback) {
        const sql = 'UPDATE ayudantia SET `año`=?, educacion_superior=?, educacion_media=?, `año_evaluacion`=? WHERE id=?';
        const values = [anio, educacion_superior, educacion_media, anio_evaluacion, id];
        query(sql, values, callback);
    }

    deleteAyudantias(id, callback) {
        const sql = 'DELETE FROM ayudantia WHERE id=?';
        query(sql, [id], callback);
    }
}

export const ayudantiasModel = new Ayudantias();
