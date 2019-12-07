import {TypeActions} from '../../TypeActions'

export const AddNew = (id, title, description) =>({
    type:TypeActions.ADD_NEW,
    id,
    title,
    description
})
