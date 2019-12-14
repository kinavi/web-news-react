import { TypeActions } from '../TypeActions'
import { News } from './News'
import { ListNews } from './ListNews'

export const App_R = (state = {}, action) =>
{
    switch(action.type)
    {
        case TypeActions.LOAD_LIST_NEWS:
            return {...state,
                ListNews:action.value
            }
        case TypeActions.ADD_NEWS:
            return {
                ...state,
                ListNews:ListNews(state.ListNews, action)
            }
        case TypeActions.REMOVE_NEWS:
            return{
                ...state,
                ListNews:ListNews(state.ListNews, action)
            }
        case TypeActions.EDIT_NEWS:
            return {
                ...state,
                ListNews:ListNews(state.ListNews, action)
            }
        default:
            return state
    }
}