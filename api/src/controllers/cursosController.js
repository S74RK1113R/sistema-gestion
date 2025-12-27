import { cursosModel } from '../models/cursoModel.js';

export function getCursos(req, res) {
    cursosModel.getCursos((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postCursos(req, res) {
    const { curso } = req.body;

    cursosModel.postCursos(curso, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Curso creado exitosamente', data: { idInserted: result } });
    });
}

export function putCursos(req, res) {
    const { id } = req.params;
    const { curso } = req.body;

    cursosModel.putCursos(id, curso, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Curso no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Curso actualizado exitosamente' });
    });
}

export function deleteCursos(req, res) {
    const { id } = req.params;
    cursosModel.deleteCursos(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Curso no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Curso eliminado exitosamente' });
    });
}
