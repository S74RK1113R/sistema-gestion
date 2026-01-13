import { ejerciciosIntegradoresModel } from '../models/ejerciciosIntegradoresModel.js';

export function getEjercicios(req, res) {
    ejerciciosIntegradoresModel.getEjercicios((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postEjercicios(req, res) {
    const { matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año, año_evaluacion } = req.body;

    ejerciciosIntegradoresModel.postEjercicios(matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año, año_evaluacion, (err, result) => {

        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Registro de ejercicios integradores creado exitosamente', data: { idInserted: result } });
    });
}

export function putEjercicios(req, res) {
    const { id } = req.params;
    const { matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año, año_evaluacion } = req.body;

    ejerciciosIntegradoresModel.putEjercicios(id, matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año, año_evaluacion, (err,result) => {
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

export function deleteEjercicios(req, res) {
    const { id } = req.params;
    ejerciciosIntegradoresModel.deleteEjercicios(id, (err, result) => {
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
