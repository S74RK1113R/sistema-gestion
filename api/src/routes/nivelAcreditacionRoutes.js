import { Router } from 'express';
const router = Router();

import { getNiveles, postNiveles, putNiveles, deleteNiveles } from '../controllers/nivelAcreditacionController.js';

router.get('/', getNiveles);
router.post('/', postNiveles);
router.put('/:id', putNiveles);
router.delete('/:id', deleteNiveles);

export default router;
