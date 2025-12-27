import { publicacionModel } from '../models/publicacionModel.js';

export function getPublicaciones(req, res) {
    publicacionModel.getPublicaciones((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: result });
    });
}

export function postPublicacion(req, res) {
    const anio = req.body['año'] ?? req.body.anio ?? null;
    const titulo = req.body.titulo ?? null;
    const revistaEditorial = req.body['revista/editorial'] ?? req.body.revista_editorial ?? req.body.revista ?? null;
    const isbnIssn = req.body['isbn/issn'] ?? req.body.isbn_issn ?? req.body.isbn ?? req.body.issn ?? null;
    const clasificacion = req.body.clasificacion ?? null;
    const bd_revista = req.body.bd_revista ?? req.body.bdRevista ?? null;
    const autor_profesor_id = req.body.autor_profesor_id ?? req.body.autor_profesor ?? req.body.autorId ?? null;
    const coautor_id = req.body.coautor_id ?? req.body.coautorId ?? null;
    const coautor_id_2 = req.body.coautor_id_2 ?? req.body.coautorId2 ?? null;
    const coautor_id_3 = req.body.coautor_id_3 ?? req.body.coautorId3 ?? null;
    const grupo = req.body.grupo ?? null;

    publicacionModel.postPublicacion(anio, titulo, revistaEditorial, isbnIssn, clasificacion, bd_revista, autor_profesor_id, coautor_id, coautor_id_2, coautor_id_3, grupo, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: 'Publicación creada exitosamente', data: { idInserted: result } });
    });
}

export function putPublicacion(req, res) {
    const { id } = req.params;
    const anio = req.body['año'] ?? req.body.anio ?? null;
    const titulo = req.body.titulo ?? null;
    const revistaEditorial = req.body['revista/editorial'] ?? req.body.revista_editorial ?? req.body.revista ?? null;
    const isbnIssn = req.body['isbn/issn'] ?? req.body.isbn_issn ?? req.body.isbn ?? req.body.issn ?? null;
    const clasificacion = req.body.clasificacion ?? null;
    const bd_revista = req.body.bd_revista ?? req.body.bdRevista ?? null;
    const autor_profesor_id = req.body.autor_profesor_id ?? req.body.autor_profesor ?? req.body.autorId ?? null;
    const coautor_id = req.body.coautor_id ?? req.body.coautorId ?? null;
    const coautor_id_2 = req.body.coautor_id_2 ?? req.body.coautorId2 ?? null;
    const coautor_id_3 = req.body.coautor_id_3 ?? req.body.coautorId3 ?? null;
    const grupo = req.body.grupo ?? null;

    publicacionModel.putPublicacion(id, anio, titulo, revistaEditorial, isbnIssn, clasificacion, bd_revista, autor_profesor_id, coautor_id, coautor_id_2, coautor_id_3, grupo, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Publicación no encontrada' });
            return;
        }

        res.status(200).json({ message: 'Publicación actualizada exitosamente' });
    });
}

export function deletePublicacion(req, res) {
    const { id } = req.params;
    publicacionModel.deletePublicacion(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!result || result.affectedRows === 0) {
            res.status(404).json({ message: 'Publicación no encontrada' });
            return;
        }

        res.status(200).json({ message: 'Publicación eliminada exitosamente' });
    });
}
