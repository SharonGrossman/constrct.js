import { AsyncRouter } from 'express-async-router';
import objectId from 'express-param-objectid';
import validate from 'express-validation-middleware';
import { authenticate, isAdmin } from 'express-auth';
import { update } from './user.schema';
import * as controller from './user.controller';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', isAdmin(), controller.index);
router.get('/me', authenticate(), controller.me);
router.get('/:id', isAdmin(), controller.show);
router.put('/:id', validate({ schema: update }), authenticate(), controller.update);

export default router;
