import { sedeUniversitariaModel } from '../models/sedeUniversitariaModel.js';

export function getSedes(req, res) {
    sedeUniversitariaModel.getSedes((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postSede(req, res) {
    const { nombre, clasificacion } = req.body;

    sedeUniversitariaModel.postSede(nombre, clasificacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Sede universitaria creada exitosamente', data: { idInserted: result } });
    });
}

export function putSede(req, res) {
    const { id } = req.params;
    const { nombre, clasificacion } = req.body;

    sedeUniversitariaModel.putSede(id, nombre, clasificacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Sede no encontrada' });
            return;
        }

        res.status(200).json({ message: 'Sede actualizada exitosamente' });
    });
}

export function deleteSede(req, res) {
    const { id } = req.params;
    sedeUniversitariaModel.deleteSede(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Sede no encontrada' });
            return;
        }

        res.status(200).json({ message: 'Sede eliminada exitosamente' });
    });
}
