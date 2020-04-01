// const router = Router();

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
export default multer({storage: storageConfig}).any();
// router.use(multer({storage: storageConfig}).any());

