import { Router } from 'express';
import { index, register } from './controller';
import './passport';

const router = new Router();

router.post('/', index);
router.post('/register', register);

export default router;
