import { AsyncRouter } from 'express-async-router';
import objectId from 'express-param-objectid';
import { isAuthenticated } from '../../auth/auth.service';
import * as controller from './task.controller';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/c/:id', isAuthenticated(), controller.index);
router.get('/', isAuthenticated(), controller.getAll);
router.post('/', isAuthenticated(), controller.create);
router.get('/:id', isAuthenticated(), controller.show);
router.put('/:id', isAuthenticated(), controller.update);
router.delete('/:id', isAuthenticated(), controller.destroy);

export default router;
