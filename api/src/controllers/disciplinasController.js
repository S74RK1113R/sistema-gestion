import { disciplinasModel } from '../models/disciplinasModel.js';

export function getDisciplinas(req, res) {
    disciplinasModel.getDisciplinas((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postDisciplinas(req, res) {
    const { nombre, codigo } = req.body;

    disciplinasModel.postDisciplinas(nombre, codigo, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Disciplina creada exitosamente', data: { idInserted: result } });
    });
}

export function putDisciplinas(req, res) {
    const { id } = req.params;
    const { nombre, codigo } = req.body;

    disciplinasModel.putDisciplinas(id, nombre, codigo, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Disciplina no encontrada' });
            return;
        }

        res.status(200).json({ message: 'Disciplina actualizada exitosamente' });
    });
}

export function deleteDisciplinas(req, res) {
    const { id } = req.params;
    disciplinasModel.deleteDisciplinas(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Disciplina no encontrada' });
            return;
        }

        res.status(200).json({ message: 'Disciplina eliminada exitosamente' });
    });
}
