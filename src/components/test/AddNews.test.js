import { createStore } from 'redux' 
import { AddNew } from '../Redux/Actions/List/AddNew'
import { App_R } from '../Redux/Reducers/App_R'

describe("addCell", () => {
    let store;

    let initialState = {
        News:[
            {
                id:1,
                title:"Новость №1",
                description:"Что-то случилось в Артемовске"
            },{
                id:2,
                title:"awe",
                description:"awe"
            }
        ]
    }

    beforeAll(() => {
        store = createStore(
            App_R,
            initialState
        )

        store.dispatch(AddNew(5,'title', 'description'))
    })

    it("Текущее состояние ",()=> expect(store.getState().News).toEqual(
        [
            {
                id:1,
                title:"Новость №1",
                description:"Что-то случилось в Артемовске"
            },{
                id:2,
                title:"awe",
                description:"awe"
            },
            {
                id:5,
                title:"title",
                description:"description"
            }
        ]
    ))
})