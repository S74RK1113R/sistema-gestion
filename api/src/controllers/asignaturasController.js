import { asignaturasModel } from '../models/asignaturaModel.js';

export function getAsignaturas(req, res) {
    asignaturasModel.getAsignaturas((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postAsignaturas(req, res) {
    const {
        nombre,
        codigo,
        disciplinas_id,
        intranet,
        bibliografia,
        periodo,
        modalidad,
        curriculo
    } = req.body;

    // 'año' puede venir con la ñ; aceptamos también 'anio' como alternativa
    const anio = req.body['año'] ?? req.body.anio ?? null;

    asignaturasModel.postAsignaturas(nombre, codigo, disciplinas_id, intranet, bibliografia, anio, periodo, modalidad, curriculo, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Asignatura creada exitosamente', data: { idInserted: result } });
    });
}

export function putAsignaturas(req, res) {
    const { id } = req.params;
    const {
        nombre,
        codigo,
        disciplinas_id,
        intranet,
        bibliografia,
        periodo,
        modalidad,
        curriculo
    } = req.body;
    const anio = req.body['año'] ?? req.body.anio ?? null;

    asignaturasModel.putAsignaturas(id, nombre, codigo, disciplinas_id, intranet, bibliografia, anio, periodo, modalidad, curriculo, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Asignatura no encontrada' });
            return;
        }

        res.status(200).json({ message: 'Asignatura actualizada exitosamente' });
    });
}

export function deleteAsignaturas(req, res) {
    const { id } = req.params;
    asignaturasModel.deleteAsignaturas(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Asignatura no encontrada' });
            return;
        }

        res.status(200).json({ message: 'Asignatura eliminada exitosamente' });
    });
}
