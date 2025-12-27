import { Router } from 'express';
const router = Router();

import { getPromociones, postPromociones, putPromociones, deletePromociones } from '../controllers/promocionController.js';

router.get('/', getPromociones);
router.post('/', postPromociones);
router.put('/:id', putPromociones);
router.delete('/:id', deletePromociones);

export default router;
