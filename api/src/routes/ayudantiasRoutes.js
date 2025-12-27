import { Router } from 'express';
const router = Router();

import { getAyudantias, postAyudantias, putAyudantias, deleteAyudantias } from '../controllers/ayudantiasController.js';

router.get('/', getAyudantias);
router.post('/', postAyudantias);
router.put('/:id', putAyudantias);
router.delete('/:id', deleteAyudantias);

export default router;
