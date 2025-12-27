import express from 'express';
import { getTotalGraduados, postTotalGraduados, putTotalGraduados, deleteTotalGraduados } from '../controllers/totalGraduadosController.js';

const router = express.Router();

router.get('/', getTotalGraduados);
router.post('/', postTotalGraduados);
router.put('/:id', putTotalGraduados);
router.delete('/:id', deleteTotalGraduados);

export default router;
