import { usuarioModel } from '../models/usuarioModel.js';

export function getUsers(req, res) {
    usuarioModel.getUsers((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postUsers(req, res) {
    const { usuario, contraseña: contrasena, nombres, primer_apellido, segundo_apellido, rol } = req.body;

    usuarioModel.postUsers(usuario, contrasena, nombres, primer_apellido, segundo_apellido, rol, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Usuario creado exitosamente', data: { idInserted: result } });
    });
}

export function putUsers(req, res) {
    const { id } = req.params;
    const { usuario, contraseña, nombres, primer_apellido, segundo_apellido, rol } = req.body;
    usuarioModel.putUsers(id, usuario, contraseña, nombres, primer_apellido, segundo_apellido,rol, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        // result puede ser undefined en casos raros; defensivamente validamos
        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    });
}

export function deleteUsers(req, res) {
    const { id } = req.params;
    usuarioModel.deleteUsers(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    });
}