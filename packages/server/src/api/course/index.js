import { AsyncRouter } from 'express-async-router';
import objectId from 'express-param-objectid';
import { authenticate, validate } from '../../middlewares';
import schema from './course.schema';
import * as controller from './course.controller';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', authenticate(), controller.index);
router.post('/', validate({ schema }), authenticate(), controller.create);
router.get('/:id', authenticate(), controller.show);
router.put('/:id', validate({ schema }), authenticate, controller.update);
router.delete('/:id', authenticate(), controller.destroy);

export default router;
