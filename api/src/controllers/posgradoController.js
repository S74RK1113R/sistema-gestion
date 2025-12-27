import { posgradosModel } from '../models/posgradoModel.js';

export function getPosgrados(req, res) {
    posgradosModel.getPosgrados((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postPosgrados(req, res) {
    const { nombre, cantidad } = req.body;
    const anio = req.body['año'] ?? req.body.anio ?? null;

    posgradosModel.postPosgrados(nombre, anio, cantidad, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Posgrado creado exitosamente', data: { idInserted: result } });
    });
}

export function putPosgrados(req, res) {
    const { id } = req.params;
    const { nombre, cantidad } = req.body;
    const anio = req.body['año'] ?? req.body.anio ?? null;

    posgradosModel.putPosgrados(id, nombre, anio, cantidad, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Posgrado no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Posgrado actualizado exitosamente' });
    });
}

export function deletePosgrados(req, res) {
    const { id } = req.params;
    posgradosModel.deletePosgrados(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Posgrado no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Posgrado eliminado exitosamente' });
    });
}
