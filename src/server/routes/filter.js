import {Router} from 'express';

import {dispatchAndRespond, respondAction} from '../services/dispatch';

import {viewListAuthorAC} from '../../store/redusers/FilterRedusers';
import {getNewsByIdDB, getNewsByAuthorDB, getListAuthorDB, getAllNewsDB} from '../mongoose/api';

const router = Router();

router.get('/author', getAllNewsDB, getListAuthorDB, (req, res) =>{
  respondAction(req, res, viewListAuthorAC(req.authors), 200);
});

export default router;


