import { createStore } from 'redux' 
import { EditNews } from '../redux/Actions/List/EditNews'
import { App_R } from '../redux/Reducers/App_R'

describe("editCell", () => {
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

        store.dispatch(EditNews(1,'title', 'description'))
    })

    it("Текущее состояние ",()=> expect(store.getState().ListNews).toEqual(
        [
            {
                id:1,
                title:"title",
                description:"description"
            },{
                id:2,
                title:"awe",
                description:"awe"
            }
        ]
    ))
})