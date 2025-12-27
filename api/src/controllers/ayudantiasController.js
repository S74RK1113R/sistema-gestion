import { ayudantiasModel } from '../models/ayudantiaModel.js';

export function getAyudantias(req, res) {
    ayudantiasModel.getAyudantias((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postAyudantias(req, res) {
    const { educacion_superior, educacion_media } = req.body;
    const anio = req.body['año'] ?? req.body.anio ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    ayudantiasModel.postAyudantias(anio, educacion_superior, educacion_media, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Registro de ayudantía creado exitosamente', data: { idInserted: result } });
    });
}

export function putAyudantias(req, res) {
    const { id } = req.params;
    const { educacion_superior, educacion_media } = req.body;
    const anio = req.body['año'] ?? req.body.anio ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    ayudantiasModel.putAyudantias(id, anio, educacion_superior, educacion_media, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro de ayudantía no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de ayudantía actualizado exitosamente' });
    });
}

export function deleteAyudantias(req, res) {
    const { id } = req.params;
    ayudantiasModel.deleteAyudantias(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro de ayudantía no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de ayudantía eliminado exitosamente' });
    });
}
