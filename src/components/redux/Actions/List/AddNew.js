import {TypeActions} from '../../TypeActions'

export const AddNew = (id, title, description) =>({
    type:TypeActions.ADD_NEWS,
    id,
    title,
    description
})
