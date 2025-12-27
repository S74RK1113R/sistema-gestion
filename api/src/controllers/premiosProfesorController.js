import { premiosProfesorModel } from '../models/premiosProfesorModel.js';

export function getPremiosProfesor(req, res) {
    premiosProfesorModel.getPremios((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postPremiosProfesor(req, res) {
    const profesor_id = req.body.profesor_id ?? null;
    const nombre_premio = req.body.nombre_premio ?? null;
    const anio = req.body['año'] ?? req.body.anio ?? null;

    premiosProfesorModel.postPremios(profesor_id, nombre_premio, anio, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Premio de profesor creado exitosamente', data: { idInserted: result } });
    });
}

export function putPremiosProfesor(req, res) {
    const { id } = req.params;
    const profesor_id = req.body.profesor_id ?? null;
    const nombre_premio = req.body.nombre_premio ?? null;
    const anio = req.body['año'] ?? req.body.anio ?? null;

    premiosProfesorModel.putPremios(id, profesor_id, nombre_premio, anio, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Premio no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Premio actualizado exitosamente' });
    });
}

export function deletePremiosProfesor(req, res) {
    const { id } = req.params;
    premiosProfesorModel.deletePremios(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Premio no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Premio eliminado exitosamente' });
    });
}
