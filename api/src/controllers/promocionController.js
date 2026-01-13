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
    const mie_1er_año = req.body.mie_1er_año; 
    const mie_2do_año = req.body.mie_2do_año;
    const mie_3er_año = req.body.mie_3er_año;
    const mie_4to_año = req.body.mie_3er_año;
    const mie_5to_año = req.body.mie_5to_año;
    const aprobados_limpios_1er_año = req.body.aprobados_con_1_1er_año;
    const aprobados_limpios_2do_año = req.body.aprobados_limpios_2do_año;
    const aprobados_limpios_3er_año = req.body.aprobados_limpios_3er_año;
    const aprobados_limpios_4to_año = req.body.aprobados_con_1_4to_año;
    const aprobados_limpios_5to_año = req.body.aprobados_con_1_5to_año;
    const aprobados_con_2_1er_año = req.body.aprobados_con_2_1er_año;
    const aprobados_con_2_2do_año = req.body.aprobados_con_2_2do_año;
    const aprobados_con_2_3er_año = req.body.aprobados_con_2_3er_año;
    const aprobados_con_2_4to_año = req.body.aprobados_con_2_4to_año;
    const aprobados_con_2_5to_año = req.body.aprobados_con_2_5to_año;
    const aprobados_con_1_1er_año = req.body.aprobados_con_1_1er_año;
    const aprobados_con_1_2do_año = req.body.aprobados_con_1_2do_año;
    const aprobados_con_1_3er_año = req.body.aprobados_con_1_3er_año;
    const aprobados_con_1_4to_año = req.body.aprobados_con_1_4to_año;
    const aprobados_con_1_5to_año = req.body.aprobados_con_1_5to_año;
    const bajas_1er_año = req.body.bajas_1er_año;
    const bajas_2do_año = req.body.bajas_2do_año;
    const bajas_3er_año = req.body.bajas_3er_año;
    const bajas_4to_año = req.body.bajas_4to_año;
    const bajas_5to_año = req.body.bajas_5to_año;
    const curso_id =  req.body.curso_id;

    promocionModel.postPromociones(mie_1er_año, mie_2do_año, mie_3er_año, mie_4to_año, mie_5to_año, aprobados_limpios_1er_año, aprobados_limpios_2do_año, aprobados_limpios_3er_año, aprobados_limpios_4to_año, aprobados_limpios_5to_año, aprobados_con_2_1er_año, aprobados_con_2_2do_año, aprobados_con_2_3er_año, aprobados_con_2_4to_año, aprobados_con_2_5to_año, aprobados_con_1_1er_año, aprobados_con_1_2do_año, aprobados_con_1_3er_año, aprobados_con_1_4to_año, aprobados_con_1_5to_año, bajas_1er_año, bajas_2do_año, bajas_3er_año, bajas_4to_año, bajas_5to_año, curso_id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Registro de promoción creado', data: { idInserted: result } });
    });
}

export function putPromociones(req, res) {
    const {id} = req.params;
    const mie_1er_año = req.body.mie_1er_año; 
    const mie_2do_año = req.body.mie_2do_año;
    const mie_3er_año = req.body.mie_3er_año;
    const mie_4to_año = req.body.mie_4to_año;
    const mie_5to_año = req.body.mie_5to_año;

    const aprobados_limpios_1er_año = req.body.aprobados_limpios_1er_año;
    const aprobados_limpios_2do_año = req.body.aprobados_limpios_2do_año;
    const aprobados_limpios_3er_año = req.body.aprobados_limpios_3er_año;
    const aprobados_limpios_4to_año = req.body.aprobados_limpios_4to_año;
    const aprobados_limpios_5to_año = req.body.aprobados_limpios_5to_año;

    const aprobados_con_2_1er_año = req.body.aprobados_con_2_1er_año;
    const aprobados_con_2_2do_año = req.body.aprobados_con_2_2do_año;
    const aprobados_con_2_3er_año = req.body.aprobados_con_2_3er_año;
    const aprobados_con_2_4to_año = req.body.aprobados_con_2_4to_año;
    const aprobados_con_2_5to_año = req.body.aprobados_con_2_5to_año;

    const aprobados_con_1_1er_año = req.body.aprobados_con_1_1er_año;
    const aprobados_con_1_2do_año = req.body.aprobados_con_1_2do_año;
    const aprobados_con_1_3er_año = req.body.aprobados_con_1_3er_año;
    const aprobados_con_1_4to_año = req.body.aprobados_con_1_4to_año;
    const aprobados_con_1_5to_año = req.body.aprobados_con_1_5to_año;

    const bajas_1er_año = req.body.bajas_1er_año;
    const bajas_2do_año = req.body.bajas_2do_año;
    const bajas_3er_año = req.body.bajas_3er_año;
    const bajas_4to_año = req.body.bajas_4to_año;
    const bajas_5to_año = req.body.bajas_5to_año;

    const curso_id =  req.body.curso_id;

    promocionModel.putPromociones(mie_1er_año, mie_2do_año, mie_3er_año, mie_4to_año, mie_5to_año, aprobados_limpios_1er_año, aprobados_limpios_2do_año, aprobados_limpios_3er_año, aprobados_limpios_4to_año, aprobados_limpios_5to_año, aprobados_con_2_1er_año, aprobados_con_2_2do_año, aprobados_con_2_3er_año, aprobados_con_2_4to_año, aprobados_con_2_5to_año, aprobados_con_1_1er_año, aprobados_con_1_2do_año, aprobados_con_1_3er_año, aprobados_con_1_4to_año, aprobados_con_1_5to_año, bajas_1er_año, bajas_2do_año, bajas_3er_año, bajas_4to_año, bajas_5to_año, curso_id, id, (err, result) => {
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
    const {id} = req.params;

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
