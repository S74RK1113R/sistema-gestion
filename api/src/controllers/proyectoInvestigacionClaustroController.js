import { proyectoInvestigacionClaustroModel } from '../models/proyectoInvestigacionClaustroModel.js';

export function getProyectos(req, res) {
    proyectoInvestigacionClaustroModel.getProyectos((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postProyectos(req, res) {
    const clasificacion = req.body.clasificacion ?? null;
    const cantidad = req.body.cantidad ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    proyectoInvestigacionClaustroModel.postProyectos(clasificacion, cantidad, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Registro creado exitosamente', data: { idInserted: result } });
    });
}

export function putProyectos(req, res) {
    const { id } = req.params;
    const clasificacion = req.body.clasificacion ?? null;
    const cantidad = req.body.cantidad ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    proyectoInvestigacionClaustroModel.putProyectos(id, clasificacion, cantidad, anio_evaluacion, (err, result) => {
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

export function deleteProyectos(req, res) {
    const { id } = req.params;
    proyectoInvestigacionClaustroModel.deleteProyectos(id, (err, result) => {
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
