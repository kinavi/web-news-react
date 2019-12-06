import { TypeActions } from '../TypeActions'
import { List } from './List'

export const App_R = (state = {}, action) =>
{
    switch(action.type)
    {
        case TypeActions.LOAD_LIST:
            return {...state,
                News:action.value//List([],action)
            }
        default:
            return state
    }
}