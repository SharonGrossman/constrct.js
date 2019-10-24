import { AsyncRouter } from 'express-async-router';
import validate from 'express-validation-middleware';
import { create } from '../user/user.schema';
import { login, register, authAdmin } from './auth.controller';
import './passport';

const router = new AsyncRouter();

router.post('/login', login);
router.post('/register', validate({ schema: create }), register);
router.post('/admin', authAdmin);

export default router;
