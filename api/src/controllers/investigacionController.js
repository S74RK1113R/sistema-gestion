import { investigacionModel } from '../models/investigacionModel.js';

export function getInvestigacion(req, res) {
    investigacionModel.getInvestigacion((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postInvestigacion(req, res) {
    const proyectos_investigacion = req.body.proyectos_investigacion ?? null;
    const porciento_estudiantes_vinculados = req.body.porciento_estudiantes_vinculados ?? req.body.porcentaje_estudiantes ?? null;
    const porciento_profesores_vinculados = req.body.porciento_profesores_vinculados ?? req.body.porcentaje_profesores ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    investigacionModel.postInvestigacion(proyectos_investigacion, porciento_estudiantes_vinculados, porciento_profesores_vinculados, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Registro de investigación creado', data: { idInserted: result } });
    });
}

export function putInvestigacion(req, res) {
    const { id } = req.params;
    const proyectos_investigacion = req.body.proyectos_investigacion ?? null;
    const porciento_estudiantes_vinculados = req.body.porciento_estudiantes_vinculados ?? req.body.porcentaje_estudiantes ?? null;
    const porciento_profesores_vinculados = req.body.porciento_profesores_vinculados ?? req.body.porcentaje_profesores ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    investigacionModel.putInvestigacion(id, proyectos_investigacion, porciento_estudiantes_vinculados, porciento_profesores_vinculados, anio_evaluacion, (err, result) => {
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

export function deleteInvestigacion(req, res) {
    const { id } = req.params;
    investigacionModel.deleteInvestigacion(id, (err, result) => {
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
