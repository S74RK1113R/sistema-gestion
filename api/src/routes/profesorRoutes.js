import { Router } from 'express';
const router = Router();

import { getProfesores, postProfesores, putProfesores, deleteProfesores } from '../controllers/profesorController.js';

router.get('/', getProfesores);
router.post('/', postProfesores);
router.put('/:id', putProfesores);
router.delete('/:id', deleteProfesores);

export default router;
