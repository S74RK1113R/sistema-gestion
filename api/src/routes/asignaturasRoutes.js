import { Router } from 'express';
const router = Router();

import { getAsignaturas, postAsignaturas, putAsignaturas, deleteAsignaturas } from '../controllers/asignaturasController.js';

router.get('/', getAsignaturas);
router.post('/', postAsignaturas);
router.put('/:id', putAsignaturas);
router.delete('/:id', deleteAsignaturas);

export default router;
