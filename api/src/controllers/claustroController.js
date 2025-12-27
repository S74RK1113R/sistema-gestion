import { claustrosModel } from '../models/claustroModel.js';

export function getClaustros(req, res) {
    claustrosModel.getClaustros((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postClaustros(req, res) {
    const total_claustro = req.body.total_claustro ?? null;
    const drc = req.body['dr.c'] ?? req.body.drc ?? req.body['dr_c'] ?? null;
    const drc_equivalentes = req.body['dr.c/equivalentes'] ?? req.body.drc_equivalentes ?? req.body.drcEquivalentes ?? null;
    const drc_afin = req.body['dr.c/afin'] ?? req.body.drc_afin ?? req.body.drcAfin ?? null;
    const mc_equivalentes = req.body['mc/equivalentes'] ?? req.body.mc_equivalentes ?? req.body.mcEquivalentes ?? null;
    const pt_pa = req.body['pt/pa'] ?? req.body.pt_pa ?? req.body.ptpa ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    claustrosModel.postClaustros(total_claustro, drc, drc_equivalentes, drc_afin, mc_equivalentes, pt_pa, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Registro de claustro creado exitosamente', data: { idInserted: result } });
    });
}

export function putClaustros(req, res) {
    const { id } = req.params;
    const total_claustro = req.body.total_claustro ?? null;
    const drc = req.body['dr.c'] ?? req.body.drc ?? req.body['dr_c'] ?? null;
    const drc_equivalentes = req.body['dr.c/equivalentes'] ?? req.body.drc_equivalentes ?? req.body.drcEquivalentes ?? null;
    const drc_afin = req.body['dr.c/afin'] ?? req.body.drc_afin ?? req.body.drcAfin ?? null;
    const mc_equivalentes = req.body['mc/equivalentes'] ?? req.body.mc_equivalentes ?? req.body.mcEquivalentes ?? null;
    const pt_pa = req.body['pt/pa'] ?? req.body.pt_pa ?? req.body.ptpa ?? null;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;

    claustrosModel.putClaustros(id, total_claustro, drc, drc_equivalentes, drc_afin, mc_equivalentes, pt_pa, anio_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro de claustro no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de claustro actualizado exitosamente' });
    });
}

export function deleteClaustros(req, res) {
    const { id } = req.params;
    claustrosModel.deleteClaustros(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro de claustro no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de claustro eliminado exitosamente' });
    });
}
