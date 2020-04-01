import {News} from '.';

// cms
const getNewsByIdDB = async (req, res, next) =>{
  if (!req.body) return res.sendStatus(400);
  req.result = await News.find({userId: req.body.userId})
      .sort({dateCreate: -1});
  next();
};


//

const addNewsDB = async (req, res, next) =>{
  if (!req.body) return res.sendStatus(400);
  console.log('req.body.userId - ', req.body.userId);
  const target = new News({
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    fileName: req.body.fileName,
    author: req.body.author,
    dateCreate: new Date(),
  });
  req.result = await target.save();
  next();
};

const editNewsDB = async (req, res, next) =>{
  if (!req.body) return res.sendStatus(400);

  req.result = await News.findByIdAndUpdate(
      req.body.id,
      {
        title: req.body.title,
        description: req.body.description,
        fileName: req.body.fileName,
      },
      {new: true},
  );
  next();
};

const removeNewsDB = async (req, res, next) =>{
  if (!req.body) return res.sendStatus(400);

  const result = await News.deleteOne({_id: req.body.id});
  req.result=result;
  next();
};


const getAuthorDB = async (req, res, next) =>{
  const result = await News.find({author: {}});
  req.result=result;
  next();
};

export {
  addNewsDB,
  editNewsDB,
  removeNewsDB,
  getAuthorDB,
  getNewsByIdDB,
};
