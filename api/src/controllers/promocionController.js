import { promocionModel } from '../models/promocionModel.js';

export function getPromociones(req, res) {
    promocionModel.getPromociones((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postPromociones(req, res) {
    const anio_academico = req.body['año_academico'] ?? req.body.anio_academico ?? null;
    const mie = req.body.mie ?? null;
    const aprobados_limpios = req.body['aprobados limpios'] ?? req.body.aprobados_limpios ?? req.body.aprobadosLimpios ?? null;
    const aprobados_con_1 = req.body['aprobados con 1'] ?? req.body.aprobados_con_1 ?? req.body.aprobadosCon1 ?? null;
    const aprobados_con_2 = req.body['aprobados con 2'] ?? req.body.aprobados_con_2 ?? req.body.aprobadosCon2 ?? null;
    const bajas = req.body.bajas ?? null;
    const curso_id = req.body.curso_id ?? req.body.cursoId ?? null;

    promocionModel.postPromociones(anio_academico, mie, aprobados_limpios, aprobados_con_1, aprobados_con_2, bajas, curso_id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Registro de promoción creado', data: { idInserted: result } });
    });
}

export function putPromociones(req, res) {
    const { id } = req.params;
    const anio_academico = req.body['año_academico'] ?? req.body.anio_academico ?? null;
    const mie = req.body.mie ?? null;
    const aprobados_limpios = req.body['aprobados limpios'] ?? req.body.aprobados_limpios ?? req.body.aprobadosLimpios ?? null;
    const aprobados_con_1 = req.body['aprobados con 1'] ?? req.body.aprobados_con_1 ?? req.body.aprobadosCon1 ?? null;
    const aprobados_con_2 = req.body['aprobados con 2'] ?? req.body.aprobados_con_2 ?? req.body.aprobadosCon2 ?? null;
    const bajas = req.body.bajas ?? null;
    const curso_id = req.body.curso_id ?? req.body.cursoId ?? null;

    promocionModel.putPromociones(id, anio_academico, mie, aprobados_limpios, aprobados_con_1, aprobados_con_2, bajas, curso_id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de promoción actualizado exitosamente' });
    });
}

export function deletePromociones(req, res) {
    const { id } = req.params;
    promocionModel.deletePromociones(id, (err, result) => {
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
