import { Router } from 'express';
const router = Router();

import { getPublicaciones, postPublicacion, putPublicacion, deletePublicacion } from '../controllers/publicacionesController.js';

router.get('/', getPublicaciones);
router.post('/', postPublicacion);
router.put('/:id', putPublicacion);
router.delete('/:id', deletePublicacion);

export default router;
