import {News} from '.';

// cms
const getNewsByIdDB = async (req, res, next) =>{
  if (!req.body) return res.sendStatus(400);
  req.result = await News.find({userId: req.body.userId})
      .sort({dateCreate: -1});
  next();
};

const getNewsByAuthorDB = async (req, res, next) =>{
  if (!req.body) return res.sendStatus(400);
  req.result = await News.find({author: req.body.author})
      .sort({dateCreate: -1});
  next();
};

const getNewsByTitleDB = async (req, res, next) =>{
  console.log('req.value ', req.body.value)
  req.result = await News.find({title: req.body.value})
      .sort({dateCreate: -1});

  next();
};

const getAllNewsDB = async (req, res, next) =>{
  req.result = await News.find({})
      .sort({dateCreate: -1});

  next();
};

const getListAuthorDB = async (req, res, next) =>{
  req.authors = getListAuthors(req.result);
  next();
};

const getListAuthors = (arr) =>{
  const result = [];
  arr.map((item)=>{
    if (!result.includes(item.author)) {
      result.push(item.author);
    }
  });
  return result;
};

//



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

const getNewsByNewsIdDB = async (req, res, next) =>{
  req.result = await News.findOne({_id: req.body.newsId});
  console.log('req.result -', req.result);
  next();
}

export {
  addNewsDB,
  editNewsDB,
  removeNewsDB,
  getAuthorDB,
  getNewsByIdDB,
  getNewsByAuthorDB,
  getAllNewsDB,
  getListAuthorDB,
  getNewsByTitleDB,
  getNewsByNewsIdDB
};
