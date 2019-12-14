import {TypeActions} from '../../TypeActions'

export const EditNews = (id, title, description) =>({
    type:TypeActions.EDIT_NEWS,
    id,
    title,
    description
})