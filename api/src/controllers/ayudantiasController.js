import { ayudantiasModel } from '../models/ayudantiaModel.js';

export function getAyudantias(req, res) {
    ayudantiasModel.getAyudantias((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postAyudantias(req, res) {
    const { educacion_superior_1er_año, educacion_superior_2do_año, educacion_superior_3er_año, educacion_superior_4to_año, educacion_superior_5to_año, educacion_media_1er_año, educacion_media_2do_año, educacion_media_3er_año, educacion_media_4to_año, educacion_media_5to_año, año_evaluacion } = req.body;

    ayudantiasModel.postAyudantias(educacion_superior_1er_año, educacion_superior_2do_año, educacion_superior_3er_año, educacion_superior_4to_año, educacion_superior_5to_año, educacion_media_1er_año, educacion_media_2do_año, educacion_media_3er_año, educacion_media_4to_año, educacion_media_5to_año, año_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Registro de ayudantía creado exitosamente', data: { idInserted: result } });
    });
}

export function putAyudantias(req, res) {
    const {id} = req.params

    const { educacion_superior_1er_año, educacion_superior_2do_año, educacion_superior_3er_año, educacion_superior_4to_año, educacion_superior_5to_año, educacion_media_1er_año, educacion_media_2do_año, educacion_media_3er_año, educacion_media_4to_año, educacion_media_5to_año, año_evaluacion } = req.body;

    ayudantiasModel.putAyudantias(educacion_superior_1er_año, educacion_superior_2do_año, educacion_superior_3er_año, educacion_superior_4to_año, educacion_superior_5to_año, educacion_media_1er_año, educacion_media_2do_año, educacion_media_3er_año, educacion_media_4to_año, educacion_media_5to_año, año_evaluacion, id, (err, result) => {

        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro de ayudantía no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de ayudantía actualizado exitosamente' });
    });
}

export function deleteAyudantias(req, res) {
    const { id } = req.params;
    ayudantiasModel.deleteAyudantias(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Registro de ayudantía no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Registro de ayudantía eliminado exitosamente' });
    });
}
