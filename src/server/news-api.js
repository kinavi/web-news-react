import { Router } from 'express'
import { TypeActions } from '../components/redux/TypeActions'
import { v4 } from 'uuid'
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

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
        description: req.body.description
    })
)

// router.post('/upload', upload.single('test'), function (req, res, next){
//     console.log(req.file)
// })
    // dispatchAndRespond(req, res, {
    //     type: TypeActions.ADD_NEWS,
    //     id: v4(),
    //     title: req.body.title,
    //     description: req.body.description
    // })
//)



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
