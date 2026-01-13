import { incorporacionInvestigacionCientificaModel } from '../models/incorporacionInvestigacionCientificaModel.js';

export function getProyectos(req, res) {
    incorporacionInvestigacionCientificaModel.getProyectos((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postProyectos(req, res) {
    const {institucional, nacional, internacional, cantidad_profesores_incorporados, estudiantes_investigando_1er_año, estudiantes_investigando_2do_año, estudiantes_investigando_3er_año, estudiantes_investigando_4to_año, estudiantes_investigando_5to_año, año_evaluacion} = req.body

    incorporacionInvestigacionCientificaModel.postProyectos(institucional, nacional, internacional, cantidad_profesores_incorporados, estudiantes_investigando_1er_año, estudiantes_investigando_2do_año, estudiantes_investigando_3er_año, estudiantes_investigando_4to_año, estudiantes_investigando_5to_año, año_evaluacion, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Registro creado exitosamente', data: { idInserted: result } });
    });
}

export function putProyectos(req, res) {
    const {id} = req.params;
    const {institucional, nacional, internacional, cantidad_profesores_incorporados, estudiantes_investigando_1er_año, estudiantes_investigando_2do_año, estudiantes_investigando_3er_año, estudiantes_investigando_4to_año, estudiantes_investigando_5to_año, año_evaluacion} = req.body

    incorporacionInvestigacionCientificaModel.putProyectos(institucional, nacional, internacional, cantidad_profesores_incorporados, estudiantes_investigando_1er_año, estudiantes_investigando_2do_año, estudiantes_investigando_3er_año, estudiantes_investigando_4to_año, estudiantes_investigando_5to_año, año_evaluacion, id, (err, result) => {
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

export function deleteProyectos(req, res) {
    const { id } = req.params;
    incorporacionInvestigacionCientificaModel.deleteProyectos(id, (err, result) => {
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
