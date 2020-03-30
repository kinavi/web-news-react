import {Router} from 'express';

import user from './user';
import cms from './cms';

// import * as express from 'express';
// import items from './items';
const router = Router();
// const app = express();
router.use('/users', user);
router.use('/cms', cms);
// user(app);
// items(app);

export default router;
