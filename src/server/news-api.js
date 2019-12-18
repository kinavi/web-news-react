import { Router } from 'express'
import { TypeActions } from '../components/redux/TypeActions'
import { v4 } from 'uuid'
var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const router = Router()

const dispatchAndRespond = (req, res, action) => {
    req.store.dispatch(action)
    res.status(200).json(action)
}

router.get("/news", (req, res) =>{
    res.status(200).json(req.store.getState().ListNews)
    })



router.post("/news", (req, res) =>
    dispatchAndRespond(req, res, {
        type: TypeActions.ADD_NEWS,
        id: v4(),
        title: req.body.title,
        description: req.body.description,
        fileName:req.body.fileName,
    })
)

router.use(multer({storage:storageConfig}).any());
router.post('/upload', (req, res, next)=>{

    let filedata = req.files;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
})

router.put("/news", (req, res) =>
    dispatchAndRespond(req, res, {
        type: TypeActions.EDIT_NEWS,
        id: req.body.id,
        title: req.body.title,
        description: req.body.description
    })
)

router.delete("/news", (req, res) =>
    dispatchAndRespond(req, res, {
        type: TypeActions.REMOVE_NEWS,
        id: req.body.id
    })
)

export default router
