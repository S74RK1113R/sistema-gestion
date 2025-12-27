import { Router } from 'express';
const router = Router();

import { getMatriculas, postMatriculas, putMatriculas, deleteMatriculas } from '../controllers/matriculasController.js';

router.get('/', getMatriculas);
router.post('/', postMatriculas);
router.put('/:id', putMatriculas);
router.delete('/:id', deleteMatriculas);

export default router;
