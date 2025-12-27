import { nivelAcreditacionModel } from '../models/nivelAcreditacionModel.js';

export function getNiveles(req, res) {
    nivelAcreditacionModel.getNiveles((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postNiveles(req, res) {
    const nivel = req.body.nivel ?? null;
    const anioEvaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    nivelAcreditacionModel.postNiveles(nivel, anioEvaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Nivel de acreditación creado exitosamente', data: { idInserted: result } });
    });
}

export function putNiveles(req, res) {
    const { id } = req.params;
    const nivel = req.body.nivel ?? null;
    const anioEvaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    nivelAcreditacionModel.putNiveles(id, nivel, anioEvaluacion, (err, result) => {
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

export function deleteNiveles(req, res) {
    const { id } = req.params;
    nivelAcreditacionModel.deleteNiveles(id, (err, result) => {
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
