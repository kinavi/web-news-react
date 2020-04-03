import {Router} from 'express';

import {respondAction} from '../services/dispatch';

import {getNewsByNewsIdDB} from '../mongoose/api';
import {getNewsByIdAC} from '../../store/redusers/NewsRedusers';

const router = Router();

router.post('/', getNewsByNewsIdDB, (req, res) => {
  if (!req.result) return res.sendStatus(400);

  respondAction(req, res, getNewsByIdAC(req.result), 200);
});

export default router;
