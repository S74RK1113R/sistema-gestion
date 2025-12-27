import { Router } from 'express';
const router = Router();

import { getExistencias, postExistencias, putExistencias, deleteExistencias } from '../controllers/existenciaPosgradoController.js';

router.get('/', getExistencias);
router.post('/', postExistencias);
router.put('/:id', putExistencias);
router.delete('/:id', deleteExistencias);

export default router;
