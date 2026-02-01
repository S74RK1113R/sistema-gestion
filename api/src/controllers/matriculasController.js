import { matriculasModel } from '../models/matriculaModel.js';

export function getMatriculas(req, res) {
    matriculasModel.getMatriculas((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postMatriculas(req, res) {
    const primer_anio = req.body['p1er_año'] ?? req.body.primer_año ?? req.body.primer ?? null;
    const segundo_anio = req.body['s2do_año'] ?? req.body.segundo_año ?? req.body.segundo ?? null;
    const tercero_anio = req.body['t3er_año'] ?? req.body.tercero_año ?? req.body.tercero ?? null;
    const cuarto_anio = req.body['c4to_año'] ?? req.body.cuarto_año ?? req.body.cuarto ?? null;
    const quinto_aniol = req.body['q5to_año'] ?? req.body['5to_año'] ?? req.body.quinto_año ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    matriculasModel.postMatriculas(primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Registro de matrícula creado exitosamente', data: { idInserted: result } });
    });
}

export function putMatriculas(req, res) {
    const { id } = req.params;
    const primer_anio = req.body['1er_año'] ?? req.body.primer_año ?? req.body.primer ?? null;
    const segundo_anio = req.body['2do_año'] ?? req.body.segundo_año ?? req.body.segundo ?? null;
    const tercero_anio = req.body['3er_año'] ?? req.body.tercero_año ?? req.body.tercero ?? null;
    const cuarto_anio = req.body['4to_año'] ?? req.body.cuarto_año ?? req.body.cuarto ?? null;
    const quinto_aniol = req.body['5to_añol'] ?? req.body['5to_año'] ?? req.body.quinto_año ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    matriculasModel.putMatriculas(id, primer_anio, segundo_anio, tercero_anio, cuarto_anio, quinto_aniol, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro de matrícula no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de matrícula actualizado exitosamente' });
    });
}

export function deleteMatriculas(req, res) {
    const { id } = req.params;
    matriculasModel.deleteMatriculas(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro de matrícula no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de matrícula eliminado exitosamente' });
    });
}
