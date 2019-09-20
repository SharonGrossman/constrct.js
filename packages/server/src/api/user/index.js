import { AsyncRouter } from 'express-async-router';
import objectId from 'express-param-objectid';
import { authenticate, isAdmin, injectUser, validate } from '../../middlewares';
import { update, create } from './user.schema';
import * as controller from './user.controller';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', isAdmin(), controller.index);
router.get('/me', authenticate(), injectUser(), controller.me);
router.post('/', validate({ schema: create }), controller.create);
router.get('/:id', isAdmin(), injectUser(), controller.show);
router.put('/:id', validate({ schema: update }), authenticate(), injectUser(), controller.update);

export default router;
