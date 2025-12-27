import { profesoresIncorporadosModel } from '../models/profesoresIncorporadosModel.js';

export function getProfesoresIncorporados(req, res) {
    profesoresIncorporadosModel.getProfesoresIncorporados((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postProfesoresIncorporados(req, res) {
    const cantidad = req.body.cantidad ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    profesoresIncorporadosModel.postProfesoresIncorporados(cantidad, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Registro de profesores incorporados creado', data: { idInserted: result } });
    });
}

export function putProfesoresIncorporados(req, res) {
    const { id } = req.params;
    const cantidad = req.body.cantidad ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    profesoresIncorporadosModel.putProfesoresIncorporados(id, cantidad, anio_evaluacion, (err, result) => {
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

export function deleteProfesoresIncorporados(req, res) {
    const { id } = req.params;
    profesoresIncorporadosModel.deleteProfesoresIncorporados(id, (err, result) => {
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
