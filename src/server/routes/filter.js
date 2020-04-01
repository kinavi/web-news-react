import {Router} from 'express';

import {dispatchAndRespond} from '../services/dispatch';


import {addNewsDB, editNewsDB, removeNewsDB, getAuthorDB} from '../mongoose/api';

const router = Router();

router.get('/', getAuthorDB, (req, res) =>{

})

export default router;