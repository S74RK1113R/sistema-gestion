import { Router } from 'express';
const router = Router();

import { getInvestigacion, postInvestigacion, putInvestigacion, deleteInvestigacion } from '../controllers/investigacionController.js';

router.get('/', getInvestigacion);
router.post('/', postInvestigacion);
router.put('/:id', putInvestigacion);
router.delete('/:id', deleteInvestigacion);

export default router;
