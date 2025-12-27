import { Router } from 'express';
const router = Router();

import { getProfesorPrincipales, postProfesorPrincipales, putProfesorPrincipales, deleteProfesorPrincipales } from '../controllers/profesorPrincipalController.js';

router.get('/', getProfesorPrincipales);
router.post('/', postProfesorPrincipales);
router.put('/:id', putProfesorPrincipales);
router.delete('/:id', deleteProfesorPrincipales);

export default router;
