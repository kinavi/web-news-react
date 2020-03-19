import {Router} from 'express';
import {TypeActions} from './store/TypeActions';
import {v4} from 'uuid';
const express = require('express');
const jsonParser = express.json();

import {mongoose, News} from './mongoose';

const multer = require('multer');
// var upload = multer({ dest: 'uploads/' })

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'uploads');
  },
  filename: (req, file, cb) =>{
    cb(null, file.originalname);
  },
});

const router = Router();

const dispatchAndRespond = (req, res, action) => {
  req.store.dispatch(action);
  res.status(200).json(action);
};


router.get('/cms', (req, res) =>{
  res.status(200).json(req.store.getState().ListNews);
});

router.get('/', (req, res) => {
  // const news = await News.find({});
  // console.log('news - ', news);

  // dispatchAndRespond(req, res, {
  //   type: TypeActions.LOAD_DATA_ALL,
  //   news,
  // });
  res.status(200).json(req.store.getState().ListNews);
});

router.post('/cms', jsonParser, async (req, res) =>{
  try {
    if (!req.body) return res.sendStatus(400);

    const titleNews = req.body.title;
    const descriptionNews = req.body.description;
    const fileNameNews = req.body.fileName;
    const news = new News({
      title: titleNews,
      description: descriptionNews,
      fileName: fileNameNews,
      dateCreate: new Date(),
    });

    const result = await news.save();
    console.log('add result - ', result);
    dispatchAndRespond(req, res, {
      type: TypeActions.ADD_NEWS,
      id: result._id,
      title: result.title,
      description: result.description,
      fileName: result.fileName,
      dateCreate: result.dateCreate,
    });
  } catch (e) {
    console.log('Error --> ', e);
    res.sendStatus(500).send(e);
  }
});

router.use(multer({storage: storageConfig}).any());
router.post('/upload', (req, res, next)=>{
  const filedata = req.files;
  console.log(filedata);
  if (!filedata) {
    res.send('Ошибка при загрузке файла');
  } else {
    res.send('Файл загружен');
  }
});


router.put('/cms', jsonParser, async (req, res) =>{
  try {
    // console.log('edit');
    if (!req.body) return res.sendStatus(400);

    const idNews = req.body.id;
    const titleNews = req.body.title;
    const descriptionNews = req.body.description;
    const fileNameNews = req.body.fileName;

    const result = await News.findByIdAndUpdate(
        idNews,
        {
          title: titleNews,
          description: descriptionNews,
          fileName: fileNameNews,
        },
        {new: true},
    );
    console.log('result -', result );
    dispatchAndRespond(req, res, {
      type: TypeActions.EDIT_NEWS,
      id: result._id,
      title: result.title,
      description: result.description,
      fileName: result.fileName,
    });
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});
router.delete('/cms', jsonParser, async (req, res) => {
  try {
    // console.log('remove');
    if (!req.body) return res.sendStatus(400);

    const idNews = req.body.id;

    await News.deleteOne({_id: idNews});

    dispatchAndRespond(req, res, {
      type: TypeActions.REMOVE_NEWS,
      id: idNews,
    });
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});

export default router;

// const Logger = message => (req, res, action)  => {
//     console.log(message);
//     dispatchAndRespond(req, res, action);
// }
