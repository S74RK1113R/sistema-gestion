import { Router } from 'express';
const router = Router();

import { getClaustros, postClaustros, putClaustros, deleteClaustros } from '../controllers/claustroController.js';

router.get('/', getClaustros);
router.post('/', postClaustros);
router.put('/:id', putClaustros);
router.delete('/:id', deleteClaustros);

export default router;
