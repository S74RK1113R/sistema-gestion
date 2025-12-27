import { Router } from 'express';
const router = Router();

import { getEstudiantes, postEstudiantes, putEstudiantes, deleteEstudiantes } from '../controllers/estudiantesInvestigandoController.js';

router.get('/', getEstudiantes);
router.post('/', postEstudiantes);
router.put('/:id', putEstudiantes);
router.delete('/:id', deleteEstudiantes);

export default router;
