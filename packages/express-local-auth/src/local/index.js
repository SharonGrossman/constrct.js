import { Router } from 'express';
import { index, admin } from './controller';
import './passport';

const router = new Router();

router.post('/', index);
router.post('/admin', admin);

export default router;
