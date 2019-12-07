import { TypeActions } from '../TypeActions'
import { New } from './New'

export const App_R = (state = {}, action) =>
{
    switch(action.type)
    {
        case TypeActions.LOAD_LIST:
            return {...state,
                News:action.value
            }
        case TypeActions.ADD_NEW:
            return {
                ...state,
                News:[...state.News, New({},action)]
            }
        default:
            return state
    }
}