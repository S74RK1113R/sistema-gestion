import { Router } from 'express';
const router = Router();

import { getPremiosEstudiante, postPremiosEstudiante, putPremiosEstudiante, deletePremiosEstudiante } from '../controllers/premiosEstudianteController.js';

router.get('/', getPremiosEstudiante);
router.post('/', postPremiosEstudiante);
router.put('/:id', putPremiosEstudiante);
router.delete('/:id', deletePremiosEstudiante);

export default router;
