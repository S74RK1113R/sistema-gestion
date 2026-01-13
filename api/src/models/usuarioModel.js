import { query } from '../config/dbConfig.js';

class Usuario{
    getUsers(callback) {
        const sql = 'SELECT * FROM usuario';
        query(sql, callback);
    }
    postUsers(usuario, contrasena, nombres, primer_apellido, segundo_apellido, callback) {
        const sql = 'INSERT INTO usuario (`usuario`, `contraseña`, `nombres`, `primer_apellido`, `segundo_apellido`) VALUES (?, ?, ?, ?, ?)';
        query(sql, [usuario, contrasena, nombres, primer_apellido, segundo_apellido], (err, result) => {
            
            if (err) {
                return callback(err,null);
            }
            callback(null, result.insertId);
        });
    }

    putUsers(id,usuario, contraseña,nombres,primer_apellido, segundo_apellido, callback) {
        const sql = 'UPDATE usuario SET usuario=?, contraseña=?, nombres=?, primer_apellido=?, segundo_apellido=? WHERE id=?';
        const values = [usuario, contraseña,nombres,primer_apellido, segundo_apellido,id];

        query(sql, values, callback);
    }

    deleteUsers(id, callback) {
        const sql = 'DELETE FROM usuario WHERE id=?';
        const values = [id];
        query(sql,values, callback)
    }

}

export const usuarioModel = new Usuario();