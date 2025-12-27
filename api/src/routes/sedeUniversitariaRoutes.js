import express from 'express';
import { getSedes, postSede, putSede, deleteSede } from '../controllers/sedeUniversitariaController.js';

const router = express.Router();

router.get('/', getSedes);
router.post('/', postSede);
router.put('/:id', putSede);
router.delete('/:id', deleteSede);

export default router;
