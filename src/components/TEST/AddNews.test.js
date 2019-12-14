import { createStore } from 'redux' 
import { AddNew } from '../redux/Actions/List/AddNew'
import { App_R } from '../redux/Reducers/App_R'

describe("addCell", () => {
    let store;

    let initialState = {
        ListNews:[
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

    it("Текущее состояние ",()=> expect(store.getState().ListNews).toEqual(
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