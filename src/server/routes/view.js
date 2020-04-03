import {Router} from 'express';

import {respondAction} from '../services/dispatch';
import {
  viewNewsAC,
  loadPartNewsAC,
  searchByTitleAC,
} from '../../store/redusers/ViewRedusers';

import {
  getAllNewsDB,
  getNewsByAuthorDB,
  getNewsByTitleDB,
} from '../mongoose/api';

const router = Router();

router.post('/author', getNewsByAuthorDB, (req, res) =>{
  respondAction(req, res, viewNewsAC(req.result), 200);
});

router.post('/search', getNewsByTitleDB, (req, res) =>{
  respondAction(req, res, searchByTitleAC(req.result), 200);
});

router.post('/', getAllNewsDB, (req, res) =>{
  // Нужен рефакторинг
  const startIndex = req.body.length;
  const endIndex = startIndex + req.body.size;

  const currentArr = req.result;
  const resArr = sliceNews(startIndex, endIndex, currentArr);
  const isLeft = resArr.length>=req.body.size;

  respondAction(req, res, loadPartNewsAC(resArr, isLeft), 200);
});

export default router;

const sliceNews = (start, end, arr) =>{
  return arr.slice(start, end);
};
