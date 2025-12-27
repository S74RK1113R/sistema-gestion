import { Router } from 'express';
const router = Router();

import { getPosgrados, postPosgrados, putPosgrados, deletePosgrados } from '../controllers/posgradoController.js';

router.get('/', getPosgrados);
router.post('/', postPosgrados);
router.put('/:id', putPosgrados);
router.delete('/:id', deletePosgrados);

export default router;
