import { profesorPrincipalModel } from '../models/profesorPrincipalModel.js';

export function getProfesorPrincipales(req, res) {
    profesorPrincipalModel.getProfesorPrincipales((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postProfesorPrincipales(req, res) {
    const disciplina_id = req.body.disciplina_id ?? req.body.disciplinaId ?? null;
    const profesor_id = req.body.profesor_id ?? req.body.profesorId ?? null;

    profesorPrincipalModel.postProfesorPrincipales(disciplina_id, profesor_id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Profesor principal asignado', data: { idInserted: result } });
    });
}

export function putProfesorPrincipales(req, res) {
    const { id } = req.params;
    const disciplina_id = req.body.disciplina_id ?? req.body.disciplinaId ?? null;
    const profesor_id = req.body.profesor_id ?? req.body.profesorId ?? null;

    profesorPrincipalModel.putProfesorPrincipales(id, disciplina_id, profesor_id, (err, result) => {
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

export function deleteProfesorPrincipales(req, res) {
    const { id } = req.params;
    profesorPrincipalModel.deleteProfesorPrincipales(id, (err, result) => {
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
