import { Router } from 'express';
const router = Router();

import { getProyectos, postProyectos, putProyectos, deleteProyectos } from '../controllers/incorporacionInvestigacionCientificaController.js';

router.get('/', getProyectos);
router.post('/', postProyectos);
router.put('/:id', putProyectos);
router.delete('/:id', deleteProyectos);

export default router;
