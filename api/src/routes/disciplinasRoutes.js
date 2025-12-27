import { Router } from 'express';
const router = Router();

import { getDisciplinas, postDisciplinas, putDisciplinas, deleteDisciplinas } from '../controllers/disciplinasController.js';

router.get('/', getDisciplinas);
router.post('/', postDisciplinas);
router.put('/:id', putDisciplinas);
router.delete('/:id', deleteDisciplinas);

export default router;
