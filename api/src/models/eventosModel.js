import { query } from '../config/dbConfig.js';


class Eventos {
    getEventos(callback) {
        const sql = 'SELECT * FROM eventos';
        query(sql, callback);
    }

    postEventos(año, titulo, nombre_evento, clasificacion, profesor_id, profesor_autor_id2, profesor_autor_id3, profesor_autor_id4, profesor_autor_id5 ,callback) {

        const sql = 'INSERT INTO eventos (año, titulo, nombre_evento, clasificacion, profesor_id, profesor_autor_id2, profesor_autor_id3, profesor_autor_id4, profesor_autor_id5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

        const values = [año, titulo, nombre_evento, clasificacion, profesor_id, profesor_autor_id2, profesor_autor_id3, profesor_autor_id4, profesor_autor_id5];

        query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putEventos(año, titulo, nombre_evento, clasificacion, profesor_id, profesor_autor_id2, profesor_autor_id3, profesor_autor_id4, profesor_autor_id5 ,id, callback) {

        const sql = 'UPDATE eventos SET año=?, titulo=?, nombre_evento=?, clasificacion=?, profesor_id=?, profesor_autor_id2=?, profesor_autor_id3=?, profesor_autor_id4=?, profesor_autor_id5=? WHERE id=?';

        const values = [año, titulo, nombre_evento, clasificacion, profesor_id, profesor_autor_id2, profesor_autor_id3, profesor_autor_id4, profesor_autor_id5, id];
        
        query(sql, values, callback);
    }

    deleteEventos(id, callback) {
        const sql = 'DELETE FROM eventos WHERE id=?';
        query(sql, [id], callback);
    }
}

export const eventosModel = new Eventos();
