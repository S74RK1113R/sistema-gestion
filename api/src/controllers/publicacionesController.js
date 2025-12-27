import { publicacionesModel } from '../models/publicacionesModel.js';

export function getPublicaciones(req, res) {
    publicacionesModel.getPublicaciones((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postPublicacion(req, res) {
    const grupos1_4 = req.body.grupos1_4 ?? req.body.grupos_1_4 ?? req.body.grupos ?? null;
    const total = req.body.total ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    publicacionesModel.postPublicacion(grupos1_4, total, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Registro de publicaciones creado', data: { idInserted: result } });
    });
}

export function putPublicacion(req, res) {
    const { id } = req.params;
    const grupos1_4 = req.body.grupos1_4 ?? req.body.grupos_1_4 ?? req.body.grupos ?? null;
    const total = req.body.total ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    publicacionesModel.putPublicacion(id, grupos1_4, total, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de publicaciones actualizado exitosamente' });
    });
}

export function deletePublicacion(req, res) {
    const { id } = req.params;
    publicacionesModel.deletePublicacion(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro eliminado exitosamente' });
    });
}
