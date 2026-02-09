import { premiosEstudianteModel } from '../models/premiosEstudianteModel.js';

export function getPremiosEstudiante(req, res) {
    premiosEstudianteModel.getPremios((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postPremiosEstudiante(req, res) {
    const {nombre, año, nombres, primer_apellido, segundo_apellido} = req.body;

    premiosEstudianteModel.postPremios(nombre, año, nombres, primer_apellido, segundo_apellido,(err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Premio de estudiante creado exitosamente', data: { idInserted: result } });
    });
}

export function putPremiosEstudiante(req, res) {
    const { id } = req.params;
    const {nombre, año, nombres, primer_apellido, segundo_apellido} = req.body;

    premiosEstudianteModel.putPremios( nombre, año, nombres, primer_apellido, segundo_apellido, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Premio no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Premio actualizado exitosamente' });
    });
}

export function deletePremiosEstudiante(req, res) {
    const { id } = req.params;
    premiosEstudianteModel.deletePremios(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Premio no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Premio eliminado exitosamente' });
    });
}
