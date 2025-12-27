import { Router } from 'express';
const router = Router();

import { getCursos, postCursos, putCursos, deleteCursos } from '../controllers/cursosController.js';

router.get('/', getCursos);
router.post('/', postCursos);
router.put('/:id', putCursos);
router.delete('/:id', deleteCursos);

export default router;
