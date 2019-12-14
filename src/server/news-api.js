import { Router } from 'express'
import { TypeActions } from '../components/redux/TypeActions'
import { v4 } from 'uuid'

const router = Router()

const dispatchAndRespond = (req, res, action) => {
    req.store.dispatch(action)
    res.status(200).json(action)
}

router.get("/news", (req, res) =>{
    res.status(200).json(req.store.getState().ListNews)
    console.log(res.status(200))
    })

router.post("/news", (req, res) =>
    dispatchAndRespond(req, res, {
        type: TypeActions.ADD_NEWS,
        id: v4(),
        title: req.body.title,
        description: req.body.description
    })
)

router.put("/color/:id", (req, res) =>
    dispatchAndRespond(req, res, {
        type: TypeActions.EDIT_NEWS,
        id: req.params.id,
        title: req.body.title,
        description: req.body.description
    })
)

router.delete("/color/:id", (req, res) =>
    dispatchAndRespond(req, res, {
        type: TypeActions.REMOVE_NEWS,
        id: req.params.id
    })
)

export default router
