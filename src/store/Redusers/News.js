import { TypeActions } from '../TypeActions'

export const News = (state = {}, action) =>
{
    switch(action.type)
    {
        case TypeActions.ADD_NEWS:
            return {
                id:action.id,
                title:action.title,
                description:action.description,
                fileName:action.fileName
            }
        case TypeActions.EDIT_NEWS:
            return{
                id:action.id,
                title:action.title,
                description:action.description,
                fileName:action.fileName
            }
        default:
            return state
    }
}
