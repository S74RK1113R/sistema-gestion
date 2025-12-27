import { Router } from 'express';
const router = Router();

import { getEjercicios, postEjercicios, putEjercicios, deleteEjercicios } from '../controllers/ejerciciosIntegradoresController.js';

router.get('/', getEjercicios);
router.post('/', postEjercicios);
router.put('/:id', putEjercicios);
router.delete('/:id', deleteEjercicios);

export default router;
