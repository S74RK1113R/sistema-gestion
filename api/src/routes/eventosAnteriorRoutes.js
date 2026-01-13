import { Router } from 'express';
const router = Router();

import { getEventos, postEventos, putEventos, deleteEventos } from '../controllers/eventosAnteriorController.js';

router.get('/', getEventos);
router.post('/', postEventos);
router.put('/:id', putEventos);
router.delete('/:id', deleteEventos);

export default router;
