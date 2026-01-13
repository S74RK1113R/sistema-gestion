import { query } from '../config/dbConfig.js';

class Ayudantias {
    getAyudantias(callback) {
        const sql = 'SELECT * FROM ayudantia';
        query(sql, callback);
    }

    postAyudantias(educacion_superior_1er_año, educacion_superior_2do_año, educacion_superior_3er_año, educacion_superior_4to_año, educacion_superior_5to_año, educacion_media_1er_año, educacion_media_2do_año, educacion_media_3er_año, educacion_media_4to_año, educacion_media_5to_año, año_evaluacion, callback) {

        const sql = 'INSERT INTO ayudantia ( `educacion_superior_1er_año`, `educacion_superior_2do_año`, `educacion_superior_3er_año`, `educacion_superior_4to_año`, `educacion_superior_5to_año`, `educacion_media_1er_año`, `educacion_media_2do_año`, `educacion_media_3er_año`, `educacion_media_4to_año`, `educacion_media_5to_año`, `año_evaluacion`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        const values = [educacion_superior_1er_año, educacion_superior_2do_año, educacion_superior_3er_año, educacion_superior_4to_año, educacion_superior_5to_año, educacion_media_1er_año, educacion_media_2do_año, educacion_media_3er_año, educacion_media_4to_año, educacion_media_5to_año, año_evaluacion];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putAyudantias(educacion_superior_1er_año, educacion_superior_2do_año, educacion_superior_3er_año, educacion_superior_4to_año, educacion_superior_5to_año, educacion_media_1er_año, educacion_media_2do_año, educacion_media_3er_año, educacion_media_4to_año, educacion_media_5to_año, año_evaluacion, id, callback) {

        const sql = 'UPDATE ayudantia SET `educacion_superior_1er_año`=?, `educacion_superior_2do_año`=?, `educacion_superior_3er_año`=?, `educacion_superior_4to_año`=?, `educacion_superior_5to_año`=?, `educacion_media_1er_año`=?, `educacion_media_2do_año`=?, `educacion_media_3er_año`=?, `educacion_media_4to_año`=?, `educacion_media_5to_año`=?, `año_evaluacion`=? WHERE id=?';

        const values = [educacion_superior_1er_año, educacion_superior_2do_año, educacion_superior_3er_año, educacion_superior_4to_año, educacion_superior_5to_año, educacion_media_1er_año, educacion_media_2do_año, educacion_media_3er_año, educacion_media_4to_año, educacion_media_5to_año, año_evaluacion, id];
        
        query(sql, values, callback);
    }

    deleteAyudantias(id, callback) {
        const sql = 'DELETE FROM ayudantia WHERE id=?';
        query(sql, [id], callback);
    }
}

export const ayudantiasModel = new Ayudantias();
