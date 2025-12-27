import { estudiantesInvestigandoModel } from '../models/estudiantesInvestigandoModel.js';

export function getEstudiantes(req, res) {
    estudiantesInvestigandoModel.getEstudiantes((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(200).json({ data: result });
    });
}

export function postEstudiantes(req, res) {
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;
    const primer_año = req.body['1er_año'] ?? req.body.primer_año ?? req.body.primer ?? null;
    const segundo_año = req.body['2do_año'] ?? req.body.segundo_año ?? req.body.segundo ?? null;
    const tercero_año = req.body['3er_año'] ?? req.body.tercero_año ?? req.body.tercero ?? null;
    const cuarto_año = req.body['4to_año'] ?? req.body.cuarto_año ?? req.body.cuarto ?? null;
    const quinto_año = req.body['5to_año'] ?? req.body.quinto_año ?? req.body.quinto ?? null;

    estudiantesInvestigandoModel.postEstudiantes(anio_evaluacion, primer_año, segundo_año, tercero_año, cuarto_año, quinto_año, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ message: 'Registro creado exitosamente', data: { idInserted: result } });
    });
}

export function putEstudiantes(req, res) {
    const { id } = req.params;
    const anio_evaluacion = req.body['año_evaluacion'] ?? req.body.anio_evaluacion ?? null;
    const primer_año = req.body['1er_año'] ?? req.body.primer_año ?? req.body.primer ?? null;
    const segundo_año = req.body['2do_año'] ?? req.body.segundo_año ?? req.body.segundo ?? null;
    const tercero_año = req.body['3er_año'] ?? req.body.tercero_año ?? req.body.tercero ?? null;
    const cuarto_año = req.body['4to_año'] ?? req.body.cuarto_año ?? req.body.cuarto ?? null;
    const quinto_año = req.body['5to_año'] ?? req.body.quinto_año ?? req.body.quinto ?? null;

    estudiantesInvestigandoModel.putEstudiantes(id, anio_evaluacion, primer_año, segundo_año, tercero_año, cuarto_año, quinto_año, (err, result) => {
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

export function deleteEstudiantes(req, res) {
    const { id } = req.params;
    estudiantesInvestigandoModel.deleteEstudiantes(id, (err, result) => {
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
