import {Router} from 'express';

import multer from '../middlewares/multer';
import {dispatchAndRespond, respondAction} from '../services/dispatch';

import {addNewsDB, editNewsDB, removeNewsDB, getNewsByIdDB} from '../mongoose/api';
import {
  addNewAC,
  editNewAC,
  removeNewsAC,
} from '../../store/redusers/NewsRedusers';

import {
  loadNewsByIdAC,
} from '../../store/redusers/CmsRedusers';

const router = Router();

router.post('/', getNewsByIdDB, (req, res) =>{
  try {
    if (!req.result) return res.sendStatus(400);

    respondAction(req, res, loadNewsByIdAC(req.result), 200);
  } catch (e) {
    console.log('Error --> ', e);
    res.sendStatus(500).send(e);
  }
});

router.post('/add', addNewsDB, (req, res) =>{
  try {
    if (!req.result) return res.sendStatus(400);
    // console.log('req.result - ', req.result);

    dispatchAndRespond(req, res, addNewAC(req.result));
  } catch (e) {
    console.log('Error --> ', e);
    res.sendStatus(500).send(e);
  }
});


router.put('/edit', editNewsDB, (req, res) =>{
  try {
    if (!req.result) return res.sendStatus(400);

    dispatchAndRespond(req, res, editNewAC(req.result));
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});


router.delete('/remove', removeNewsDB, (req, res) => {
  try {
    if (!req.body&&!req.result.ok) return res.sendStatus(400);

    dispatchAndRespond(req, res, removeNewsAC(req.body.id));
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});

router.post('/upload', multer, (req, res, next)=>{
  const filedata = req.files;
  if (!filedata) {
    res.send('Ошибка при загрузке файла');
  } else {
    res.send('Файл загружен');
  }
});

export default router;
