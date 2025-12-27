import { ejerciciosIntegradoresModel } from '../models/ejerciciosIntegradoresModel.js';

export function getEjercicios(req, res) {
    ejerciciosIntegradoresModel.getEjercicios((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postEjercicios(req, res) {
    const matricula = req.body.matricula ?? null;
    const evaluados = req.body.evaluados ?? null;
    const con_2 = req.body.con_2 ?? req.body['con-2'] ?? null;
    const con_3 = req.body.con_3 ?? req.body['con-3'] ?? null;
    const con_4 = req.body.con_4 ?? req.body['con-4'] ?? null;
    const con_5 = req.body.con_5 ?? req.body['con-5'] ?? null;
    const anio = req.body['año'] ?? req.body.anio ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    ejerciciosIntegradoresModel.postEjercicios(anio, matricula, evaluados, con_2, con_3, con_4, con_5, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Registro de ejercicios integradores creado exitosamente', data: { idInserted: result } });
    });
}

export function putEjercicios(req, res) {
    const { id } = req.params;
    const matricula = req.body.matricula ?? null;
    const evaluados = req.body.evaluados ?? null;
    const con_2 = req.body.con_2 ?? req.body['con-2'] ?? null;
    const con_3 = req.body.con_3 ?? req.body['con-3'] ?? null;
    const con_4 = req.body.con_4 ?? req.body['con-4'] ?? null;
    const con_5 = req.body.con_5 ?? req.body['con-5'] ?? null;
    const anio = req.body['año'] ?? req.body.anio ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    ejerciciosIntegradoresModel.putEjercicios(id, anio, matricula, evaluados, con_2, con_3, con_4, con_5, anio_evaluacion, (err, result) => {
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

export function deleteEjercicios(req, res) {
    const { id } = req.params;
    ejerciciosIntegradoresModel.deleteEjercicios(id, (err, result) => {
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
