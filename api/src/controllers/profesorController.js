import { profesoresModel } from '../models/profesorModel.js';

export function getProfesores(req, res) {
    profesoresModel.getProfesores((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postProfesores(req, res) {
    const primer_apellido = req.body.primer_apellido ?? null;
    const segundo_apellido = req.body.segundo_apellido ?? null;
    const nombres = req.body.nombres ?? null;
    const exp_educacion_superior = req.body.exp_educacion_superior ?? null;
    const exp_carrera = req.body.exp_carrera ?? null;
    const lugar_procedencia = req.body.lugar_procedencia ?? null;
    const categoria_docente = req.body.categoria_docente ?? null;
    const funcion = req.body.funcion ?? null;
    const consultante_emerito = req.body['consultante/emerito'] ?? req.body.consultante_emerito ?? req.body.consultanteEmerito ?? null;
    const grado_cientifico = req.body.grado_cientifico ?? null;
    const doctor_esp_afin = req.body.doctor_esp_afin ?? null;
    const asignatura_id = req.body.asignatura_id ?? null;
    const asignatura_id_2 = req.body.asignatura_id_2 ?? null;
    const asignatura_id_3 = req.body.asignatura_id_3 ?? null;
    const asignatura_id_4 = req.body.asignatura_id_4 ?? null;
    const asignatura_id_5 = req.body.asignatura_id_5 ?? null;
    const asignatura_id_6 = req.body.asignatura_id_6 ?? null;
    const participacion_posgrado = req.body.participacion_posgrado ?? null;
    const profesor_principal_anyo = req.body['profesor_principal_año'] ?? req.body.profesor_principal_anio ?? req.body.profesor_principal_anyo ?? null;
    const sede_universitaria_id = req.body.sede_universitaria_id ?? null;

    profesoresModel.postProfesores(primer_apellido, segundo_apellido, nombres, exp_educacion_superior, exp_carrera, lugar_procedencia, categoria_docente, funcion, consultante_emerito, grado_cientifico, doctor_esp_afin, asignatura_id, asignatura_id_2, asignatura_id_3, asignatura_id_4, asignatura_id_5, asignatura_id_6, participacion_posgrado, profesor_principal_anyo, sede_universitaria_id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Profesor creado exitosamente', data: { idInserted: result } });
    });
}

export function putProfesores(req, res) {
    const { id } = req.params;
    const primer_apellido = req.body.primer_apellido ?? null;
    const segundo_apellido = req.body.segundo_apellido ?? null;
    const nombres = req.body.nombres ?? null;
    const exp_educacion_superior = req.body.exp_educacion_superior ?? null;
    const exp_carrera = req.body.exp_carrera ?? null;
    const lugar_procedencia = req.body.lugar_procedencia ?? null;
    const categoria_docente = req.body.categoria_docente ?? null;
    const funcion = req.body.funcion ?? null;
    const consultante_emerito = req.body['consultante/emerito'] ?? req.body.consultante_emerito ?? req.body.consultanteEmerito ?? null;
    const grado_cientifico = req.body.grado_cientifico ?? null;
    const doctor_esp_afin = req.body.doctor_esp_afin ?? null;
    const asignatura_id = req.body.asignatura_id ?? null;
    const asignatura_id_2 = req.body.asignatura_id_2 ?? null;
    const asignatura_id_3 = req.body.asignatura_id_3 ?? null;
    const asignatura_id_4 = req.body.asignatura_id_4 ?? null;
    const asignatura_id_5 = req.body.asignatura_id_5 ?? null;
    const asignatura_id_6 = req.body.asignatura_id_6 ?? null;
    const participacion_posgrado = req.body.participacion_posgrado ?? null;
    const profesor_principal_anyo = req.body['profesor_principal_año'] ?? req.body.profesor_principal_anio ?? req.body.profesor_principal_anyo ?? null;
    const sede_universitaria_id = req.body.sede_universitaria_id ?? null;

    profesoresModel.putProfesores(id, primer_apellido, segundo_apellido, nombres, exp_educacion_superior, exp_carrera, lugar_procedencia, categoria_docente, funcion, consultante_emerito, grado_cientifico, doctor_esp_afin, asignatura_id, asignatura_id_2, asignatura_id_3, asignatura_id_4, asignatura_id_5, asignatura_id_6, participacion_posgrado, profesor_principal_anyo, sede_universitaria_id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Profesor no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Profesor actualizado exitosamente' });
    });
}

export function deleteProfesores(req, res) {
    const { id } = req.params;
    profesoresModel.deleteProfesores(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Profesor no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Profesor eliminado exitosamente' });
    });
}
