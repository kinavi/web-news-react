import { TypeActions } from '../TypeActions'
import { News } from './News'

export const ListNews = (state = [], action) =>
{
    switch(action.type)
    {
        case TypeActions.ADD_NEWS:
            return [News({},action), ...state]
        case TypeActions.REMOVE_NEWS:
            return state.filter(n=>n.id!==action.id)
        case TypeActions.EDIT_NEWS:
            return state.map(n=>(n.id!=action.id)?n:News(n,action))
        default:
            return state
    }
}