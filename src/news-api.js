import { Router } from 'express'
import { TypeActions } from './store/TypeActions'
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
    console.log(action)
    req.store.dispatch(action)
    res.status(200).json(action)
}

// router.get("/cms", (req, res) =>{
//     res.status(200).json(req.store.getState().ListNews)
//     })

// router.get("/", (req, res) =>{
//     res.status(200).json(req.store.getState().ListNews)
//     })

router.post("/cms", (req, res) =>

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

router.put("/cms", (req, res) =>
    dispatchAndRespond(req, res, {
        type: TypeActions.EDIT_NEWS,
        id: req.body.id,
        title: req.body.title,
        description: req.body.description
    })
)

router.delete("/cms", (req, res) =>
    // Logger(req.body.id)(req, res, {
    //     type: TypeActions.REMOVE_NEWS,
    //     id: req.body.id
    // })
    {
        console.log(req.body)
        dispatchAndRespond(req, res, {
            type: TypeActions.REMOVE_NEWS,
            id: req.body.id
        })
    }

)

export default router

// const Logger = message => (req, res, action)  => {
//     console.log(message);
//     dispatchAndRespond(req, res, action);
// }