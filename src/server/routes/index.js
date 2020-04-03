import {Router} from 'express';

import user from './user';
import cms from './cms';
import filter from './filter';
import view from './view';
import news from './news';

const router = Router();

router.use('/users', user);
router.use('/cms', cms);
router.use('/filter', filter);
router.use('/view', view);
router.use('/news', news);

export default router;
