import { query } from '../config/dbConfig.js';

class Publicaciones {
    getPublicaciones(callback) {
        const sql = 'SELECT * FROM publicacion';
        query(sql, callback);
    }

    postPublicacion(anio, titulo, revistaEditorial, isbnIssn, clasificacion, bd_revista, autor_profesor_id, coautor_id, coautor_id_2, coautor_id_3, grupo, callback) {
        const sql = 'INSERT INTO publicacion (`año`, titulo, `revista_editorial`, `isbn_issn`, clasificacion, bd_revista, autor_profesor_id, coautor_id, coautor_id_2, coautor_id_3, grupo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [anio, titulo, revistaEditorial, isbnIssn, clasificacion, bd_revista, autor_profesor_id, coautor_id, coautor_id_2, coautor_id_3, grupo];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putPublicacion(id, anio, titulo, revistaEditorial, isbnIssn, clasificacion, bd_revista, autor_profesor_id, coautor_id, coautor_id_2, coautor_id_3, grupo, callback) {
        const sql = 'UPDATE publicacion SET `año`=?, titulo=?, `revista_editorial`=?, `isbn_issn`=?, clasificacion=?, bd_revista=?, autor_profesor_id=?, coautor_id=?, coautor_id_2=?, coautor_id_3=?, grupo=? WHERE id=?';
        const values = [anio, titulo, revistaEditorial, isbnIssn, clasificacion, bd_revista, autor_profesor_id, coautor_id, coautor_id_2, coautor_id_3, grupo, id];
        query(sql, values, callback);
    }

    deletePublicacion(id, callback) {
        const sql = 'DELETE FROM publicacion WHERE id=?';
        query(sql, [id], callback);
    }
}

export const publicacionModel = new Publicaciones();
