import { Router } from 'express';
const router = Router();
import { getUsers, postUsers,putUsers, deleteUsers } from '../controllers/usersController.js';

router.get('/', getUsers);
router.post('/', postUsers);
router.put('/:id', putUsers);
router.delete('/:id', deleteUsers);

export default router;