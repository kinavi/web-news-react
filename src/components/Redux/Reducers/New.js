import { TypeActions } from '../TypeActions'

export const New = (state = {}, action) =>
{
    switch(action.type)
    {
        // case TypeActions.LOAD_LIST:
        //     return {...state,
        //         News:action.value//List([],action)
        //     }
        case TypeActions.ADD_NEW:
            return {
                id:action.id,
                title:action.title,
                description:action.description
            }
        default:
            return state
    }
}
