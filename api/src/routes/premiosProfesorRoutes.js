import { Router } from 'express';
const router = Router();

import { getPremiosProfesor, postPremiosProfesor, putPremiosProfesor, deletePremiosProfesor } from '../controllers/premiosProfesorController.js';

router.get('/', getPremiosProfesor);
router.post('/', postPremiosProfesor);
router.put('/:id', putPremiosProfesor);
router.delete('/:id', deletePremiosProfesor);

export default router;
