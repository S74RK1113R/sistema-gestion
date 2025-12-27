import { totalGraduadosModel } from '../models/totalGraduadosModel.js';

export function getTotalGraduados(req, res) {
    totalGraduadosModel.getTotalGraduados((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postTotalGraduados(req, res) {
    const cd = req.body.cd ?? req.body.CD ?? null;
    const cpe = req.body.cpe ?? req.body.CPE ?? null;
    const curso_id = req.body.curso_id ?? req.body.cursoId ?? req.body.curso_id ?? null;

    totalGraduadosModel.postTotalGraduados(cd, cpe, curso_id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Total graduados creado', data: { idInserted: result } });
    });
}

export function putTotalGraduados(req, res) {
    const { id } = req.params;
    const cd = req.body.cd ?? req.body.CD ?? null;
    const cpe = req.body.cpe ?? req.body.CPE ?? null;
    const curso_id = req.body.curso_id ?? req.body.cursoId ?? null;

    totalGraduadosModel.putTotalGraduados(id, cd, cpe, curso_id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Total graduados actualizado' });
    });
}

export function deleteTotalGraduados(req, res) {
    const { id } = req.params;
    totalGraduadosModel.deleteTotalGraduados(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro eliminado' });
    });
}
