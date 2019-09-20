import { AsyncRouter } from 'express-async-router';
import objectId from 'express-param-objectid';
import { authenticate, injectUser, validate } from '../../middlewares';
import schema from './task.schema';
import * as controller from './task.controller';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/c/:id', authenticate(), controller.index);
router.get('/', authenticate(), controller.getAll);
router.post('/', validate({ schema }), authenticate(), controller.create);
router.get('/:id', authenticate(), controller.show);
router.put('/:id', validate({ schema }), authenticate(), injectUser(), controller.update);
router.delete('/:id', authenticate(), injectUser(), controller.destroy);

export default router;
