import { resultadoEjerciciosIntegradoresModel } from '../models/resultadoEjerciciosIntegradoresModel.js';

export function getResultados(req, res) {
    resultadoEjerciciosIntegradoresModel.getResultados((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postResultados(req, res) {
    // Aceptar variantes de nombre: prociento/aprobados o porciento
    const porciento_aprobados = req.body.prociento_aprobados ?? req.body.porciento_aprobados ?? req.body.porcentaje_aprobados ?? null;
    const porciento_con_4_5 = req.body.porciento_con_4_5 ?? req.body.porcientoCon45 ?? req.body.porciento_con_4_5 ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    resultadoEjerciciosIntegradoresModel.postResultados(porciento_aprobados, porciento_con_4_5, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Registro creado exitosamente', data: { idInserted: result } });
    });
}

export function putResultados(req, res) {
    const { id } = req.params;
    const porciento_aprobados = req.body.prociento_aprobados ?? req.body.porciento_aprobados ?? req.body.porcentaje_aprobados ?? null;
    const porciento_con_4_5 = req.body.porciento_con_4_5 ?? req.body.porcientoCon45 ?? req.body.porciento_con_4_5 ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    resultadoEjerciciosIntegradoresModel.putResultados(id, porciento_aprobados, porciento_con_4_5, anio_evaluacion, (err, result) => {
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

export function deleteResultados(req, res) {
    const { id } = req.params;
    resultadoEjerciciosIntegradoresModel.deleteResultados(id, (err, result) => {
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
