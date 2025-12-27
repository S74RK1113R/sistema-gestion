import { existenciaPosgradoModel } from '../models/existenciaPosgradoModel.js';

export function getExistencias(req, res) {
    existenciaPosgradoModel.getExistencias((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postExistencias(req, res) {
    const existencia = req.body.existencia ?? null;
    // Aceptar variantes y posibles typos en el nombre del campo
    const anioEvaluacion = req.body['año_evaluacion'] ?? req.body['año_evaluacioin'] ?? req.body.anio_evaluacion ?? null;

    existenciaPosgradoModel.postExistencias(existencia, anioEvaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Existencia de posgrado creada exitosamente', data: { idInserted: result } });
    });
}

export function putExistencias(req, res) {
    const { id } = req.params;
    const existencia = req.body.existencia ?? null;
    const anioEvaluacion = req.body['año_evaluacion'] ?? req.body['año_evaluacioin'] ?? req.body.anio_evaluacion ?? null;

    existenciaPosgradoModel.putExistencias(id, existencia, anioEvaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro actualizado exitosamente' });
    });
}

export function deleteExistencias(req, res) {
    const { id } = req.params;
    existenciaPosgradoModel.deleteExistencias(id, (err, result) => {
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
