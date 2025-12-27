import { Router } from 'express';
const router = Router();

import { getProfesoresIncorporados, postProfesoresIncorporados, putProfesoresIncorporados, deleteProfesoresIncorporados } from '../controllers/profesoresIncorporadosController.js';

router.get('/', getProfesoresIncorporados);
router.post('/', postProfesoresIncorporados);
router.put('/:id', putProfesoresIncorporados);
router.delete('/:id', deleteProfesoresIncorporados);

export default router;
