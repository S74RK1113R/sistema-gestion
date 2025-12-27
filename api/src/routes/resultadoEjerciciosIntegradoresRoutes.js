import { Router } from 'express';
const router = Router();

import { getResultados, postResultados, putResultados, deleteResultados } from '../controllers/resultadoEjerciciosIntegradoresController.js';

router.get('/', getResultados);
router.post('/', postResultados);
router.put('/:id', putResultados);
router.delete('/:id', deleteResultados);

export default router;
