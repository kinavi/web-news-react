import {Router} from 'express';

import user from './user';
import cms from './cms';
import filter from './filter';

const router = Router();

router.use('/users', user);
router.use('/cms', cms);
router.use('/filter', filter);
export default router;
