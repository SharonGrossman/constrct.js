import { AsyncRouter } from 'express-async-router';
import objectId from 'express-param-objectid';
import { isAuthenticated } from '../../auth/auth.service';
import * as controller from './course.controller';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

export default router;
