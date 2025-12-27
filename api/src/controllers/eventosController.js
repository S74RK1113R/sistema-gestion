import { eventosModel } from '../models/eventosModel.js';

export function getEventos(req, res) {
    eventosModel.getEventos((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postEventos(req, res) {
    const nacionalInternacional = req.body['nacional/internacional'] ?? req.body.nacional_internacional ?? req.body.nacionalInternacional ?? null;
    const total = req.body.total ?? null;
    const anioEvaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? req.body.anioEvaluacion ?? null;

    eventosModel.postEventos(nacionalInternacional, total, anioEvaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Evento creado exitosamente', data: { idInserted: result } });
    });
}

export function putEventos(req, res) {
    const { id } = req.params;
    const nacionalInternacional = req.body['nacional/internacional'] ?? req.body.nacional_internacional ?? req.body.nacionalInternacional ?? null;
    const total = req.body.total ?? null;
    const anioEvaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? req.body.anioEvaluacion ?? null;

    eventosModel.putEventos(id, nacionalInternacional, total, anioEvaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Evento no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Evento actualizado exitosamente' });
    });
}

export function deleteEventos(req, res) {
    const { id } = req.params;
    eventosModel.deleteEventos(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Evento no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Evento eliminado exitosamente' });
    });
}
